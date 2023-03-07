import AppWrapper from '@/components/ui/AppWrapper';
import { wrapper } from '@/store/store';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {

  return(
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}


export default wrapper.withRedux(App);