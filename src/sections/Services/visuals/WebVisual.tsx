import { motion } from 'motion/react'
import { mockItem, mockProps } from '../../Process/Features/visuals/mockMotion'
import { barGroup, barItem } from './visualMotion'
import styles from './visuals.module.css'

const BARS = [38, 54, 46, 70, 62, 88, 76]

export function WebVisual() {
  return (
    <motion.div className={styles.scene} {...mockProps}>
      <motion.div className={styles.browser} variants={mockItem}>
        <div className={styles.chrome}>
          <span className={styles.light} />
          <span className={styles.light} />
          <span className={styles.light} />
          <span className={styles.url}>app.suaempresa.com.br</span>
        </div>

        <div className={styles.screen}>
          <div className={styles.side}>
            <span className={styles.sideActive} />
            <span />
            <span />
            <span />
          </div>

          <div className={styles.main}>
            <div className={styles.kpis}>
              <motion.div className={styles.kpi} variants={mockItem}>
                <span className={styles.kpiLabel}>Usuários ativos</span>
                <strong>12,4k</strong>
              </motion.div>
              <motion.div className={styles.kpi} variants={mockItem}>
                <span className={styles.kpiLabel}>Uptime</span>
                <strong className={styles.good}>99,9%</strong>
              </motion.div>
            </div>

            <motion.div className={styles.chart} variants={barGroup}>
              {BARS.map((height, index) => (
                <motion.span key={index} style={{ height: `${height}%` }} variants={barItem} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
