import classes from '@/components/Main/Main.module.css'
import { Headline } from '@/components/Headline'
import { Links } from '@/components/Links'
import { useState, useCallback } from 'react'

const ITEMS = [
  {
    id: 1,
    href: 'https://nextjs.org/docs',
    title: 'Documentation →',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    id: 2,
    href: 'https://nextjs.org/learn',
    title: 'Learn →',
    description: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    id: 3,
    href: 'https://github.com/vercel/next.js/tree/master/examples',
    title: 'Examples →',
    description: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    id: 4,
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy →',
    description:
      'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
]

export function Main(props) {
  const [items, setItems] = useState(ITEMS)
  const handleRemove = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1)
    })
  }, [])
  return (
    <main className={classes.main}>
      <Headline page={props.page} items={items}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links items={items} handleRemove={handleRemove} />
    </main>
  )
}
