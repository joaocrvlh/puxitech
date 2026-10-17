import { HeroBackdrop } from './HeroBackdrop'
import { HeroContent } from './HeroContent'
import { HeroStage } from './HeroStage'
import styles from './Hero.module.css'

const TITLE_ID = 'hero-title'

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby={TITLE_ID}>
      <HeroBackdrop />
      <HeroContent titleId={TITLE_ID} />
      <HeroStage />
    </section>
  )
}
