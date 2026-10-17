import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { NavItem } from '../../data/navigation'
import { MenuIcon } from '../../components/icons/MenuIcon'
import { NavLinks } from './NavLinks'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  items: readonly NavItem[]
  activeHref: string
}

export function MobileMenu({ items, activeHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className={styles.root}>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <MenuIcon open={open} className={styles.icon} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id={panelId}
            className={styles.panel}
            aria-label="Menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <NavLinks
              items={items}
              activeHref={activeHref}
              className={styles.list}
              linkClassName={styles.link}
              onNavigate={() => setOpen(false)}
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
