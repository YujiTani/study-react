import { Header } from '@/components/Header'
import Head from 'next/head'
import { useUser } from '@/libs/utils/useUser'

const UserId = () => {
  const { data, error, isLoading } = useUser()

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <Header />
      <h1>{data?.name}</h1>
      <h2>{data?.address.city.toUpperCase()}</h2>
      <p>{data?.username}</p>
      <ol>
        <li>{data?.company.name}</li>
        <li>{data?.company.catchPhrase}</li>
      </ol>
    </div>
  )
}
export default UserId
