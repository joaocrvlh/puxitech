import { useEffect, useRef, type KeyboardEvent, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CASES } from '../../data/cases'
import { EASE_OUT } from '../../motion/variants'
import { ChevronIcon } from '../../components/icons/ChevronIcon'
import { CloseIcon } from '../../components/icons/CloseIcon'
import { CaseDetails } from './CaseDetails'
import styles from './CaseLightbox.module.css'

const TITLE_ID = 'case-lightbox-title'

interface CaseLightboxProps {
  index: number | null
  onClose: () => void
  onNavigate: (step: number) => void
}

export function CaseLightbox({ index, onClose, onNavigate }: CaseLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const study = index === null ? null : CASES[index]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (study && !dialog.open) dialog.showModal()
    if (!study && dialog.open) dialog.close()
  }, [study])

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowLeft') onNavigate(-1)
    if (event.key === 'ArrowRight') onNavigate(1)
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={TITLE_ID}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
    >
      {study && index !== null && (
        <div className={styles.frame}>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
            <CloseIcon />
          </button>

          <div className={styles.media}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={study.image}
                className={styles.image}
                src={study.image}
                alt={study.alt}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
              />
            </AnimatePresence>
            <button type="button" className={`${styles.nav} ${styles.prev}`} onClick={() => onNavigate(-1)} aria-label="Projeto anterior">
              <ChevronIcon direction="left" />
            </button>
            <button type="button" className={`${styles.nav} ${styles.next}`} onClick={() => onNavigate(1)} aria-label="Próximo projeto">
              <ChevronIcon direction="right" />
            </button>
          </div>

          <CaseDetails study={study} titleId={TITLE_ID} position={index + 1} total={CASES.length} />
        </div>
      )}
    </dialog>
  )
}
