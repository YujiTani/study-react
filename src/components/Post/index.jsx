import { usePosts } from '@/libs/utils/usePost'

export function Posts() {
  const { data, error, isLoading, isEmpty } = usePosts

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
    <div>
      <ol>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ol>
    </div>
  )
}
