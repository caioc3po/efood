import * as S from './styles'

type Props = {
  data: any
  closeCart: () => void
  setStep: (
    value: React.SetStateAction<
      'carrinho' | 'entrega' | 'pagamento' | 'confirmacao'
    >
  ) => void
}

const Confirmacao = ({ data, closeCart, setStep }: Props) => (
  <S.Confirmacao>
    <h3>Pedido realizado - {data?.orderId}</h3>
    <p>
      Estamos felizes em informar que seu pedido já está em processo de
      preparação e, em breve, será entregue no endereço fornecido.
      <br />
      <br />
      Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
      realizar cobranças extras.
      <br />
      <br />
      Lembre-se da importância de higienizar as mãos após o recebimento do
      pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      <br />
      <br />
      Esperamos que desfrute de uma deliciosa e agradável experiência
      gastronômica. Bom apetite!
    </p>
    <button
      onClick={() => {
        setStep('carrinho')
        closeCart()
      }}
    >
      Concluir
    </button>
  </S.Confirmacao>
)

export default Confirmacao
