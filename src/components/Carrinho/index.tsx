import * as S from './styles'
import marguerita from '../../assets/images/marguerita_pequena.png'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { Produto } from '../../pages/Perfil'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

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
                  <p>R$ {item.preco}0</p>
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
          <h6>R$ {getTotalPrice()}0</h6>
        </div>
        <button>Continuar com a entrega</button>
      </S.Carrinho>
      <div onClick={closeCart} className="overlay" />
    </S.CarrinhoPage>
  )
}

export default Carrinho
