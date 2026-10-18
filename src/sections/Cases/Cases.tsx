import { Section } from '../../components/Section/Section'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading'
import { CaseGallery } from './CaseGallery'
import styles from './Cases.module.css'

const TITLE_ID = 'cases-title'

export function Cases() {
  return (
    <Section id="cases" labelledBy={TITLE_ID}>
      <div className={styles.header}>
        <SectionHeading id={TITLE_ID} title="Projetos em" highlight="destaque">
          <p>Explore a galeria e toque em um projeto para ver todos os detalhes.</p>
        </SectionHeading>
      </div>
      <CaseGallery />
    </Section>
  )
}
