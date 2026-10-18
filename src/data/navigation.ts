export interface NavItem {
  label: string
  href: string
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Cases', href: '#cases' },
  { label: 'Contato', href: '#contato' },
]

export const CONTACT_HREF = '#contato'
