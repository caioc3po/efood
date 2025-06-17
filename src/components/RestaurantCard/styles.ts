import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Tag = styled.div`
  padding: 6px 4px;
  background-color: #e66767;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  margin-left: 8px;
`

export const Categories = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Card = styled.li`
  display: block;
  position: relative;
`

export const Image = styled.div`
  width: 100%;
  height: 217px;
  display: block;
`

export const Paragrafo = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0px;
`

export const Title = styled.h4`
  font-size: 18px;
  font-weight: bold;
`

export const Infos = styled.div`
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #e66767;
  display: block;
  padding: 8px;

  .mainInfos {
    display: flex;
    justify-content: space-between;
  }
`

export const Rating = styled.div`
  display: flex;

  h5 {
    font-size: 18px;
    font-weight: bold;
    margin-right: 8px;
  }
`

export const Button = styled(Link)`
  padding: 4px 6px;
  background-color: #e66767;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
`
