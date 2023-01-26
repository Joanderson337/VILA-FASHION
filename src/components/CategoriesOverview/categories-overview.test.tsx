import * as firestore from 'firebase/firestore'
import { renderWithRedux } from '../../helpers/test.helpers'
import Category from '../../models/category.types'
import CategoriesOverview from '.'

jest.mock('firebase/firestore')

describe('Categories Overview', () => {
  it('should fetch and show categories', async () => {
    const mockedFirestore = firestore as any

    mockedFirestore.getDocs.mockImplementation(async () => [
      {
        data (): Category {
          return {
            id: '1',
            displayName: 'Lorem Ipsum',
            imageUrl: 'image_url',
            name: 'lorem-ipsum',
            products: [
              { id: '1', name: 'Boné', price: 100, imageUrl: 'image_url' }
            ]
          }
        }
      }
    ])

    mockedFirestore.collection.mockImplementation(() => ({
      withConverter: () => {}
    }))

    const { findByText, getByText } = renderWithRedux(
      <CategoriesOverview />,
      {}
    )

    await findByText(/boné/i)
    getByText('Lorem Ipsum')
    getByText('R$100')
  })
})
