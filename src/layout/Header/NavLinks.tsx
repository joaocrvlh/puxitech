import type { NavItem } from '../../data/navigation'

interface NavLinksProps {
  items: readonly NavItem[]
  activeHref: string
  className?: string
  linkClassName?: string
  onNavigate?: () => void
}

export function NavLinks({ items, activeHref, className, linkClassName, onNavigate }: NavLinksProps) {
  return (
    <ul role="list" className={className}>
      {items.map(({ label, href }) => (
        <li key={href}>
          <a
            href={href}
            className={linkClassName}
            aria-current={href === activeHref ? 'true' : undefined}
            onClick={onNavigate}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}
