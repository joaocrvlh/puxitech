import { motion } from 'motion/react'
import { SERVICES } from '../../data/services'
import { Section } from '../../components/Section/Section'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading'
import { fadeUp, revealProps } from '../../motion/variants'
import { ServiceItem } from './ServiceItem'
import styles from './Services.module.css'

const TITLE_ID = 'servicos-title'

export function Services() {
  return (
    <Section id="servicos" labelledBy={TITLE_ID} className={styles.services}>
      <SectionHeading id={TITLE_ID} title="Soluções digitais" highlight="sob medida" align="center">
        <p>
          Do primeiro protótipo ao produto no ar: cuidamos de cada etapa para você
          focar no que importa, o seu negócio.
        </p>
      </SectionHeading>

      <motion.div className={styles.panel} variants={fadeUp} {...revealProps(2)}>
        <ul role="list" className={styles.list}>
          {SERVICES.map((service, index) => (
            <ServiceItem key={service.title} service={service} index={index} />
          ))}
        </ul>
      </motion.div>
    </Section>
  )
}
