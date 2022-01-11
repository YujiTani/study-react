import { CountCommentsByPostId } from '@/libs/utils/useFetchArray'
import { PostsByUserId } from '@/libs/utils/useFetchArray'
import Link from 'next/link'

export const PostsByUserIdComponent = (props) => {
  const { data, error, isLoading, isEmpty } = PostsByUserId(props.id)
  const {
    data: Comments,
    error: CommentsError,
    isLoading: CommentsIsLoading,
    isEmpty: CommentsIsEmpty,
  } = CountCommentsByPostId(props.id)

  if (isLoading || CommentsIsLoading) {
    return <div>ローディング中</div>
  }

  if (error || CommentsError) {
    return <div>{error.message}</div>
  }

  if (isEmpty || CommentsIsEmpty) {
    return <div>データがありません</div>
  }

  return (
    <ol>
      {data?.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            <button>{Comments.length}</button>
          </li>
        )
      })}
    </ol>
  )
}
