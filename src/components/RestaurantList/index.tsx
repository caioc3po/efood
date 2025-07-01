import RestaurantCard from '../RestaurantCard'
import * as S from './styles'
import { Restaurant } from '../../pages/Home'

type Props = {
  restaurants: Restaurant[]
  setRestauranteAtual: React.Dispatch<React.SetStateAction<number>>
}

const RestaurantList = ({ restaurants, setRestauranteAtual }: Props) => (
  <S.Container>
    <S.RestaurantList>
      {restaurants.map((rest) => (
        <RestaurantCard
          key={rest.id}
          id={rest.id}
          title={rest.titulo}
          type={rest.tipo}
          highlighted={rest.destacado}
          image={rest.capa}
          rating={rest.avaliacao}
          text={rest.descricao}
          setRestauranteAtual={setRestauranteAtual}
        />
      ))}
    </S.RestaurantList>
  </S.Container>
)

export default RestaurantList
