import { UserByUserId } from '@/libs/utils/useFetchArray'
import { PostByPostId } from '@/libs/utils/useFetchArray'
import Link from 'next/link'

export const PostByPostIdComponent = (props) => {
  const { data, error, isLoading, isEmpty } = PostByPostId(props.id)
  console.log(`data: ${data}`)
  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
    isEmpty: userIsEmpty,
  } = UserByUserId(data ? data.userId : null)

  if (isLoading || userIsLoading) {
    return <div>ローディング中</div>
  }

  if (error || userError) {
    return <div>{error.message}</div>
  }

  if (isEmpty || userIsEmpty) {
    return <div>データがありません</div>
  }

  return (
    <>
      <p>
        <Link
          href={`/posts/${data.id}`}
        >{`Post#${data.id} ${data.title}`}</Link>
      </p>
      <p>
        <Link
          href={`/users/${userData.id}`}
        >{`User#${userData.id} ${userData.name}`}</Link>
      </p>
    </>
  )
}
