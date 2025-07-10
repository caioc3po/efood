import * as S from './styles'
import { FormikErrors, useFormikContext } from 'formik'

type Props = {
  nextStep: () => void
  prevStep: () => void
  getErrorMessage: (fieldName: string, message?: string) => string | undefined
  errors: FormikErrors<{
    name: string
    description: string
    city: string
    zipCode: string
    number: string
    complement: string
  }>
}

const Entrega = ({ nextStep, prevStep, getErrorMessage, errors }: Props) => {
  const { values, handleChange, handleBlur } = useFormikContext<any>()
  return (
    <S.Entrega>
      <h3>Entrega</h3>
      <div className="form">
        <div>
          <label htmlFor="name">Quem irá receber</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <small>{getErrorMessage('name', errors.name)}</small>
        </div>
        <div>
          <label htmlFor="description">Endereço</label>
          <input
            id="description"
            name="description"
            type="text"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <small>{getErrorMessage('description', errors.description)}</small>
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            name="city"
            type="text"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <small>{getErrorMessage('city', errors.city)}</small>
        </div>
        <div className="double-camp">
          <div>
            <label htmlFor="zipCode">CEP</label>
            <input
              id="zipCode"
              name="zipCode"
              type="zipCode"
              value={values.zipCode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <small>{getErrorMessage('zipCode', errors.zipCode)}</small>
          </div>
          <div>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              name="number"
              type="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <small>{getErrorMessage('number', errors.number)}</small>
          </div>
        </div>
        <div>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            id="complement"
            name="complement"
            type="text"
            value={values.complement}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <small>{getErrorMessage('complement', errors.complement)}</small>
        </div>
      </div>
      <button onClick={nextStep}>Continuar com o pagamento</button>
      <button onClick={prevStep}>Voltar para o carrinho</button>
    </S.Entrega>
  )
}

export default Entrega
