import { styled } from 'styled-components'

export const Confirmacao = styled.div`
  z-index: 1;
  background-color: #e66767;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  padding: 32px 8px;

  h3 {
    color: #ffebd9;
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    color: #ffebd9;
    line-height: 22px;
    font-size: 14px;
  }

  button {
    border: none;
    height: 24px;
    width: 344px;
    margin-top: 24px;
    font-size: 14px;
    font-weight: 700;
    background-color: #ffebd9;
    cursor: pointer;
  }
`
