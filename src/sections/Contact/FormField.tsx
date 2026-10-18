import { useId } from 'react'
import styles from './FormField.module.css'

interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel'
  autoComplete?: string
  required?: boolean
  multiline?: boolean
}

export function FormField({ label, name, type = 'text', autoComplete, required = false, multiline = false }: FormFieldProps) {
  const id = useId()
  const common = { id, name, required, className: styles.control }

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {!required && <span className={styles.optional}> (opcional)</span>}
      </label>
      {multiline ? (
        <textarea {...common} rows={5} />
      ) : (
        <input {...common} type={type} autoComplete={autoComplete} />
      )}
    </div>
  )
}
