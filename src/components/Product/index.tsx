import { ProductCard } from './styles'
import pizzaImage from '../../assets/images/pizza_marguerita.png'

const Product = () => (
  <ProductCard>
    <img src={pizzaImage} alt="" />
    <h4>Pizza Marguerita</h4>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <button>Adicionar ao carrinho</button>
  </ProductCard>
)

export default Product
