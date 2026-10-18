import type { CaseStudy } from '../../data/cases'
import styles from './CaseDetails.module.css'

interface CaseDetailsProps {
  study: CaseStudy
  titleId: string
  position: number
  total: number
}

export function CaseDetails({ study, titleId, position, total }: CaseDetailsProps) {
  return (
    <div className={styles.details}>
      <p className={styles.counter}>
        {position} / {total}
      </p>
      <span className={styles.sector}>{study.sector}</span>
      <h3 id={titleId} className={styles.title}>{study.title}</h3>
      <p className={styles.description}>{study.description}</p>
      <ul role="list" className={styles.stack} aria-label="Tecnologias usadas">
        {study.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  )
}
