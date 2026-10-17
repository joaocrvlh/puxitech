import type { MotionProps } from 'motion/react'

const EASE_DRAW = [0.65, 0, 0.35, 1] as const

export function drawPath(delay: number, duration: number): MotionProps {
  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: { delay, duration, ease: EASE_DRAW },
      opacity: { delay, duration: 0.01 },
    },
  }
}

export function popIn(delay: number): MotionProps {
  return {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { delay, type: 'spring', stiffness: 420, damping: 16 },
  }
}
