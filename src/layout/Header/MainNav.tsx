import type { NavItem } from '../../data/navigation'
import { NavLinks } from './NavLinks'
import styles from './MainNav.module.css'

interface MainNavProps {
  items: readonly NavItem[]
  activeHref: string
}

export function MainNav({ items, activeHref }: MainNavProps) {
  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      <NavLinks items={items} activeHref={activeHref} className={styles.list} linkClassName={styles.link} />
    </nav>
  )
}
