import Head from 'next/head'
import { Header } from '@/components/Header'
import { useComment } from '@/libs/utils/useComment'
import { PostByPostIdComponent } from '@/components/Post/PostByPostId'
import { SWRConfig } from 'swr'

// SGでは動的に取得する際に必要になる
export const getStaticPaths = async() => {
  // limitを設定する事で、デフォルトで取得する件数に制限を加えられる 
  const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10`)
  const commentsData = await comments.json()
  const paths = await commentsData.map((comment) => ({
    params: { id: comment.id.toString() }
  }))

  // fallbackをblockingにする事で、SGしてないページのローディング処理を書かなくて良くなる
  // 時間経過でSG化しようとしてくれる。
  return { paths, fallback: "blocking" }
}

export const getStaticProps = async(ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`
  const comment = await fetch(COMMENT_API_URL)
  const commentData = await comment.json();

  // ありえないリクエストをされた際に404画面を表示させる
  if (!comment.ok) {
    return {
      notFound: true,
    }
  }

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
