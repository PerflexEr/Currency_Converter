

import {Container , Typography , Box , Button, CircularProgress} from '@mui/material'

import { CurrencyConverter } from '../../widgets/CurrencyConverter'
import { WishlistWidget } from '../../widgets/WishList'

export const MainPage = () => {

  return (
    <Container>
      <CurrencyConverter></CurrencyConverter>
      <WishlistWidget></WishlistWidget>
    </Container>
  )
}