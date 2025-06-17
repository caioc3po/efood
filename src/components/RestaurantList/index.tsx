import RestaurantCard from '../RestaurantCard'
import * as S from './styles'
import Restaurant from '../../models/Restaurant'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <S.Container>
    <S.RestaurantList>
      {restaurants.map((rest) => (
        <RestaurantCard
          key={rest.id}
          title={rest.title}
          categories={rest.categories}
          image={rest.image}
          rating={rest.rating}
          text={rest.text}
        />
      ))}
    </S.RestaurantList>
  </S.Container>
)

export default RestaurantList
