import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useEffect, useState } from 'react'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

type Props = {
  setRestauranteAtual: React.Dispatch<React.SetStateAction<number>>
}

const Home = ({ setRestauranteAtual }: Props) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header exhibition="home" />
      <RestaurantList
        setRestauranteAtual={setRestauranteAtual}
        restaurants={restaurants}
      />
    </>
  )
}

export default Home
