import { useComments } from '@/libs/utils/useComments'
import Link from 'next/link'

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments()

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
              <a>{`${Comment.name}（${Comment.email}）`}</a>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
