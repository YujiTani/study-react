import useSWR from 'swr'

export function Posts() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts')
  console.log({ data, error })

  if (!error && !data) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (data.length === 0) {
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
