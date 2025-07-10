import { styled } from 'styled-components'

export const Entrega = styled.div`
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
    margin-bottom: 8px;
  }

  button {
    border: none;
    height: 24px;
    width: 344px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;
    background-color: #ffebd9;
    cursor: pointer;
  }

  .form {
    margin-bottom: 16px;

    small {
      color: #fff;
      font-size: 12px;
      margin-top: 4px;
    }

    div {
      width: 344px;
      display: flex;
      flex-direction: column;

      label {
        margin: 8px 0;
        font-weight: 700;
        font-size: 14px;
      }

      input {
        border: none;
        height: 32px;
        padding: 8px;
        color: #000;
        font-size: 14px;
        font-weight: 700;
        background-color: #ffebd9;
      }
    }

    .double-camp {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 34px;

      div {
        width: 155px;
      }
    }

    label {
      color: #ffebd9;
    }
  }
`
