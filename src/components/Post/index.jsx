import { usePosts } from '@/libs/utils/usePosts'
import Link from 'next/link'

const Posts = (props) => {
  const { data, error, isLoading, isEmpty } = usePosts(props.url)

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
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Posts
