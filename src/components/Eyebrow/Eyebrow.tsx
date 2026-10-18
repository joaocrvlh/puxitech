import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import styles from './Eyebrow.module.css'

interface EyebrowProps {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cx(styles.eyebrow, className)}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </p>
  )
}
