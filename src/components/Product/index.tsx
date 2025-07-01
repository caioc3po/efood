import { ProductCard } from './styles'

type Props = {
  setExibicao: React.Dispatch<React.SetStateAction<boolean>>
  foto: string
  nome: string
  descricao: string
  id: number
  setProdutoSelecionado: React.Dispatch<React.SetStateAction<number>>
}

const Product = ({
  setExibicao,
  descricao,
  foto,
  nome,
  setProdutoSelecionado,
  id
}: Props) => (
  <ProductCard>
    <img src={foto} alt="" />
    <h4>{nome}</h4>
    <p>{descricao}</p>
    <button
      onClick={() => {
        setExibicao(true)
        setProdutoSelecionado(id)
      }}
    >
      Adicionar ao carrinho
    </button>
  </ProductCard>
)

export default Product
