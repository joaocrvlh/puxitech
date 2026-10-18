import { NAV_ITEMS } from '../../data/navigation'
import { CONTACT } from '../../data/contact'
import { LogoMark } from '../../components/Logo/LogoMark'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <LogoMark className={styles.logo} />
        <p className={styles.tagline}>Software sob medida, feito no encontro das águas.</p>
      </div>

      <nav aria-label="Rodapé">
        <ul role="list" className={styles.links}>
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <p className={styles.legal}>
        © {year} PuxiTech · {CONTACT.location}
      </p>
    </footer>
  )
}
