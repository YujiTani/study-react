import Head from 'next/head'
import { Header } from '@/components/Header'
import { useComment } from '@/libs/utils/useComment'
import { PostByPostIdComponent } from '@/components/Post/PostByPostId'

const CommentId = () => {
  const { comment, error, isLoading } = useComment()

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Head>
        <title>{comment?.name}</title>
      </Head>
      <Header />
      <h1>{comment?.name}</h1>
      <h3>{comment?.email}</h3>
      <p>{comment?.body}</p>
      <PostByPostIdComponent id={comment.postId} />
    </div>
  )
}
export default CommentId
