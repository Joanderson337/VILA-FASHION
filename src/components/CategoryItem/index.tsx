import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import Category from '../../models/category.types'
import { CategoryItemContainer, CategoryName } from './styled'
interface CategoryItemProps {
  category: Category
}

export const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }

  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName onClick={handleExploreClick}>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}
