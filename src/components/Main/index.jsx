import classes from '@/components/Main/Main.module.css'
import { Headline } from '@/components/Headline'
import { Links } from '@/components/Links'
import { useCallback, useState } from 'react'

export function Main(props) {
  const [count, setCount] = useState(1)
  const [text, setText] = useState('')
  const [isShow, setIsShow] = useState(true)
  const [array, setArray] = useState([])

  const handleCount = useCallback(() => {
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

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((element) => element === text)) {
        alert('既に存在している要素です。')
        return prevArray
      }
      const newArray = [...prevArray, text]
      return newArray
    })
  }, [text])

  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      {isShow ? (
        <div>
          <label htmlFor='input'>name</label>
          <input id='input' type='text' value={text} onChange={handleChange} />
          <button onClick={handleAdd}>追加</button>
        </div>
      ) : null}
      <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={handleCount}>
        カウントアップ
      </button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>

      <Links />
    </main>
  )
}
