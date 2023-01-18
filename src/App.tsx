import GlobalStyle from './styles/global'
import { Router } from './routes/Routes'
import { Provider } from 'react-redux'
import { persistedStore, store } from './store/store'
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react'

export function App () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Router />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  )
}
