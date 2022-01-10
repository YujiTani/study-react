import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header'
import { Posts as PostsComponent } from '@/components/Post'

export function Posts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  )
}

export default Posts
