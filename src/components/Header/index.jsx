import classes from '@/components/Header/Header.module.css'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>index</Link>
      <Link href='/posts' prefetch={false}>
        posts
      </Link>
      <Link href='/users' prefetch={false}>
        users
      </Link>
      <Link href='/comments' prefetch={false}>
        comments
      </Link>
    </header>
  )
}
