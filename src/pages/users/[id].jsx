import { Header } from '@/components/Header'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { fetcher } from '@/utils/fetcher'

const useUser = () => {
  const router = useRouter()
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  )
  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

const UserId = () => {
  const { data, error, isLoading } = useUser()

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
