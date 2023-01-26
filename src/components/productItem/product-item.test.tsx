import { renderWithRedux } from '../../helpers/test.helpers'
import Product from '../../models/product.types'
import { ProductItem } from '.'

describe('Product Item', () => {
  it('should show correct product', () => {
    const product: Product = {
      id: '1',
      imageUrl: 'image_url',
      name: 'Boné',
      price: 100
    }

    const { getByText } = renderWithRedux(<ProductItem product={product} />, {})

    getByText(/boné/i)
    getByText('R$100')
    getByText(/adicionar ao carrinho/i)
  })
})