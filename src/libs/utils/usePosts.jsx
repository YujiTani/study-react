import { fetcher } from '@/utils/fetcher'
import useSWR from 'swr'

export const usePosts = (url) => {
  const { data, error } = useSWR(url, fetcher)

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  }
}
