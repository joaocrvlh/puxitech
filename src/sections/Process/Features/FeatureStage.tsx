import { AnimatePresence, motion } from 'motion/react'
import { FEATURES } from '../../../data/features'
import { EASE_OUT } from '../../../motion/variants'
import { FeatureVisual } from './visuals/FeatureVisual'
import styles from './FeatureStage.module.css'

interface FeatureStageProps {
  active: number
}

export function FeatureStage({ active }: FeatureStageProps) {
  const feature = FEATURES[active]

  return (
    <div className={styles.stage}>
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.visual}
          className={styles.slide}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.96 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <FeatureVisual name={feature.visual} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
