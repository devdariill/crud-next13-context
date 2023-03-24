import { useEffect, useState } from 'react'

export default function useLocalStorage (key, initialState) {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    const item = localStorage.getItem(key)
    const tasks = JSON.parse(item)
    item && setState(tasks)
  }, [key])
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [key, state])
  return [state, setState]
}
