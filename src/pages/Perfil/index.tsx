import { useState } from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Modal from '../../components/Modal/indext'
import ProductsList from '../../components/ProductsList'

const Perfil = () => {
  const [exibicao, setExibicao] = useState(false)
  return (
    <>
      <Header exhibition="perfil" />
      <Banner />
      <ProductsList setExibicao={setExibicao} />
      <Modal exibicao={exibicao} setExibicao={setExibicao} />
    </>
  )
}

export default Perfil
