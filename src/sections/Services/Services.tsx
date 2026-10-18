import { motion } from 'motion/react'
import { SERVICES } from '../../data/services'
import { CONTACT_HREF } from '../../data/navigation'
import { Section } from '../../components/Section/Section'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading'
import { ButtonLink } from '../../components/Button/ButtonLink'
import { fadeUp, revealProps } from '../../motion/variants'
import { ServiceItem } from './ServiceItem'
import styles from './Services.module.css'

const TITLE_ID = 'servicos-title'

export function Services() {
  return (
    <Section id="servicos" labelledBy={TITLE_ID} className={styles.services}>
      <div className={styles.intro}>
        <SectionHeading id={TITLE_ID} title="Soluções digitais" highlight="sob medida">
          <p>
            Do primeiro protótipo ao produto no ar: cuidamos de cada etapa para você
            focar no que importa, o seu negócio.
          </p>
        </SectionHeading>
        <motion.div className={styles.actions} variants={fadeUp} {...revealProps(3)}>
          <ButtonLink href={CONTACT_HREF}>Vamos conversar</ButtonLink>
          <ButtonLink href="#processo" variant="ghost">Como trabalhamos</ButtonLink>
        </motion.div>
      </div>

      <ul role="list" className={styles.list}>
        {SERVICES.map((service) => (
          <ServiceItem key={service.title} service={service} />
        ))}
      </ul>
    </Section>
  )
}
