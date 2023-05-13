import { ContextCounterProvider } from '@/data/contexts/ContextCounter'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextCounterProvider>
      <Component {...pageProps} />
    </ContextCounterProvider>
  )
}
