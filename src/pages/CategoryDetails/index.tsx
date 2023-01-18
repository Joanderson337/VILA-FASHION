import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'

import { CategoryDetails } from '../../components/CategoryDetails'

import { Header } from '../../components/Header'

export const CategoryDetailsPage: FunctionComponent = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <>
      <Header />
      <CategoryDetails categoryId={id} />
    </>
  )
}
