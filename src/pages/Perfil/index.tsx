import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Modal from '../../components/Modal/indext'
import ProductsList from '../../components/ProductsList'
import Carrinho from '../../components/Carrinho'
import { add, open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
type Props = {
  restauranteAtual: number
}

export type Produto = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Perfil = ({ restauranteAtual }: Props) => {
  const [exibicao, setExibicao] = useState(false)
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [restauranteAtualInfos, setRestauranteAtualInfos] = useState({
    tipo: '',
    titulo: '',
    capa: ''
  })
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto>({
    descricao: '',
    foto: '',
    id: 0,
    nome: '',
    porcao: '',
    preco: 0
  })

  useEffect(() => {
    fetch(
      `https://fake-api-tau.vercel.app/api/efood/restaurantes/${restauranteAtual}`
    )
      .then((res) => res.json())
      .then((res) => {
        setProdutos(res.cardapio)
        setRestauranteAtualInfos({
          tipo: res.tipo,
          titulo: res.titulo,
          capa: res.capa
        })
      })
  }, [restauranteAtual])

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const addToCart = () => {
    dispatch(add(produtoSelecionado))
    dispatch(open())
    setExibicao(false)
  }

  return (
    <>
      <Header items={items} exhibition="perfil" />
      <Banner
        tipo={restauranteAtualInfos.tipo}
        titulo={restauranteAtualInfos.titulo}
        capa={restauranteAtualInfos.capa}
      />
      <ProductsList
        setProdutoSelecionado={setProdutoSelecionado}
        produtos={produtos}
        setExibicao={setExibicao}
      />
      <Modal
        addToCart={addToCart}
        produtoSelecionado={produtoSelecionado}
        exibicao={exibicao}
        setExibicao={setExibicao}
      />
      <Carrinho />
    </>
  )
}

export default Perfil
