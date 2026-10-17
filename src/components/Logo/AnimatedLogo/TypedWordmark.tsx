import { motion } from 'motion/react'
import { WORDMARK, letterX } from '../geometry'
import { Wordmark } from '../Wordmark'

interface TypedWordmarkProps {
  count: number
  animate: boolean
}

export function TypedWordmark({ count, animate }: TypedWordmarkProps) {
  return (
    <Wordmark>
      {[...WORDMARK.text].slice(0, count).map((char, i) => (
        <motion.g
          key={i}
          initial={animate ? { opacity: 0, y: 14 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <text x={letterX(i)} y={WORDMARK.baseline}>{char}</text>
        </motion.g>
      ))}
    </Wordmark>
  )
}
