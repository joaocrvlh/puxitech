import { useReducedMotion } from 'motion/react'
import { BRANCHES, LOGO_COLOR, LOGO_LABEL, LOGO_VIEWBOX, WORDMARK } from '../geometry'
import { TIMELINE } from './timeline'
import { useTypewriter } from './useTypewriter'
import { BranchPath } from './BranchPath'
import { CommitRing } from './CommitRing'
import { Confluence } from './Confluence'
import { TypedWordmark } from './TypedWordmark'
import { TerminalCursor } from './TerminalCursor'
import styles from './AnimatedLogo.module.css'

interface AnimatedLogoProps {
  className?: string
}

export function AnimatedLogo({ className }: AnimatedLogoProps) {
  const reduceMotion = useReducedMotion() ?? false
  const total = WORDMARK.text.length
  const typed = useTypewriter({
    length: total,
    delay: TIMELINE.typing.delay,
    interval: TIMELINE.typing.interval,
    instant: reduceMotion,
  })

  return (
    <svg
      className={[styles.logo, className].filter(Boolean).join(' ')}
      viewBox={LOGO_VIEWBOX}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={LOGO_LABEL}
      focusable="false"
    >
      <BranchPath d={BRANCHES.brown.line} color={LOGO_COLOR.brown} {...TIMELINE.amazonas} />
      <BranchPath d={BRANCHES.brown.merge} color={LOGO_COLOR.brown} {...TIMELINE.merge} />
      <Confluence delay={TIMELINE.confluence} />

      <BranchPath d={BRANCHES.navy.line} color={LOGO_COLOR.navy} {...TIMELINE.tapajos} />
      <CommitRing {...BRANCHES.navy.ring} color={LOGO_COLOR.navy} delay={TIMELINE.tapajosRing} />

      <BranchPath d={BRANCHES.green.line} color={LOGO_COLOR.green} {...TIMELINE.main} />
      <CommitRing {...BRANCHES.green.ring} color={LOGO_COLOR.green} delay={TIMELINE.initRing} pulse />

      <TypedWordmark count={typed} animate={!reduceMotion} />
      {!reduceMotion && (
        <TerminalCursor position={typed} total={total} delay={TIMELINE.typing.delay - 0.3} />
      )}
    </svg>
  )
}
