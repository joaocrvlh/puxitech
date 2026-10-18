import { useRef, useState } from 'react'
import { useScroll } from 'motion/react'
import { FEATURES } from '../../../data/features'
import { FeatureRail } from './FeatureRail'
import { FeatureBlock } from './FeatureBlock'
import { FeatureStage } from './FeatureStage'
import styles from './Features.module.css'

export function Features() {
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start center', 'end center'] })

  return (
    <div className={styles.layout}>
      <div ref={listRef} className={styles.list}>
        <FeatureRail progress={scrollYProgress} count={FEATURES.length} active={active} />
        {FEATURES.map((feature, index) => (
          <FeatureBlock key={feature.title} feature={feature} index={index} onActive={setActive} />
        ))}
      </div>
      <div className={styles.stageColumn}>
        <FeatureStage active={active} />
      </div>
    </div>
  )
}
