/* eslint-disable react-hooks/rules-of-hooks */
import * as S from './styles'
import x from '../../assets/images/close 1.png'
import { Produto } from '../../pages/Perfil'

type Props = {
  produtoSelecionado: Produto
  exibicao: boolean
  setExibicao: React.Dispatch<React.SetStateAction<boolean>>
  addToCart: () => void
}

const Modal = ({
  exibicao,
  setExibicao,
  produtoSelecionado,
  addToCart
}: Props) => {
  return (
    <S.Modal style={{ display: exibicao ? 'flex' : 'none' }}>
      <S.ProductBanner>
        <img src={x} className="X-img" onClick={() => setExibicao(false)} />
        <img src={produtoSelecionado?.foto} alt="Pizza Marguerita" />
        <div>
          <h4>{produtoSelecionado?.nome}</h4>
          <p>
            {produtoSelecionado?.descricao}
            <br />
            <br />
            {produtoSelecionado?.porcao}
          </p>
          <button onClick={addToCart}>
            Adicionar ao carrinho - R$ {produtoSelecionado?.preco}0
          </button>
        </div>
      </S.ProductBanner>
      <div onClick={() => setExibicao(false)} className="overlay"></div>
    </S.Modal>
  )
}

export default Modal
