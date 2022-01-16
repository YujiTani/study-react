import { useComments } from '@/libs/utils/useFetchArray'
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
    <ol className='space-y-4'>
      {data?.map((Comment) => {
        return (
          <li className='text-xl border-b pb-4 group' key={Comment.id}>
            <Link href={`/comments/${Comment.id}`}>
              <a className='group-hover:text-blue-400 '>{`${Comment.name}（${Comment.email}）`}</a>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
