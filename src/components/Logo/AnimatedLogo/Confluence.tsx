import { motion } from 'motion/react'
import { BRANCHES, LOGO_COLOR } from '../geometry'
import { popIn } from './motionPresets'

const { cx, cy, r } = BRANCHES.brown.dot

interface ConfluenceProps {
  delay: number
}

export function Confluence({ delay }: ConfluenceProps) {
  return <motion.circle cx={cx} cy={cy} r={r} style={{ fill: LOGO_COLOR.brown }} {...popIn(delay)} />
}
