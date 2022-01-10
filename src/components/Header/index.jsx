import classes from '@/components/Header/Header.module.css'
import Link from 'next/link'

export function Header() {
  return (
    <header className={classes.header}>
      <Link href='/posts' prefetch={false}>
        posts
      </Link>
      <Link href='/about'>about</Link>
    </header>
  )
}
