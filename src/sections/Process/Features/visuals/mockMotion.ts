import type { Variants } from 'motion/react'
import { EASE_OUT } from '../../../../motion/variants'

export const mockContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

export const mockItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
}

export const mockProps = {
  variants: mockContainer,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: false, amount: 0.4 },
} as const
