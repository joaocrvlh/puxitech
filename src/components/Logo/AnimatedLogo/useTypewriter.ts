import { useEffect, useState } from 'react'

interface TypewriterOptions {
  length: number
  delay: number
  interval: number
  instant?: boolean
}

export function useTypewriter({ length, delay, interval, instant = false }: TypewriterOptions): number {
  const [count, setCount] = useState(instant ? length : 0)

  useEffect(() => {
    if (instant) {
      setCount(length)
      return
    }
    setCount(0)
    const timers = Array.from({ length }, (_, i) =>
      window.setTimeout(() => setCount(i + 1), (delay + (i + 1) * interval) * 1000),
    )
    return () => timers.forEach(window.clearTimeout)
  }, [length, delay, interval, instant])

  return count
}
