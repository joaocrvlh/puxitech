import type { SVGProps } from 'react'

interface MenuIconProps extends SVGProps<SVGSVGElement> {
  open: boolean
}

export function MenuIcon({ open, ...props }: MenuIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true" focusable="false" {...props}>
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  )
}
