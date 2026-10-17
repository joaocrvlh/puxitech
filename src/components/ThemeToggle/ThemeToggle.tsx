import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from '../../theme/useTheme'
import { SunIcon } from '../icons/SunIcon'
import { MoonIcon } from '../icons/MoonIcon'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Ativar modo claro' : 'Ativar modo escuro'

  return (
    <button type="button" className={styles.toggle} onClick={toggleTheme} aria-label={label} title={label}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className={styles.icon}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
