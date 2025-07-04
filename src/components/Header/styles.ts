import styled from 'styled-components'
import { Props } from '.'

export const Header = styled.div<Props>`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding-top: 64px;

  ${(props) =>
    props.exhibition === 'home'
      ? `
    width: 100%;
    height: 384px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding-top: 64px;`
      : `
    width: 100%;
    height: 186px;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    padding-top: 64px;

    .container {
      display: flex;
      align-items: center;
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
      position: relative;

      .left {
        position: absolute;
        left: 0px;
      }

      .right {
        position: absolute;
        right: 0px;
        cursor: pointer;
      }

      .link {
        margin: 0 auto;
      }
    }
    `}
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-top: 138.5px;
`
