import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'

export const AppQueryProvider = ({children}) => {

  const queryClient = new QueryClient()
  
  return(
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}