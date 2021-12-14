import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page Test</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main page='about' />
      <Footer />
    </div>
  )
}
