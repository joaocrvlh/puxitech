import type { Variants } from 'motion/react'
import { EASE_OUT } from '../../../motion/variants'

export const barGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
}

export const barItem: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.6, ease: EASE_OUT } },
}

export const meterFill: Variants = {
  hidden: { width: '0%' },
  visible: (value: number) => ({
    width: `${value}%`,
    transition: { delay: 0.35, duration: 1, ease: EASE_OUT },
  }),
}
