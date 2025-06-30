import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000cc;
  }
`

export const ProductBanner = styled.div`
  position: relative;
  z-index: 1;

  background-color: #e66767;
  width: 1024px;
  height: 344px;
  margin: auto;
  display: flex;
  padding: 32px;

  .X-img {
    position: absolute;
    top: 8px;
    right: 8px;
    border: none;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  img {
    width: 280px;
    height: 280px;
    resize: none;
  }
  div {
    margin-left: 24px;
    h4 {
      color: #fff;
      font-size: 18px;
      font-weight: 900;
    }
    p {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin: 16px 0;
    }
    button {
      background-color: #FFEBD9;
      border: none;
      font-size: 14px;
      font-weight: 700;
      padding: 4px 7px;
      cursor: pointer;
    }
  }

  }
`
