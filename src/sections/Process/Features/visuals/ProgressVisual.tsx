import { motion } from 'motion/react'
import { EASE_OUT } from '../../../../motion/variants'
import { mockItem, mockProps } from './mockMotion'
import mock from './mock.module.css'
import styles from './ProgressVisual.module.css'

const MILESTONES = [28, 42, 38, 60, 74, 92]
const TASKS = [
  { label: 'Tela de login', done: true },
  { label: 'Agenda de consultas', done: true },
  { label: 'Pagamentos online', done: false },
]

export function ProgressVisual() {
  return (
    <motion.div className={styles.grid} {...mockProps}>
      <motion.div className={mock.card} variants={mockItem}>
        <div className={mock.cardHeader}>
          <p className={mock.cardTitle}>Andamento do projeto</p>
          <span className={mock.pill}>68% concluído</span>
        </div>
        <div className={styles.chart}>
          {MILESTONES.map((value, index) => (
            <div key={index} className={styles.column}>
              <motion.span
                className={styles.bar}
                style={{ height: `${value}%` }}
                variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1, transition: { delay: 0.3 + index * 0.08, duration: 0.6, ease: EASE_OUT } } }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className={mock.card} variants={mockItem}>
        <p className={mock.cardTitle}>Checklist</p>
        <ul className={styles.tasks}>
          {TASKS.map((task) => (
            <motion.li key={task.label} variants={mockItem}>
              <span className={task.done ? styles.check : styles.pending} />
              {task.label}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
