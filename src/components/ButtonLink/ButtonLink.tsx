import type { AnchorHTMLAttributes } from 'react'
import styles from './ButtonLink.module.css'

type Variant = 'primary' | 'ghost'
type Size = 'md' | 'sm'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  size?: Size
}

export function ButtonLink({ variant = 'primary', size = 'md', className, ...props }: ButtonLinkProps) {
  const classes = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ')
  return <a className={classes} {...props} />
}
