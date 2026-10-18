import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { PROCESS_STEPS } from '../../data/process'
import { CONTACT_HREF } from '../../data/navigation'
import { Section } from '../../components/Section/Section'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading'
import { ButtonLink } from '../../components/Button/ButtonLink'
import { fadeUp, revealProps } from '../../motion/variants'
import { ProcessColumn } from './ProcessColumn'
import { Features } from './Features/Features'
import styles from './Process.module.css'

const TITLE_ID = 'processo-title'
const LAST = PROCESS_STEPS.length - 1

export function Process() {
  const listRef = useRef<HTMLOListElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.8', 'end 0.4'] })

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setActive(Math.min(LAST, Math.floor(value * PROCESS_STEPS.length)))
  })

  return (
    <Section id="processo" labelledBy={TITLE_ID}>
      <div className={styles.header}>
        <SectionHeading id={TITLE_ID} title="Do briefing" highlight="ao lançamento" align="center">
          <p>Três etapas claras, com você acompanhando cada uma delas.</p>
        </SectionHeading>
        <motion.div variants={fadeUp} {...revealProps(3)}>
          <ButtonLink href={CONTACT_HREF}>Vamos começar?</ButtonLink>
        </motion.div>
      </div>

      <ol ref={listRef} role="list" className={styles.steps}>
        {PROCESS_STEPS.map((step, index) => (
          <ProcessColumn key={step.title} step={step} index={index} active={index === active} />
        ))}
      </ol>

      <Features />
    </Section>
  )
}
