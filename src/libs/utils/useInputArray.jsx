import { useCallback, useState } from 'react'

export const useInputArray = () => {
  const [text, setText] = useState('')
  const [isShow, setIsShow] = useState(true)
  const [array, setArray] = useState([])

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
      setText((text) => '')
      return newArray
    })
  }, [text])
  return { text, isShow, array, handleDisplay, handleChange, handleAdd }
}
