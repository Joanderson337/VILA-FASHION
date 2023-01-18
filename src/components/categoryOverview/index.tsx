import { FunctionComponent } from 'react'

import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './styled'

import Category from '../../models/category.types'

import { ProductItem } from '../productItem'
interface CategoryOverviewProps {
  category: Category
}

export const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer>
        {category.products.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}
