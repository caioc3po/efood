import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles/globalStyle'
import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Rotas />
        <Footer />
        <GlobalCss />
      </BrowserRouter>
    </Provider>
  )
}

export default App
