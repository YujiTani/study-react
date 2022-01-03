import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header'
import { useCounter } from '@/libs/utils/useCounter'
import { useInputArray } from '@/libs/utils/useInputArray'
import { useBgColor } from '@/libs/utils/useBgColor'
import { useCallback, useEffect, useState } from 'react'
import { Posts } from '@/components/Post'

export default function Home(props) {
  console.log(props)
  const { count, handleCount } = useCounter()
  const { text, isShow, array, handleDisplay, handleChange, handleAdd } =
    useInputArray()
  useBgColor()

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  )
}
