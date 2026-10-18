import { useRef } from 'react'
import { useReducedMotion, useScroll } from 'motion/react'
import { STATEMENT_WORDS, STATS } from '../../data/statement'
import { Section } from '../../components/Section/Section'
import { StatementWord } from './StatementWord'
import { StatItem } from './StatItem'
import styles from './Statement.module.css'

const TITLE_ID = 'destaque-title'

export function Statement() {
  const wordsRef = useRef<HTMLHeadingElement>(null)
  const lit = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({ target: wordsRef, offset: ['start 0.85', 'end 0.4'] })

  return (
    <Section id="destaque" labelledBy={TITLE_ID}>
      <div className={styles.band}>
        <h2 ref={wordsRef} id={TITLE_ID} className={styles.words}>
          {STATEMENT_WORDS.map((word, index) => (
            <StatementWord
              key={word}
              word={word}
              index={index}
              count={STATEMENT_WORDS.length}
              progress={scrollYProgress}
              lit={lit}
            />
          ))}
        </h2>

        <ul role="list" className={styles.stats}>
          {STATS.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </ul>
      </div>
    </Section>
  )
}
