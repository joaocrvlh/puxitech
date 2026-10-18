import type { CaseStudy } from '../../data/cases'
import { PlusIcon } from '../../components/icons/PlusIcon'
import { cx } from '../../utils/cx'
import styles from './CasePanel.module.css'

interface CasePanelProps {
  study: CaseStudy
  index: number
  active: boolean
  onActivate: () => void
  onOpen: () => void
}

export function CasePanel({ study, index, active, onActivate, onOpen }: CasePanelProps) {
  return (
    <li className={cx(styles.panel, active && styles.active)} onMouseEnter={onActivate}>
      <img className={styles.image} src={study.image} alt="" loading="lazy" decoding="async" />
      <span className={styles.shade} aria-hidden="true" />

      <span className={styles.collapsed} aria-hidden="true">
        <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.vertical}>{study.title}</span>
      </span>

      <div className={styles.content}>
        <span className={styles.sector}>{study.sector}</span>
        <h3 className={styles.title}>{study.title}</h3>
        <p className={styles.description}>{study.description}</p>
      </div>

      <button
        type="button"
        className={styles.hit}
        onClick={onOpen}
        onFocus={onActivate}
        aria-label={`Ver detalhes do projeto ${study.title}`}
      >
        <span className={styles.open} aria-hidden="true">
          <PlusIcon />
        </span>
      </button>
    </li>
  )
}
