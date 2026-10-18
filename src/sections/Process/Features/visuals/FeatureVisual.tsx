import type { ComponentType } from 'react'
import type { FeatureVisualName } from '../../../../data/features'
import { ChatVisual } from './ChatVisual'
import { ProgressVisual } from './ProgressVisual'
import { SupportVisual } from './SupportVisual'

const VISUALS = {
  chat: ChatVisual,
  progress: ProgressVisual,
  support: SupportVisual,
} satisfies Record<FeatureVisualName, ComponentType>

interface FeatureVisualProps {
  name: FeatureVisualName
}

export function FeatureVisual({ name }: FeatureVisualProps) {
  const Visual = VISUALS[name]
  return (
    <div aria-hidden="true">
      <Visual />
    </div>
  )
}
