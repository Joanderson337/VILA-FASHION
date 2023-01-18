import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/redux.hooks'
import { fetchCategories } from '../../store/reducers/category/category.actions'
import { CategoryItem } from '../CategoryItem'
import { Loading } from '../Loading'
import { ContainerCategories, ContentCategories } from './styled'

export const Categories = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoryReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories() as any)
  }, [])

  return (
    <ContainerCategories>
      {isLoading && <Loading />}
      <ContentCategories>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </ContentCategories>
    </ContainerCategories>
  )
}
