import styled from 'styled-components'

export const BannerImg = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: block;
  position: relative;

  .overlay {
    background-color: #00000080;
    width: 100%;
    height: 100%;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const BannerUpperText = styled.h3`
  font-size: 32px;
  color: #fff;
  font-weight: 100;
  position: absolute;
  top: 25px;
`

export const BannerLowerText = styled.h3`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  bottom: 32px;
`
