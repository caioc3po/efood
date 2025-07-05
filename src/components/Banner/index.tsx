import * as S from './styles'
import background from '../../assets/images/banner_img.png'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

const Banner = ({ tipo, titulo, capa }: Props) => (
  <S.BannerImg style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <S.BannerUpperText>
        {tipo ? tipo[0].toUpperCase() + tipo.slice(1) : ''}
      </S.BannerUpperText>
      <S.BannerLowerText>{titulo}</S.BannerLowerText>
    </div>
    <div className="overlay"></div>
  </S.BannerImg>
)

export default Banner
