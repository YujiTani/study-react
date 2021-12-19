import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'
import { useCallback, useEffect } from 'react'

export default function Home() {
  const handleClick = useCallback(function (e) {
    console.log(e.target.href) // "/about"
    e.preventDefault()
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue'

    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Header />
      <a href='/about' onClick={handleClick}>
        ボタン
      </a>
      <Main page='index' />
      <Footer />
    </div>
  )
}
