import type { SVGProps } from 'react'

interface ChevronIconProps extends SVGProps<SVGSVGElement> {
  direction: 'left' | 'right'
}

export function ChevronIcon({ direction, ...props }: ChevronIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      <path d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
    </svg>
  )
}
