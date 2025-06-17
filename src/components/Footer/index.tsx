import facebook from '../../assets/images/facebook_logo.png'
import efood from '../../assets/images/efood_logo.png'
import instagram from '../../assets/images/instagram_logo.png'
import twitter from '../../assets/images/twitter_logo.png'
import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <img src={efood} alt="Efood" />
    <S.SocialMedias>
      <img src={instagram} alt="Instagram" />
      <img src={facebook} alt="Facebook" />
      <img src={twitter} alt="Twitter" />
    </S.SocialMedias>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </S.Footer>
)

export default Footer
