import { motion } from 'motion/react'
import { mockItem, mockProps } from './mockMotion'
import mock from './mock.module.css'
import styles from './SupportVisual.module.css'

const UPTIME = Array.from({ length: 30 }, (_, index) => index !== 19)
const UPDATES = [
  { title: 'Melhoria publicada', detail: 'Relatórios 2x mais rápidos' },
  { title: 'Backup concluído', detail: 'Hoje, 03:00' },
]

export function SupportVisual() {
  return (
    <motion.div className={mock.mock} {...mockProps}>
      <motion.div className={mock.card} variants={mockItem}>
        <div className={mock.cardHeader}>
          <p className={mock.cardTitle}>Status do sistema</p>
          <span className={styles.status}>
            <span className={mock.dot} />
            Tudo funcionando
          </span>
        </div>
        <div className={styles.uptime}>
          {UPTIME.map((ok, index) => (
            <span key={index} className={ok ? styles.ok : styles.warn} />
          ))}
        </div>
        <p className={mock.muted}>Últimos 30 dias · 99,9% no ar</p>
      </motion.div>

      {UPDATES.map((update) => (
        <motion.div key={update.title} className={`${mock.card} ${styles.update}`} variants={mockItem}>
          <span className={styles.icon} />
          <div>
            <p className={mock.cardTitle}>{update.title}</p>
            <p className={mock.muted}>{update.detail}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
