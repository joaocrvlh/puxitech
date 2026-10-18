import { useId } from 'react'
import type { ProcessIconName } from '../../data/process'
import { cx } from '../../utils/cx'
import { ProcessIcon } from './ProcessIcon'
import styles from './ProcessArc.module.css'

interface ProcessArcProps {
  icon: ProcessIconName
  active: boolean
}

export function ProcessArc({ icon, active }: ProcessArcProps) {
  const gradientId = useId()

  return (
    <div className={cx(styles.arc, active && styles.active)} aria-hidden="true">
      <svg className={styles.svg} viewBox="0 0 200 100" fill="none">
        <defs>
          <radialGradient id={gradientId} cx="50%" cy="100%" r="100%">
            <stop offset="0" style={{ stopColor: 'var(--color-accent)', stopOpacity: 0.18 }} />
            <stop offset="1" style={{ stopColor: 'var(--color-accent)', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        <path className={styles.glow} d="M4 100A96 96 0 0 1 196 100Z" fill={`url(#${gradientId})`} />
        <path className={styles.line} d="M4 100A96 96 0 0 1 196 100" strokeWidth="1.5" strokeDasharray="6 7" />
      </svg>
      <span className={styles.icon}>
        <ProcessIcon name={icon} />
      </span>
    </div>
  )
}
