import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header'
import { useCounter } from '@/libs/utils/useCounter'
import { useInputArray } from '@/libs/utils/useInputArray'
import { useBgColor } from '@/libs/utils/useBgColor'
import { useRouter } from 'next/router'

export default function Post(props) {
  const router = useRouter()
  console.log(router)
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
      <h1>{router.query.id}</h1>
    </div>
  )
}
