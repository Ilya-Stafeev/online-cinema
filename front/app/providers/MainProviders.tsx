import { Layout } from '@/components/layout/Layout'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

export const MainProviders:FC<PropsWithChildren> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        {children}
      </Layout>
    </QueryClientProvider>
  )
}