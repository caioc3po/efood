import Product from '../Product'
import * as S from './styles'

type Props = {
  setExibicao: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductsList = ({ setExibicao }: Props) => (
  <S.Container>
    <S.ProductsList>
      <Product setExibicao={setExibicao} />
      <Product setExibicao={setExibicao} />
      <Product setExibicao={setExibicao} />
      <Product setExibicao={setExibicao} />
      <Product setExibicao={setExibicao} />
      <Product setExibicao={setExibicao} />
    </S.ProductsList>
  </S.Container>
)

export default ProductsList
