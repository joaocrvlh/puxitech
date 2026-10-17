import {
  BRANCHES, ICON_VIEWBOX, LOGO_COLOR, LOGO_LABEL, LOGO_VIEWBOX,
  RING_RADIUS, RING_STROKE_WIDTH, STROKE_WIDTH, WORDMARK, letterX,
} from './geometry'
import { Wordmark } from './Wordmark'

interface LogoMarkProps {
  className?: string
  decorative?: boolean
  iconOnly?: boolean
}

export function LogoMark({ className, decorative = false, iconOnly = false }: LogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox={iconOnly ? ICON_VIEWBOX : LOGO_VIEWBOX}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : LOGO_LABEL}
      aria-hidden={decorative || undefined}
    >
      <g strokeWidth={STROKE_WIDTH}>
        <path d={BRANCHES.green.line} style={{ stroke: LOGO_COLOR.green }} />
        <path d={BRANCHES.brown.line} style={{ stroke: LOGO_COLOR.brown }} />
        <path d={BRANCHES.brown.merge} style={{ stroke: LOGO_COLOR.brown }} />
        <path d={BRANCHES.navy.line} style={{ stroke: LOGO_COLOR.navy }} />
      </g>
      <circle {...BRANCHES.brown.dot} style={{ fill: LOGO_COLOR.brown }} />
      <g strokeWidth={RING_STROKE_WIDTH}>
        <circle {...BRANCHES.green.ring} r={RING_RADIUS} style={{ stroke: LOGO_COLOR.green }} />
        <circle {...BRANCHES.navy.ring} r={RING_RADIUS} style={{ stroke: LOGO_COLOR.navy }} />
      </g>
      {!iconOnly && (
        <Wordmark>
          {[...WORDMARK.text].map((char, i) => (
            <text key={i} x={letterX(i)} y={WORDMARK.baseline}>{char}</text>
          ))}
        </Wordmark>
      )}
    </svg>
  )
}
