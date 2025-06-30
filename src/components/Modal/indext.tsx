/* eslint-disable react-hooks/rules-of-hooks */
import * as S from './styles'
import marguerita from '../../assets/images/marguerita_pequena.png'
import x from '../../assets/images/close 1.png'
import { useState } from 'react'

type Props = {
  exibicao: boolean
  setExibicao: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ exibicao, setExibicao }: Props) => {
  return (
    <S.Modal style={{ display: exibicao ? 'flex' : 'none' }}>
      <S.ProductBanner>
        <img src={x} className="X-img" onClick={() => setExibicao(false)} />
        <img src={marguerita} alt="Pizza Marguerita" />
        <div>
          <h4>Pizza Marguerita</h4>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <br />
            <br />
            Serve: de 2 a 3 pessoas
          </p>
          <button>Adicionar ao carrinho - R$ 60,90</button>
        </div>
      </S.ProductBanner>
      <div onClick={() => setExibicao(false)} className="overlay"></div>
    </S.Modal>
  )
}

export default Modal
