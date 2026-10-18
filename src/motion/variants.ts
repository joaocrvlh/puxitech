import type { Variants } from 'motion/react'

export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export const IN_VIEW = { once: true, margin: '0px 0px -12% 0px' } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.7, ease: EASE_OUT },
  }),
}

export const revealProps = (index = 0) => ({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: IN_VIEW,
  custom: index,
})
