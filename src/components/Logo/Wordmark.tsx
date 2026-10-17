import type { ReactNode } from 'react'
import { LOGO_COLOR, WORDMARK } from './geometry'

interface WordmarkProps {
  children: ReactNode
}

export function Wordmark({ children }: WordmarkProps) {
  return (
    <g
      style={{ fill: LOGO_COLOR.green }}
      fontFamily={WORDMARK.fontFamily}
      fontWeight={WORDMARK.fontWeight}
      fontSize={WORDMARK.fontSize}
    >
      {children}
    </g>
  )
}
