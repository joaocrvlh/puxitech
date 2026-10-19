import type { CSSProperties } from 'react'
import { motion } from 'motion/react'
import type { Service } from '../../data/services'
import { CONTACT_HREF } from '../../data/navigation'
import { LOGO_COLOR } from '../../components/Logo/geometry'
import { fadeUp, revealProps } from '../../motion/variants'
import { ServiceVisual } from './visuals/ServiceVisual'
import styles from './ServiceItem.module.css'

interface ServiceItemProps {
  service: Service
  index: number
}

export function ServiceItem({ service, index }: ServiceItemProps) {
  return (
    <motion.li
      className={styles.card}
      style={{ '--accent': LOGO_COLOR[service.branch] } as CSSProperties}
      variants={fadeUp}
      {...revealProps(index)}
    >
      <div className={styles.visual} aria-hidden="true">
        <ServiceVisual name={service.icon} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.description}</p>
        <a className={styles.link} href={CONTACT_HREF}>
          Vamos conversar
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </motion.li>
  )
}
