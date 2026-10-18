import { motion } from 'motion/react'
import type { Stat } from '../../data/statement'
import { fadeUp, revealProps } from '../../motion/variants'
import { StatIcon } from './StatIcon'
import { CountUp } from './CountUp'
import styles from './StatItem.module.css'

interface StatItemProps {
  stat: Stat
  index: number
}

export function StatItem({ stat, index }: StatItemProps) {
  return (
    <motion.li className={styles.stat} variants={fadeUp} {...revealProps(index)}>
      <StatIcon name={stat.icon} className={styles.icon} />
      <p className={styles.value}>
        {typeof stat.value === 'number' ? <CountUp value={stat.value} suffix={stat.suffix} /> : stat.value}
      </p>
      <p className={styles.label}>{stat.label}</p>
    </motion.li>
  )
}
