import { motion, useReducedMotion, useSpring, type MotionValue } from 'motion/react'
import { cx } from '../../../utils/cx'
import styles from './FeatureRail.module.css'

interface FeatureRailProps {
  progress: MotionValue<number>
  count: number
  active: number
}

export function FeatureRail({ progress, count, active }: FeatureRailProps) {
  const reduceMotion = useReducedMotion() ?? false
  const scaleY = useSpring(progress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return (
    <div className={styles.rail} aria-hidden="true">
      <motion.span className={styles.fill} style={{ scaleY: reduceMotion ? 1 : scaleY }} />
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={cx(styles.marker, index <= active && styles.reached)}
          style={{ top: `${((index + 0.5) / count) * 100}%` }}
        />
      ))}
    </div>
  )
}
