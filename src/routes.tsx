import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import { useState } from 'react'

const Rotas = () => {
  const [restauranteAtual, setRestauranteAtual] = useState(0)

  return (
    <Routes>
      <Route
        path="/"
        element={<Home setRestauranteAtual={setRestauranteAtual} />}
      />
      <Route
        path="/Perfil"
        element={<Perfil restauranteAtual={restauranteAtual} />}
      />
    </Routes>
  )
}

export default Rotas
