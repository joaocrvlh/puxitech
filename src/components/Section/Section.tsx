import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  labelledBy: string
  className?: string
  children: ReactNode
}

export function Section({ id, labelledBy, className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx(styles.section, className)}>
      {children}
    </section>
  )
}
