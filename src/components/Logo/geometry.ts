export const LOGO_VIEWBOX = '22 232 586 152'
export const ICON_VIEWBOX = '26 236 116 142'
export const LOGO_LABEL = 'PuxiTech'

export const STROKE_WIDTH = 7
export const RING_RADIUS = 6.5
export const RING_STROKE_WIDTH = 5

export type BranchKey = 'green' | 'navy' | 'brown'

export const LOGO_COLOR: Record<BranchKey, string> = {
  green: 'var(--logo-green)',
  navy: 'var(--logo-navy)',
  brown: 'var(--logo-brown)',
}

export interface Point {
  cx: number
  cy: number
}

export const BRANCHES = {
  green: {
    line: 'M37 255.5V372.5',
    ring: { cx: 37, cy: 248 } satisfies Point,
  },
  navy: {
    line: 'M44.5 248H124Q136 248 136 260V297Q136 309 124 309H102.5',
    ring: { cx: 95, cy: 309 } satisfies Point,
  },
  brown: {
    line: 'M56 256V358',
    merge: 'M95 316.5V346Q95 362 79 362H66',
    dot: { cx: 60, cy: 364, r: 10.5 },
  },
} as const

export const WORDMARK = {
  text: 'uxiTech',
  x: 140,
  advance: 66,
  baseline: 376,
  fontSize: 112,
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 700,
} as const

export const letterX = (index: number) => WORDMARK.x + index * WORDMARK.advance
