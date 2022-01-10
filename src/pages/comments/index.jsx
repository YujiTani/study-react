import Head from 'next/head'
import { Header } from '@/components/Header'
import { CommentsComponent } from '@/components/Comment'

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </div>
  )
}

export default Comments
