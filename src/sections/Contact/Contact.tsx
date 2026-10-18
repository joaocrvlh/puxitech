import { motion } from 'motion/react'
import { Section } from '../../components/Section/Section'
import { fadeUp, revealProps } from '../../motion/variants'
import { ContactChannels } from './ContactChannels'
import { ContactForm } from './ContactForm'
import styles from './Contact.module.css'

const TITLE_ID = 'contato-title'

export function Contact() {
  return (
    <Section id="contato" labelledBy={TITLE_ID}>
      <motion.div className={styles.panel} variants={fadeUp} {...revealProps()}>
        <div className={styles.intro}>
          <h2 id={TITLE_ID} className={styles.title}>Vamos tirar sua ideia do papel?</h2>
          <p className={styles.lead}>
            Conte sobre o seu projeto ou o desafio do seu negócio. Respondemos rápido e sem compromisso.
          </p>
          <ContactChannels />
        </div>
        <ContactForm />
      </motion.div>
    </Section>
  )
}
