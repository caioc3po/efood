import * as S from './styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import Entrega from '../Entrega'
import Pagamento from '../Pagamento'
import Confirmacao from '../Confirmacao'
import { useState } from 'react'
import { FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      name: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      code: '',
      expiringMonth: '',
      expiringYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome deve conter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'Este CEP não é válido')
        .max(8, 'Este CEP não é válido')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      cardName: Yup.string()
        .min(5, 'O nome deve conter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'Este numero de cartão não é válido')
        .max(16, 'Este numero de cartão não é válido')
        .required('O campo é obrigatório'),
      code: Yup.string()
        .min(3, 'O CVV deve ter 3 números')
        .max(3, 'O CVV deve ter 3 números')
        .required('O campo é obrigatório'),
      expiringMonth: Yup.string().min(1).max(2, 'Este mês não existe'),
      expiringYear: Yup.string().min(4, 'Não').max(4, 'Este ano não existe')
    }),
    onSubmit: async (values) => {
      try {
        const response = await purchase({
          delivery: {
            receiver: values.name,
            address: {
              description: values.description,
              city: values.city,
              zipCode: values.zipCode,
              number: values.number,
              complement: values.complement
            }
          },
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: values.code,
              expires: {
                month: values.expiringMonth,
                year: values.expiringYear
              }
            }
          }
        }).unwrap()

        if (response) {
          items.forEach((item) => {
            removeItem(item.id) // chama sua função de remover item
          })
          setStep('confirmacao')
        }
      } catch (err) {
        console.error('Erro ao finalizar a compra:', err)
      }
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const [step, setStep] = useState<
    'carrinho' | 'entrega' | 'pagamento' | 'confirmacao'
  >('carrinho')

  const nextStep = () => {
    setStep((prev) => {
      if (prev === 'carrinho') return 'entrega'
      if (prev === 'entrega') return 'pagamento'
      if (prev === 'pagamento') return 'confirmacao'
      return prev
    })
  }

  const prevStep = () => {
    setStep((prev) => {
      if (prev === 'confirmacao') return 'pagamento'
      if (prev === 'pagamento') return 'entrega'
      if (prev === 'entrega') return 'carrinho'
      return prev
    })
  }

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CarrinhoPage style={{ display: isOpen ? 'flex' : 'none' }}>
      <FormikProvider value={form}>
        <form onSubmit={form.handleSubmit}>
          {step === 'carrinho' && (
            <S.Carrinho>
              <div className="itemList">
                {items.length === 0 ? (
                  <h4>Sem produtos no carrinho</h4>
                ) : (
                  items.map((item) => (
                    <S.CarrinhoItem key={item.id}>
                      <img src={item.foto} alt="" />
                      <div>
                        <h5>{item.nome}</h5>
                        <p>
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(item.preco)}
                        </p>
                      </div>
                      <img
                        onClick={() => removeItem(item.id)}
                        className="delete-btn"
                        src={lixeira}
                        alt=""
                      />
                    </S.CarrinhoItem>
                  ))
                )}
              </div>
              <div className="totalValue">
                <h6>Valor total</h6>
                <h6>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(getTotalPrice())}
                </h6>
              </div>
              <button onClick={items.length < 1 ? undefined : nextStep}>
                Continuar com a entrega
              </button>
            </S.Carrinho>
          )}
          {step === 'entrega' && (
            <Entrega
              getErrorMessage={getErrorMessage}
              errors={form.errors}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 'pagamento' && (
            <Pagamento
              getTotalPrice={getTotalPrice}
              getErrorMessage={getErrorMessage}
              errors={form.errors}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 'confirmacao' && (
            <Confirmacao data={data} closeCart={closeCart} setStep={setStep} />
          )}
        </form>

        <div onClick={closeCart} className="overlay" />
      </FormikProvider>
    </S.CarrinhoPage>
  )
}

export default Carrinho
