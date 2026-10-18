import type { AnchorHTMLAttributes } from 'react'
import { buttonClassName, type ButtonStyleProps } from './buttonClassName'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonStyleProps {
  href: string
}

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <a className={buttonClassName({ variant, size }, className)} {...props} />
}
