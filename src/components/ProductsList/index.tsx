import { Produto } from '../../pages/Perfil'
import Product from '../Product'
import * as S from './styles'

type Props = {
  setExibicao: React.Dispatch<React.SetStateAction<boolean>>
  produtos: Produto[]
  setProdutoSelecionado: React.Dispatch<React.SetStateAction<number>>
}

const ProductsList = ({
  setExibicao,
  produtos,
  setProdutoSelecionado
}: Props) => (
  <S.Container>
    <S.ProductsList>
      {produtos.map((prod) => (
        <Product
          descricao={prod.descricao}
          foto={prod.foto}
          nome={prod.nome}
          key={prod.id}
          id={prod.id}
          setExibicao={setExibicao}
          setProdutoSelecionado={setProdutoSelecionado}
        />
      ))}
    </S.ProductsList>
  </S.Container>
)

export default ProductsList
