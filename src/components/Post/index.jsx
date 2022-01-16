import { usePosts } from '@/libs/utils/useFetchArray'
import Link from 'next/link'

const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts()

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
      <ul>
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a className='block group p-3 mb-3'>
                  <h1 className='font-bold group-hover:text-blue-400'>
                    {post.title}
                  </h1>
                  <p className='text-sm text-gray-500 group-hover:text-blue-300'>
                    {post.body}
                  </p>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Posts
