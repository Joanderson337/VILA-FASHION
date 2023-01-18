import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import { useSelector } from 'react-redux'

interface Iteste {
  children: ReactNode
}

export const AuthenticationGuard = ({ children }: Iteste) => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3500)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes..." />
      </>
    )
  }

  return <>{children}</>
}
