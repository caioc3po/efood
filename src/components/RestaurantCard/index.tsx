import * as S from './styles'
import star from '../../assets/images/estrela.png'
import { Tag } from './styles'

type Restaurant = {
  title: string
  categories: string[]
  image: string
  rating: string
  text: string
}

const RestaurantCard = ({
  categories,
  image,
  rating,
  text,
  title
}: Restaurant) => (
  <S.Card>
    <S.Image style={{ backgroundImage: `url(${image})` }}>
      <S.Categories>
        {categories.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </S.Categories>
    </S.Image>
    <S.Infos>
      <div className="mainInfos">
        <S.Title>{title}</S.Title>
        <S.Rating>
          <h5>{rating}</h5>
          <img src={star} alt="Star" />
        </S.Rating>
      </div>
      <S.Paragrafo>{text}</S.Paragrafo>
      <S.Button to="/Perfil">Saiba mais</S.Button>
    </S.Infos>
  </S.Card>
)

export default RestaurantCard
