import { motion } from 'motion/react'
import type { Service } from '../../data/services'
import { LOGO_COLOR } from '../../components/Logo/geometry'
import { ServiceIcon } from '../../components/icons/ServiceIcon'
import { fadeUp, revealProps } from '../../motion/variants'
import styles from './ServiceItem.module.css'

interface ServiceItemProps {
  service: Service
}

export function ServiceItem({ service }: ServiceItemProps) {
  return (
    <motion.li className={styles.item} variants={fadeUp} {...revealProps()}>
      <h3 className={styles.title}>
        <ServiceIcon name={service.icon} className={styles.icon} style={{ color: LOGO_COLOR[service.branch] }} />
        {service.title}
      </h3>
      <p className={styles.description}>{service.description}</p>
    </motion.li>
  )
}
