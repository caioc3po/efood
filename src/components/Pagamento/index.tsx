import { FormikErrors, useFormikContext } from 'formik'
import * as S from './styles'

type Props = {
  nextStep: () => void
  prevStep: () => void
  getErrorMessage: (fieldName: string, message?: string) => string | undefined
  errors: FormikErrors<{
    cardName: string
    cardNumber: string
    code: string
    expiringMonth: string
    expiringYear: string
  }>
  getTotalPrice: () => number
}

const Pagamento = ({
  nextStep,
  prevStep,
  getErrorMessage,
  errors,
  getTotalPrice
}: Props) => {
  const { values, handleChange, handleBlur } = useFormikContext<any>()
  return (
    <S.Pagamento>
      <h3>
        Pagamento - Valor a pagar{' '}
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(getTotalPrice())}
      </h3>
      <div className="form">
        <div>
          <label htmlFor="cardName">Nome no cartão</label>
          <input
            id="cardName"
            name="cardName"
            type="text"
            value={values.cardName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <small>{getErrorMessage('cardName', errors.cardName)}</small>
        </div>
        <div className="double-camp1">
          <div className="cardNumber">
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="number"
              value={values.cardNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <small>{getErrorMessage('cardNumber', errors.cardNumber)}</small>
          </div>
          <div className="cvv">
            <label htmlFor="code">CVV</label>
            <input
              id="code"
              name="code"
              type="number"
              value={values.code}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <small>{getErrorMessage('code', errors.code)}</small>
          </div>
        </div>
        <div className="double-camp2">
          <div className="cardMonth">
            <label htmlFor="expiringMonth">Mês de vencimento</label>
            <input
              id="expiringMonth"
              name="expiringMonth"
              type="number"
              value={values.expiringMonth}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <small>
              {getErrorMessage('expiringMonth', errors.expiringMonth)}
            </small>
          </div>
          <div className="cardYear">
            <label htmlFor="expiringYear">Ano de vencimento</label>
            <input
              id="expiringYear"
              name="expiringYear"
              type="number"
              value={values.expiringYear}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <small>
              {getErrorMessage('expiringYear', errors.expiringYear)}
            </small>
          </div>
        </div>
      </div>
      <button type="submit">Finalizar pagamento</button>
      <button onClick={prevStep}>Voltar para a edição de endereço</button>
    </S.Pagamento>
  )
}
export default Pagamento
