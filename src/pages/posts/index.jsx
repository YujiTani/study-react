import Head from 'next/head'
import { Header } from '@/components/Header'
import { Posts as PostsComponent } from '@/components/Post'

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  )
}

export default Posts
