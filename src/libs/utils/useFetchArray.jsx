import useSWR from 'swr'

export const useFetchArray = (url) => {
  const { data, error } = useSWR(url)

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  }
}

const API_URL = 'https://jsonplaceholder.typicode.com'

// post
export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`)
}

export const PostByPostId = (postId) => {
  return useFetchArray(postId ? `${API_URL}/posts/${postId}` : null)
}

export const PostsByUserId = (userId) => {
  return useFetchArray(userId ? `${API_URL}/posts?userId=${userId}` : null)
}

// user
export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`)
}

export const UserByUserId = (userId) => {
  return useFetchArray(userId ? `${API_URL}/users/${userId}` : null)
}

// comment
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`)
}

export const CommentsByPostId = (postId) => {
  return useFetchArray(postId ? `${API_URL}/comments?postId=${postId}` : null)
}

export const CountCommentsByPostId = (postId) => {
  return useFetchArray(postId ? `${API_URL}/comments?postId=${postId}` : null)
}
