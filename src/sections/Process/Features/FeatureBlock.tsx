import { useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import type { Feature } from '../../../data/features'
import { CONTACT_HREF } from '../../../data/navigation'
import { ButtonLink } from '../../../components/Button/ButtonLink'
import { fadeUp, revealProps } from '../../../motion/variants'
import { FeatureVisual } from './visuals/FeatureVisual'
import styles from './FeatureBlock.module.css'

interface FeatureBlockProps {
  feature: Feature
  index: number
  onActive: (index: number) => void
}

export function FeatureBlock({ feature, index, onActive }: FeatureBlockProps) {
  const ref = useRef<HTMLElement>(null)
  const inCenter = useInView(ref, { margin: '-50% 0px -50% 0px' })

  useEffect(() => {
    if (inCenter) onActive(index)
  }, [inCenter, index, onActive])

  return (
    <article ref={ref} className={styles.block}>
      <motion.div variants={fadeUp} {...revealProps()}>
        <p className={styles.eyebrow}>{feature.eyebrow}</p>
        <h3 className={styles.title}>{feature.title}</h3>
        <p className={styles.description}>{feature.description}</p>
        <ButtonLink href={CONTACT_HREF}>Vamos conversar</ButtonLink>
      </motion.div>
      <div className={styles.inlineVisual}>
        <FeatureVisual name={feature.visual} />
      </div>
    </article>
  )
}
