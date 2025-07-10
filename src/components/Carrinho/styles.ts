import { styled } from 'styled-components'

export const Carrinho = styled.div`
  z-index: 1;
  background-color: #e66767;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  padding: 16px 8px;
  overflow-y: scroll;

  .itemList {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 40px;

    h4 {
      color: #fff;
    }
  }

  button {
    width: 100%;
    background-color: #ffebd9;
    border: none;
    padding: 4px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }

  h6 {
    color: #ffebd9;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 14px;
  }

  .totalValue {
    display: flex;
    justify-content: space-between;
  }
`

export const CarrinhoItem = styled.div`
  background-color: #ffebd9;
  padding: 8px 8px 12px 8px;
  position: relative;
  display: flex;

  div {
    margin-left: 8px;

    h5 {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  .delete-btn {
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const CarrinhoPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000cc;
  }
`
