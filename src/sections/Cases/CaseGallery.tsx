import { useCallback, useState } from 'react'
import { motion } from 'motion/react'
import { CASES } from '../../data/cases'
import { fadeUp, revealProps } from '../../motion/variants'
import { CasePanel } from './CasePanel'
import { CaseLightbox } from './CaseLightbox'
import styles from './CaseGallery.module.css'

export function CaseGallery() {
  const [active, setActive] = useState(0)
  const [opened, setOpened] = useState<number | null>(null)

  const close = useCallback(() => setOpened(null), [])
  const navigate = useCallback((step: number) => {
    setOpened((current) => (current === null ? null : (current + step + CASES.length) % CASES.length))
  }, [])

  return (
    <>
      <motion.ul role="list" className={styles.gallery} variants={fadeUp} {...revealProps()}>
        {CASES.map((study, index) => (
          <CasePanel
            key={study.title}
            study={study}
            index={index}
            active={index === active}
            onActivate={() => setActive(index)}
            onOpen={() => setOpened(index)}
          />
        ))}
      </motion.ul>
      <CaseLightbox index={opened} onClose={close} onNavigate={navigate} />
    </>
  )
}
