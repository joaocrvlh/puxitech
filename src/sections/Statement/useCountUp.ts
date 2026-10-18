import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

export function useCountUp<T extends HTMLElement>(value: number) {
  const ref = useRef<T>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion() ?? false

  useEffect(() => {
    const element = ref.current
    if (!element || !inView) return
    if (reduceMotion) {
      element.textContent = String(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        element.textContent = String(Math.round(latest))
      },
    })
    return () => controls.stop()
  }, [inView, reduceMotion, value])

  return ref
}
