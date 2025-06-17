import * as S from './styles'
import background from '../../assets/images/banner_img.png'

const Banner = () => (
  <S.BannerImg style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <S.BannerUpperText>Italiana</S.BannerUpperText>
      <S.BannerLowerText>La dolce Vita Trattoria</S.BannerLowerText>
    </div>
  </S.BannerImg>
)

export default Banner
