import { motion } from 'motion/react'
import { mockItem, mockProps } from '../../Process/Features/visuals/mockMotion'
import styles from './visuals.module.css'

export function ProductVisual() {
  return (
    <motion.div className={`${styles.scene} ${styles.productScene}`} {...mockProps}>
      <motion.div className={styles.phone} variants={mockItem}>
        <span className={styles.notch} />
        <div className={styles.appHeader}>
          <span className={styles.appLogo} />
          <span className={styles.appLine} />
        </div>
        <div className={styles.appHero}>
          <span className={styles.appLineLight} />
          <strong>R$ 48,2k</strong>
        </div>
        <div className={styles.appItem}><span /><span /></div>
        <div className={styles.appItem}><span /><span /></div>
        <span className={styles.appButton} />
      </motion.div>

      <motion.span className={`${styles.tag} ${styles.tagLeft}`} variants={mockItem}>B2B</motion.span>
      <motion.span className={`${styles.tag} ${styles.tagRight}`} variants={mockItem}>B2C</motion.span>
      <motion.span className={styles.launch} variants={mockItem}>
        <span className={styles.pulse} /> v1.0 no ar
      </motion.span>
    </motion.div>
  )
}
