import { motion, useTransform, type MotionValue } from 'motion/react'

interface StatementWordProps {
  word: string
  index: number
  count: number
  progress: MotionValue<number>
  lit: boolean
}

export function StatementWord({ word, index, count, progress, lit }: StatementWordProps) {
  const range = [index / count, (index + 1) / count]
  const opacity = useTransform(progress, range, [0.18, 1])
  const x = useTransform(progress, range, [-24, 0])

  return (
    <motion.span style={lit ? undefined : { opacity, x }}>
      {word}{' '}
    </motion.span>
  )
}
