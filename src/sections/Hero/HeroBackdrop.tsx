import styles from './HeroBackdrop.module.css'

export function HeroBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.waters} />
    </div>
  )
}
