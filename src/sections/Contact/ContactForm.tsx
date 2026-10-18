import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { CONTACT } from '../../data/contact'
import { Button } from '../../components/Button/Button'
import { fadeUp, revealProps } from '../../motion/variants'
import { FormField } from './FormField'
import styles from './ContactForm.module.css'

function buildMailto(data: FormData) {
  const field = (name: string) => String(data.get(name) ?? '').trim()
  const company = field('company')
  const subject = `Novo projeto — ${field('name')}${company ? ` (${company})` : ''}`
  const body = `${field('message')}\n\n${field('name')}\n${field('email')}`
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = buildMailto(new FormData(event.currentTarget))
    setSent(true)
  }

  return (
    <motion.form
      className={styles.form}
      onSubmit={handleSubmit}
      aria-label="Formulário de contato"
      variants={fadeUp}
      {...revealProps(1)}
    >
      <div className={styles.row}>
        <FormField label="Nome" name="name" autoComplete="name" required />
        <FormField label="E-mail" name="email" type="email" autoComplete="email" required />
      </div>
      <FormField label="Empresa" name="company" autoComplete="organization" />
      <FormField label="Como podemos ajudar?" name="message" multiline required />
      <Button type="submit" className={styles.submit}>Enviar mensagem</Button>
      <p className={styles.status} role="status">
        {sent && 'Abrimos o seu app de e-mail com a mensagem pronta. É só enviar!'}
      </p>
    </motion.form>
  )
}
