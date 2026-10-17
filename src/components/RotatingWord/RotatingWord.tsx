import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useCycle } from './useCycle'
import styles from './RotatingWord.module.css'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

interface RotatingWordProps {
  words: readonly string[]
  interval?: number
  className?: string
}

export function RotatingWord({ words, interval = 2800, className }: RotatingWordProps) {
  const reduceMotion = useReducedMotion() ?? false
  const [hovered, setHovered] = useState(false)
  const index = useCycle(words.length, interval, reduceMotion || hovered)
  const word = words[index]

  return (
    <span
      className={[styles.root, className].filter(Boolean).join(' ')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="visually-hidden">{words[0]}</span>
      <span className={styles.window} aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.span
            key={word}
            className={styles.word}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-110%', opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            {word}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  )
}
