import { motion } from 'motion/react'
import { CONTACT_HREF } from '../../data/navigation'
import { ButtonLink } from '../../components/ButtonLink/ButtonLink'
import { RotatingWord } from '../../components/RotatingWord/RotatingWord'
import { rise } from './heroMotion'
import styles from './HeroContent.module.css'

const HIGHLIGHT_WORDS = ['software', 'código', 'tecnologia', 'inovação'] as const

interface HeroContentProps {
  titleId: string
}

export function HeroContent({ titleId }: HeroContentProps) {
  return (
    <div className={styles.content}>

      <h1 id={titleId} className={styles.title}>
        <motion.span className={styles.line} {...rise(0.45)}>Construímos </motion.span>
        <motion.span className={`${styles.line} ${styles.accent}`} {...rise(0.6)}>
          <RotatingWord words={HIGHLIGHT_WORDS} />{' '}
        </motion.span>
        <motion.span className={styles.line} {...rise(0.75)}>que flui</motion.span>
      </h1>

      <motion.p className={styles.lead} {...rise(0.95)}>
        Três caminhos que se encontram
        para transformar ideias em produtos digitais que crescem com o seu negócio.
      </motion.p>

      <motion.div className={styles.actions} {...rise(1.1)}>
        <ButtonLink href={CONTACT_HREF}>Vamos conversar</ButtonLink>
        <ButtonLink href="#servicos" variant="ghost">Nossos serviços</ButtonLink>
      </motion.div>
    </div>
  )
}
