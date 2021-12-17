import classes from './Links.module.css'

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
export function Links() {
  return (
    <div className={classes.grid}>
      {ITEMS.map((item) => {
        return (
          <a href={item.href} className={classes.card} key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        )
      })}
    </div>
  )
}
