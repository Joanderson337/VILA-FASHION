
import { signOut } from 'firebase/auth'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { toggleCart } from '../../store/reducers/cart/cart.actions'

import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase.config'
import { useAppSelector } from '../../hooks/redux.hooks'
import { logoutUser } from '../../store/reducers/user/user.actions'
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './styled'
import { selectProductsCount } from '../../store/reducers/cart/cart.selectors'

export const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  const productsCount = useAppSelector(selectProductsCount)

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  const handleSignOutClick = () => {
    dispatch(logoutUser())
    signOut(auth)
  }

  const handleCartClick = () => {
    dispatch(toggleCart())
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>VILA FASHION</HeaderTitle>

      <HeaderItems>
      <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
          </>
        )}

        {isAuthenticated && (
          <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
        )}

        <HeaderItem onClick={handleCartClick}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}