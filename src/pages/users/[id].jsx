import { Header } from '@/components/Header'
import Head from 'next/head'
import { useUser } from '@/libs/utils/useUser'
import { PostsByUserIdComponent } from '@/components/Post/PostsByUserId'

const UserId = () => {
  const { user, error, isLoading } = useUser()

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Head>
        <title>{user?.name}</title>
      </Head>
      <Header />
      <h1>UserName:{user?.name}</h1>
      <h2>City:{user?.address.city.toUpperCase()}</h2>
      <ul>
        <li>{user?.company.name}</li>
        <li>{user?.company.catchPhrase}</li>
      </ul>
      <h1>記事紹介</h1>
      <PostsByUserIdComponent id={user.id} />
    </div>
  )
}
export default UserId
