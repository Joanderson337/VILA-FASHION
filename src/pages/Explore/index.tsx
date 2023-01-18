import { FunctionComponent } from 'react'

import CategoriesOverview from '../../components/CategoriesOverview'
import { Header } from '../../components/Header'

const ExplorePage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <CategoriesOverview />
    </>
  )
}

export default ExplorePage
