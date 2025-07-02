import { SetStateAction } from 'react'
import { Produto } from '../../pages/Perfil'
import Product from '../Product'
import * as S from './styles'

type Props = {
  setExibicao: React.Dispatch<React.SetStateAction<boolean>>
  produtos: Produto[]
  setProdutoSelecionado: React.Dispatch<SetStateAction<Produto>>
}

const ProductsList = ({
  setExibicao,
  produtos,
  setProdutoSelecionado
}: Props) => (
  <S.Container>
    <S.ProductsList>
      {produtos ? (
        produtos.map((prod) => (
          <Product
            descricao={prod.descricao}
            foto={prod.foto}
            nome={prod.nome}
            key={prod.id}
            id={prod.id}
            setExibicao={setExibicao}
            setProdutoSelecionado={setProdutoSelecionado}
            produtos={produtos}
          />
        ))
      ) : (
        <h2>Restaurante não selecionado, volte à página inicial</h2>
      )}
    </S.ProductsList>
  </S.Container>
)

export default ProductsList
