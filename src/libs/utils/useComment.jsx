import { fetcher } from '@/utils/fetcher'
import { useRouter } from 'next/router'
import useSWR from 'swr'

export const useComment = () => {
  const router = useRouter()
  const { data: comment, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  )
  return {
    comment,
    error,
    isLoading: !comment && !error,
  }
}
