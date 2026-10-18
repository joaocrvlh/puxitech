import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { Eyebrow } from '../Eyebrow/Eyebrow'
import { fadeUp, revealProps } from '../../motion/variants'
import { cx } from '../../utils/cx'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  id: string
  eyebrow?: string
  title: string
  highlight: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function SectionHeading({ id, eyebrow, title, highlight, align = 'left', children }: SectionHeadingProps) {
  return (
    <header className={cx(styles.heading, align === 'center' && styles.center)}>
      {eyebrow && (
        <motion.div variants={fadeUp} {...revealProps(0)}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
      )}

      <motion.h2 id={id} className={styles.title} variants={fadeUp} {...revealProps(1)}>
        {title} <span className={styles.highlight}>{highlight}</span>
      </motion.h2>

      {children && (
        <motion.div className={styles.description} variants={fadeUp} {...revealProps(2)}>
          {children}
        </motion.div>
      )}
    </header>
  )
}
