import Head from 'next/head'
import { Header } from '@/components/Header'
import { fetcher } from '@/utils/fetcher'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const useComment = () => {
  const router = useRouter()
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  )
  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

const CommentId = () => {
  const { data, error, isLoading } = useComment()
  console.log(JSON.stringify(data))

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
