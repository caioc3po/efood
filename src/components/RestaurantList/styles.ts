import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 80px auto 120px auto;
`

export const RestaurantList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`
