import { CommentsByPostId } from '@/libs/utils/useFetchArray'
import Link from 'next/link'

export const CommentsByPostIdComponent = (props) => {
  const { data, error, isLoading, isEmpty } = CommentsByPostId(props.id)

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (isEmpty) {
    return <div>データがありません</div>
  }

  return (
    <ol>
      {data?.map((Comment) => {
        return (
          <li key={Comment.id}>
            <Link href={`/comments/${Comment.id}`}>
              <a>{`#${Comment.id}
              （${Comment.body}）`}</a>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
