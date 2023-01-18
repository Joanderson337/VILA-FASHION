import SyncLoader from 'react-spinners/SyncLoader'

import { LoadingContainer } from './styled'
interface ILoading {
  message?: string
}

export const Loading = ({ message }: ILoading) => {
  return (
    <LoadingContainer>
       {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}
