import { motion } from 'motion/react'
import { RING_RADIUS, RING_STROKE_WIDTH, type Point } from '../geometry'
import { popIn } from './motionPresets'

interface CommitRingProps extends Point {
  color: string
  delay: number
  pulse?: boolean
}

export function CommitRing({ cx, cy, color, delay, pulse = false }: CommitRingProps) {
  return (
    <>
      {pulse && (
        <motion.circle
          cx={cx}
          cy={cy}
          strokeWidth={2}
          style={{ stroke: color }}
          initial={{ r: RING_RADIUS, opacity: 0 }}
          animate={{ r: [RING_RADIUS, RING_RADIUS, 22], opacity: [0, 0.8, 0] }}
          transition={{ delay: delay + 0.1, duration: 0.9, times: [0, 0.02, 1], ease: 'easeOut' }}
        />
      )}
      <motion.circle
        cx={cx}
        cy={cy}
        r={RING_RADIUS}
        strokeWidth={RING_STROKE_WIDTH}
        style={{ stroke: color }}
        {...popIn(delay)}
      />
    </>
  )
}
