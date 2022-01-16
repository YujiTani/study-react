import Head from 'next/head'
import { Layout } from '@/components/Layout'
import globals from '@/styles/globals.css'
import useSWR, { SWRConfig } from 'swr'

const fetcher = async (...args) => {
  const responce = await fetch(...args)

  if (!responce.ok) {
    throw new Error(`エラーが発生したので、データを取得できませんでした`)
  }

  const json = await responce.json()
  return json
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  )
}

export default MyApp
