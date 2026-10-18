import { motion } from 'motion/react'
import { CONTACT } from '../../data/contact'
import { fadeUp, revealProps } from '../../motion/variants'
import styles from './ContactChannels.module.css'

export function ContactChannels() {
  return (
    <motion.dl className={styles.channels} variants={fadeUp} {...revealProps(3)}>
      <div>
        <dt>E-mail</dt>
        <dd>
          <a href={`mailto:${CONTACT.email}`} className={styles.link}>{CONTACT.email}</a>
        </dd>
      </div>
    </motion.dl>
  )
}
