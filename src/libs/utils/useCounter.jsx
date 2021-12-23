import { useCallback, useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(1)
  const handleCount = useCallback(() => {
    if (count > 9) {
      return
    }
    setCount((prevCount) => prevCount + 1)
  }, [count])
  return { count, handleCount }
}
