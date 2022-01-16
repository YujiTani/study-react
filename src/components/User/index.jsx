import { useUsers } from '@/libs/utils/useFetchArray'
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
    <ul className='grid grid-cols-3 gap-4'>
      {data?.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a className='block p-3 shadow-md rounded group hover:bg-gray-400 hover:scale-110 duration-100'>
                <h1 className='font-bold group-hover:text-white '>
                  {user.name}
                </h1>
                <p className='text-sm overflow-hidden overflow-ellipsis whitespace-nowrap group-hover:text-white'>
                  {user.email}
                </p>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default UsersComponent
