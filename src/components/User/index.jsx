import { useUsers } from '@/libs/utils/useUsers'
import Link from 'next/link'

const UsersComponent = () => {
  const { data, error, isLoading, isEmpty } = useUsers()

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
      {data?.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{`${user.name}（${user.email}）`}</a>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default UsersComponent
