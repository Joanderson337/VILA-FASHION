import { FunctionComponent } from 'react'

import { Checkout } from '../../components/Checkout'
import { Header } from '../../components/Header'

export const CheckoutPage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Checkout />
    </>
  )
}
