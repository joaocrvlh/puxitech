import { useState } from 'react'
import { motion } from 'motion/react'
import { AnimatedLogo } from '../../components/Logo/AnimatedLogo/AnimatedLogo'
import { stageReveal } from './heroMotion'
import styles from './HeroStage.module.css'

export function HeroStage() {
  const [run, setRun] = useState(0)

  return (
    <motion.div className={styles.stage} {...stageReveal}>
      <div className={styles.waters} aria-hidden="true" />

      <button
        type="button"
        className={styles.replay}
        onClick={() => setRun((n) => n + 1)}
        aria-label="Repetir animação da logo PuxiTech"
        title="Repetir animação"
      >
        <AnimatedLogo key={run} />
      </button>
    </motion.div>
  )
}
