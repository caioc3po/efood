import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles/globalStyle'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Rotas />
      <Footer />
      <GlobalCss />
    </BrowserRouter>
  )
}

export default App
