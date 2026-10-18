import { motion } from 'motion/react'
import { mockItem, mockProps } from './mockMotion'
import mock from './mock.module.css'
import styles from './ChatVisual.module.css'

const MESSAGES = [
  { from: 'client', text: 'Oi! Dá para incluir lembrete por WhatsApp?' },
  { from: 'team', text: 'Dá sim! Já incluímos no planejamento.' },
  { from: 'client', text: 'Perfeito, obrigado pela agilidade!' },
] as const

export function ChatVisual() {
  return (
    <motion.div className={mock.mock} {...mockProps}>
      <motion.div className={mock.card} variants={mockItem}>
        <div className={mock.cardHeader}>
          <p className={mock.cardTitle}>Conversa com a equipe</p>
          <span className={mock.pill}>online</span>
        </div>
        <div className={styles.messages}>
          {MESSAGES.map((message) => (
            <motion.p
              key={message.text}
              className={message.from === 'team' ? styles.team : styles.client}
              variants={mockItem}
            >
              {message.text}
            </motion.p>
          ))}
          <motion.span className={styles.typing} variants={mockItem}>
            <span />
            <span />
            <span />
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  )
}
