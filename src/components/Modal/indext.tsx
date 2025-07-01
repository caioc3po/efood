/* eslint-disable react-hooks/rules-of-hooks */
import * as S from './styles'
import marguerita from '../../assets/images/marguerita_pequena.png'
import x from '../../assets/images/close 1.png'
import { Produto } from '../../pages/Perfil'

type Props = {
  exibicao: boolean
  setExibicao: React.Dispatch<React.SetStateAction<boolean>>
  produtoSelecionado: number
  produtos: Produto[]
}

const Modal = ({
  exibicao,
  setExibicao,
  produtoSelecionado,
  produtos
}: Props) => {
  const produto = produtos.find((prod) => prod.id === produtoSelecionado)

  return (
    <S.Modal style={{ display: exibicao ? 'flex' : 'none' }}>
      <S.ProductBanner>
        <img src={x} className="X-img" onClick={() => setExibicao(false)} />
        <img src={produto?.foto} alt="Pizza Marguerita" />
        <div>
          <h4>{produto?.nome}</h4>
          <p>
            {produto?.descricao}
            <br />
            <br />
            {produto?.porcao}
          </p>
          <button>Adicionar ao carrinho - R$ {produto?.preco}0</button>
        </div>
      </S.ProductBanner>
      <div onClick={() => setExibicao(false)} className="overlay"></div>
    </S.Modal>
  )
}

export default Modal
