import { motion } from 'motion/react'
import { STROKE_WIDTH } from '../geometry'
import { drawPath } from './motionPresets'

interface BranchPathProps {
  d: string
  color: string
  delay: number
  duration: number
}

export function BranchPath({ d, color, delay, duration }: BranchPathProps) {
  return <motion.path d={d} strokeWidth={STROKE_WIDTH} style={{ stroke: color }} {...drawPath(delay, duration)} />
}
