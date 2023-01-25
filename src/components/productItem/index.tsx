import { FunctionComponent } from 'react'
import { BsCartPlus } from 'react-icons/bs'

import { CustomButton } from '../CustomButton'

import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './styled'

import Product from '../../models/product.types'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../store/toolkit/cart/cart.slice'

interface ProductItemProps {
  product: Product
}

export const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCartClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Adicionar ao carrinho
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
