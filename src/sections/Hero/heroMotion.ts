import type { MotionProps } from 'motion/react'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

export function rise(delay: number): MotionProps {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: EASE_OUT },
  }
}

export const stageReveal: MotionProps = {
  initial: { opacity: 0, scale: 0.92, clipPath: 'inset(50% 50% 50% 50% round 200px)' },
  animate: { opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0% round 0px)' },
  transition: { duration: 1.1, ease: EASE_OUT },
}
