import Head from 'next/head'
import { Header } from '@/components/Header'
import { useComment } from '@/libs/utils/useComment'
import { PostByPostIdComponent } from '@/components/Post/PostByPostId'
import { SWRConfig } from 'swr'

export const getStaticPaths = async() => { 
  const comments = await fetch(`https://jsonplaceholder.typicode.com/comments`)
  const commentsData = await comments.json()
  const paths = await commentsData.map((comment) => ({
    params: { id: comment.id.toString() }
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async(ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`
  const comment = await fetch(COMMENT_API_URL)
  const commentData = await comment.json();

return {
  props: {
    fallback : {
      [COMMENT_API_URL]: commentData,
    },
  },
}
}


const CommentId = (props) => {
  const { comment, error, isLoading } = useComment()
  const { fallback } = props


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
      <SWRConfig value={{ fallback }}>
      <Header />
      <h1>{comment?.name}</h1>
      <h3>{comment?.email}</h3>
      <p>{comment?.body}</p>
      <PostByPostIdComponent id={comment.postId} />
      </SWRConfig >
    </div>
  )
}
export default CommentId
