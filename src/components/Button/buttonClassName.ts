import { cx } from '../../utils/cx'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'ghost'
export type ButtonSize = 'md' | 'sm'

export interface ButtonStyleProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function buttonClassName({ variant = 'primary', size = 'md' }: ButtonStyleProps, className?: string) {
  return cx(styles.button, styles[variant], styles[size], className)
}
