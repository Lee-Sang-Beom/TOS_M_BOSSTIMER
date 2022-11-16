import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Reset } from 'styled-reset'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Reset/>
      <Component {...pageProps} />
    </div>
  )
}
