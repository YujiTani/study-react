import Head from 'next/head'
import { Header } from '@/components/Header'
import { usePost } from '@/libs/utils/usePost'
import { CommentsByPostIdComponent } from '@/components/Comment/CommentsByPostId'

const PostsId = () => {
  const { post, user, error, isLoading } = usePost()

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <Header />
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <p>{user.name}</p> : null}
      <CommentsByPostIdComponent id={post.id} />
    </div>
  )
}
export default PostsId
