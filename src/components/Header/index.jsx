import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/', label: 'index' },
  { href: '/posts', label: 'posts' },
  { href: '/users', label: 'users' },
  { href: '/comments', label: 'comments' },
]

export const Header = () => {
  return (
    <header className='flex justify-evenly items-center border-b w-full h-24'>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className='flex justify-center items-center flex-grow text-xl hover:text-blue-500 active:text-blue-500 focus:text-blue-500'>
              {item.label}
            </a>
          </Link>
        )
      })}
    </header>
  )
}
