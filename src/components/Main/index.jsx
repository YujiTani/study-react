import classes from '@/components/Main/Main.module.css'
import { Headline } from '@/components/Headline'
import { Links } from '@/components/Links'
import { useCallback, useState } from 'react'

export function Main(props) {
  const [count, setCount] = useState(1)
  const [text, setText] = useState('')
  const [isShow, setIsShow] = useState(true)

  const handleClick = useCallback(function (e) {
    alert(`現在のURLは、${location.href}`)
  }, [])

  const handleCount = useCallback(
    function () {
      if (count > 9) {
        return
      }
    setCount((prevCount) => prevCount + 1)
  }, [count])

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow)
  }, [])

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      return
    }
    setText((text) => e.target.value)
  }, [])

  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      {isShow ? (
        <label htmlFor='input'>
          name
          <input id='input' type='text' value={text} onChange={handleChange} />
        </label>
      ) : null}
      <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>
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
