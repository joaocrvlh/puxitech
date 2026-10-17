import { motion } from 'motion/react'
import { LOGO_COLOR, WORDMARK, letterX } from '../geometry'

const OFFSET = 5

interface TerminalCursorProps {
  position: number
  total: number
  delay: number
}

export function TerminalCursor({ position, total, delay }: TerminalCursorProps) {
  const finished = position >= total

  return (
    <motion.g
      initial={{ opacity: 0, x: letterX(0) + OFFSET }}
      animate={{
        x: letterX(position) + OFFSET,
        opacity: finished ? [1, 0, 1, 0, 1, 0] : 1,
      }}
      transition={{
        x: { duration: 0.06 },
        opacity: finished
          ? { duration: 1.4, ease: 'linear' }
          : { delay: position === 0 ? delay : 0, duration: 0.15 },
      }}
    >
      <rect
        y={WORDMARK.baseline - 4}
        width={WORDMARK.advance - 10}
        height={9}
        rx={2}
        style={{ fill: LOGO_COLOR.green }}
      />
    </motion.g>
  )
}
