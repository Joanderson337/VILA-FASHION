import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart } from '../components/Cart'
import { Loading } from '../components/Loading'
import { auth, db } from '../config/firebase.config'
import { userConverter } from '../converters/firestore.converters'
import { AuthenticationGuard } from '../guards/authGuard'
import { useAppSelector } from '../hooks/redux.hooks'
import { CategoryDetailsPage } from '../pages/CategoryDetails'
import { CheckoutPage } from '../pages/Checkout'
import ExplorePage from '../pages/Explore'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { PaymentConfirmationPage } from '../pages/PaymentConfirmation'
import { SignUp } from '../pages/SignUp'
import { loginUser, logoutUser } from '../store/reducers/user/user.actions'

export function Router () {
  const [isInitializing, setIsInitializing] = useState(true)
  const dispatch = useDispatch()

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user

      if (isSigningOut) {
        dispatch(logoutUser())

        return setIsInitializing(false)
      }

      const isSigningIn = !isAuthenticated && user

      if (isSigningIn) {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )

        const userFromFirestore = querySnapshot.docs[0]?.data()

        dispatch(loginUser(userFromFirestore))

        return setIsInitializing(false)
      }

      return setIsInitializing(false)
    })
  }, [dispatch])

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route
          path="/checkout"
          element={
            <AuthenticationGuard>
              <CheckoutPage />
            </AuthenticationGuard>
          }
        />
         <Route
          path="/payment-confirmation"
          element={<PaymentConfirmationPage />}
        />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}
