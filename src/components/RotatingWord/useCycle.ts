import { useEffect, useState } from 'react'

export function useCycle(length: number, interval: number, paused = false): number {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (paused || length < 2) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % length), interval)
    return () => window.clearInterval(id)
  }, [length, interval, paused])

  return index
}
