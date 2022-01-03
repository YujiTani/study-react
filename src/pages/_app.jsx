import Head from 'next/head'
import '@/styles/globals.css'
import { useCounter } from '@/libs/utils/useCounter'

function MyApp({ Component, pageProps }) {
  const counter = useCounter()

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} foo={'123'} {...counter} />
    </>
  )
}

export default MyApp
