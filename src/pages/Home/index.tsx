import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import Restaurant from '../../models/Restaurant'
import HiokiSushi from '../../assets/images/Hioki_Sushi.png'
import LaDolceVitaTrattoria from '../../assets/images/LaDolceVitaTrattoria.png'

const restaurants: Restaurant[] = [
  {
    title: 'Hioki Sushi',
    categories: ['Destaque da semana', 'Japonesa'],
    text: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: HiokiSushi,
    rating: '4.9',
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria',
    categories: ['Italiana'],
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaTrattoria,
    rating: '4.6',
    id: 2
  },
  {
    title: 'La Dolce Vita Trattoria',
    categories: ['Italiana'],
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaTrattoria,
    rating: '4.6',
    id: 3
  },
  {
    title: 'La Dolce Vita Trattoria',
    categories: ['Italiana'],
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaTrattoria,
    rating: '4.6',
    id: 4
  },
  {
    title: 'La Dolce Vita Trattoria',
    categories: ['Italiana'],
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaTrattoria,
    rating: '4.6',
    id: 5
  },
  {
    title: 'La Dolce Vita Trattoria',
    categories: ['Italiana'],
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: LaDolceVitaTrattoria,
    rating: '4.6',
    id: 6
  }
]

const Home = () => (
  <>
    <Header exhibition="home" />
    <RestaurantList restaurants={restaurants} />
  </>
)

export default Home
