import styled from 'styled-components'

export const ProductCard = styled.div`
  background-color: #e66767;
  padding: 8px;
  position: relative;
  height: 420px;

  img {
    height: 167px;
    width: 304px;
    object-fit: cover;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #ffebd9;
    margin-top: 8px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #ffebd9;
    margin-top: 8px;
  }

  button {
    width: 304px;
    background-color: #ffebd9;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    margin-top: 8px;
    border: none;
    padding: 4px 0;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
