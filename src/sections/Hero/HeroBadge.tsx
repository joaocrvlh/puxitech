import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { rise } from './heroMotion'
import styles from './HeroBadge.module.css'

interface HeroBadgeProps {
  children: ReactNode
  delay: number
}

export function HeroBadge({ children, delay }: HeroBadgeProps) {
  return (
    <motion.p className={styles.badge} {...rise(delay)}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </motion.p>
  )
}
