import { SetStateAction } from 'react'
import { Produto } from '../../pages/Perfil'
import { ProductCard } from './styles'

type Props = {
  setExibicao: React.Dispatch<React.SetStateAction<boolean>>
  foto: string
  nome: string
  descricao: string
  id: number
  setProdutoSelecionado: React.Dispatch<SetStateAction<Produto>>
  produtos: Produto[]
}

const Product = ({
  setExibicao,
  descricao,
  foto,
  nome,
  setProdutoSelecionado,
  id,
  produtos
}: Props) => (
  <ProductCard>
    <img src={foto} alt="" />
    <h4>{nome}</h4>
    <p>{descricao}</p>
    <button
      onClick={() => {
        setExibicao(true)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        setProdutoSelecionado(produtos.find((p) => p.id === id)!)
      }}
    >
      Adicionar ao carrinho
    </button>
  </ProductCard>
)

export default Product
