import classes from '@/components/Main/Main.module.css'
import { Headline } from '@/components/Headline'
import { Links } from '@/components/Links'
import { useCallback, useState } from 'react'

export function Main(props) {
  const [count, setCount] = useState(1)

  const handleClick = useCallback(function (e) {
    alert(`現在のURLは、${location.href}`)
  }, [])

  const handleCount = useCallback(
    function () {
      if (count > 9) {
        return
      }
      setCount((count) => count + 1)
    },
    [count]
  )

  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={handleClick}>
        ボタン
      </button>
      <button className={classes.btn} onClick={handleCount}>
        カウントアップ
      </button>
      <Links />
    </main>
  )
}
