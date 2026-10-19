import { motion } from 'motion/react'
import { mockItem, mockProps } from '../../Process/Features/visuals/mockMotion'
import { meterFill } from './visualMotion'
import mock from '../../Process/Features/visuals/mock.module.css'
import styles from './visuals.module.css'

const METRICS = [
  { label: 'Precisão do modelo', value: 96 },
  { label: 'Processos automatizados', value: 82 },
  { label: 'Tempo economizado', value: 68 },
] as const

export function AiVisual() {
  return (
    <motion.div className={styles.scene} {...mockProps}>
      <motion.div className={`${mock.card} ${styles.aiCard}`} variants={mockItem}>
        <div className={mock.cardHeader}>
          <p className={mock.cardTitle}>
            <span className={styles.spark} aria-hidden="true">✦</span> Modelo de IA
          </p>
          <span className={styles.livePill}>
            <span className={styles.pulse} /> ativo
          </span>
        </div>

        <div className={styles.meters}>
          {METRICS.map((metric) => (
            <motion.div key={metric.label} className={styles.meter} variants={mockItem}>
              <div className={styles.meterRow}>
                <span>{metric.label}</span>
                <strong>{metric.value}%</strong>
              </div>
              <div className={styles.track}>
                <motion.span custom={metric.value} variants={meterFill} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.p className={styles.insight} variants={mockItem}>
        Insight: demanda +18% às sextas
      </motion.p>
    </motion.div>
  )
}
