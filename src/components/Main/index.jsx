import classes from '@/components/Main/Main.module.css'
import { Headline } from '@/components/Headline'
import { Links } from '@/components/Links'
import { useCallback } from 'react'

export function Main(props) {
  const handleClick = useCallback(function (e) {
    console.log(location.href)
    e.preventDefault()
  }, [])

  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <button className={classes.btn} onClick={handleClick}>
        現在のURL表示
      </button>
      <Links />
    </main>
  )
}
