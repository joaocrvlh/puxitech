import type { ProcessStep } from '../../data/process'
import { cx } from '../../utils/cx'
import { ProcessArc } from './ProcessArc'
import styles from './ProcessColumn.module.css'

interface ProcessColumnProps {
  step: ProcessStep
  index: number
  active: boolean
}

export function ProcessColumn({ step, index, active }: ProcessColumnProps) {
  return (
    <li className={cx(styles.column, active && styles.active)} aria-current={active ? 'step' : undefined}>
      <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <h3 className={styles.title}>
        <span className="visually-hidden">Etapa {index + 1}: </span>
        {step.title}
      </h3>
      <p className={styles.description}>{step.description}</p>
      <ProcessArc icon={step.icon} active={active} />
    </li>
  )
}
