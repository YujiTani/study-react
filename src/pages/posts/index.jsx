import Head from 'next/head'
import { Header } from '@/components/Header'
import PostsComponent from '@/components/Post'

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent url={'https://jsonplaceholder.typicode.com/posts'} />
    </div>
  )
}

export default Posts
