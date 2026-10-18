import type { SVGProps } from 'react'

export type ServiceIconName = 'web' | 'ai' | 'product'

const PATHS: Record<ServiceIconName, string> = {
  web: 'M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01M8 13l-2 2 2 2M16 13l2 2-2 2',
  ai: 'M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM9.5 15l1.5-6h2l1.5 6M10 13h4',
  product: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5',
}

interface ServiceIconProps extends SVGProps<SVGSVGElement> {
  name: ServiceIconName
}

export function ServiceIcon({ name, ...props }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
