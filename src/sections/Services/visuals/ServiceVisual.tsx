import type { ServiceIconName } from '../../../components/icons/ServiceIcon'
import { AiVisual } from './AiVisual'
import { ProductVisual } from './ProductVisual'
import { WebVisual } from './WebVisual'

const VISUALS: Record<ServiceIconName, () => React.JSX.Element> = {
  web: WebVisual,
  ai: AiVisual,
  product: ProductVisual,
}

export function ServiceVisual({ name }: { name: ServiceIconName }) {
  const Visual = VISUALS[name]
  return <Visual />
}
