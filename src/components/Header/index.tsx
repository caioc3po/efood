import { Link } from 'react-router-dom'
import logo from '../../assets/images/efood_logo.png'
import background from '../../assets/images/header_background.png'
import * as S from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { Produto } from '../../pages/Perfil'

export type Props = {
  exhibition: 'home' | 'perfil'
  items?: Produto[]
}

const Header = ({ exhibition, items }: Props) => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  if (exhibition === 'home') {
    return (
      <S.Header
        exhibition={exhibition}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <S.Titulo>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </S.Titulo>
        </div>
      </S.Header>
    )
  }
  return (
    <S.Header
      exhibition={exhibition}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <h3 className="left">Restaurantes</h3>
        <Link className="link" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <h3 onClick={openCart} className="right">
          {items === undefined ? '0' : items.length} produto(s) no carrinho
        </h3>
      </div>
    </S.Header>
  )
}

export default Header
