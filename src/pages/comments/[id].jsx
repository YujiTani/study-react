import Head from 'next/head'
import { Header } from '@/components/Header'
import { useComment } from '@/libs/utils/useComment'

const CommentId = () => {
  const { data, error, isLoading } = useComment()

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <Header />
      <h1>{data?.name}</h1>
      <h3>{data?.email}</h3>
      <p>{data?.body}</p>
    </div>
  )
}
export default CommentId
