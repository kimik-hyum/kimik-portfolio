import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Wrap from '../src/layout/Wrap'
import { RecoilRoot } from 'recoil'
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query'
import { useState } from 'react'
import NextPage from '@layout/NextPage'
import NextComponent from '@layout/NextComponent'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: false,
        },
      },
    })
  )
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Wrap>
            <Component {...pageProps} />
          </Wrap>
          <NextComponent />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  )
}
export default MyApp
