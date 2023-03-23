import { useEffect, useState } from 'react'

export default function useHook (key, initialState) {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    const item = localStorage.getItem(key)
    item && setState(JSON.parse(item))
  }, [key])
  useEffect(() => state.length > 0 && localStorage.setItem(key, state), [key, state])
  return [state, setState]
}
