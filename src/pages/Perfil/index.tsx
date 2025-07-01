import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Modal from '../../components/Modal/indext'
import ProductsList from '../../components/ProductsList'
import { Restaurant } from '../Home'

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
  const [produtoSelecionado, setProdutoSelecionado] = useState(0)

  useEffect(() => {
    fetch(
      `https://fake-api-tau.vercel.app/api/efood/restaurantes/${restauranteAtual}`
    )
      .then((res) => res.json())
      .then((res) => setProdutos(res.cardapio))
  }, [])

  return (
    <>
      <Header exhibition="perfil" />
      <Banner />
      <ProductsList
        setProdutoSelecionado={setProdutoSelecionado}
        produtos={produtos}
        setExibicao={setExibicao}
      />
      <Modal
        produtos={produtos}
        produtoSelecionado={produtoSelecionado}
        exibicao={exibicao}
        setExibicao={setExibicao}
      />
    </>
  )
}

export default Perfil
