import * as S from './styles'
import star from '../../assets/images/estrela.png'
import { Tag } from './styles'

type Restaurant = {
  id: number
  title: string
  image: string
  rating: number
  text: string
  type: string
  highlighted: boolean
  setRestauranteAtual: React.Dispatch<React.SetStateAction<number>>
}

const RestaurantCard = ({
  id,
  type,
  highlighted,
  image,
  rating,
  text,
  title,
  setRestauranteAtual
}: Restaurant) => (
  <S.Card>
    <S.Image style={{ backgroundImage: `url(${image})` }}>
      <S.Categories>
        <Tag>{type[0].toUpperCase() + type.slice(1)}</Tag>
        {highlighted ? <Tag>Destaque da semana</Tag> : null}
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
      <S.Button onClick={() => setRestauranteAtual(id)} to="/Perfil">
        Saiba mais
      </S.Button>
    </S.Infos>
  </S.Card>
)

export default RestaurantCard
