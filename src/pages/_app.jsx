import Head from 'next/head'
import { Layout } from '@/components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <h1 className='text-red-500'>test</h1>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
