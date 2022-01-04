import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header'
import { usePost } from '@/libs/utils/usePost'

const PostId = () => {
  const { post, user, error, isLoading } = usePost()

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <Header />
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <p>{user.name}</p> : null}
    </div>
  )
}
export default PostId
