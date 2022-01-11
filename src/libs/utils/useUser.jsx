import { fetcher } from '@/utils/fetcher'
import { useRouter } from 'next/router'
import useSWR from 'swr'

export const useUser = () => {
  const router = useRouter()
  const { data: user, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  )
  return {
    user,
    error,
    isLoading: !user && !error,
  }
}
