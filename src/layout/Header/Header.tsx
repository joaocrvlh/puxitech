import { motion } from 'motion/react'
import { CONTACT_HREF, NAV_ITEMS } from '../../data/navigation'
import { LogoMark } from '../../components/Logo/LogoMark'
import { ButtonLink } from '../../components/ButtonLink/ButtonLink'
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle'
import { MainNav } from './MainNav'
import { MobileMenu } from './MobileMenu'
import { useActiveHash } from './useActiveHash'
import styles from './Header.module.css'

const HOME_HREF = NAV_ITEMS[0].href

export function Header() {
  const activeHref = useActiveHash(HOME_HREF)

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
    >
      <a href={HOME_HREF} className={styles.brand} aria-label="PuxiTech — página inicial">
        <LogoMark className={styles.logo} decorative iconOnly />
      </a>

      <MainNav items={NAV_ITEMS} activeHref={activeHref} />

      <div className={styles.actions}>
        <ThemeToggle />
        <ButtonLink href={CONTACT_HREF} size="sm" className={styles.cta}>
          Vamos conversar
        </ButtonLink>
        <MobileMenu items={NAV_ITEMS} activeHref={activeHref} />
      </div>
    </motion.header>
  )
}
