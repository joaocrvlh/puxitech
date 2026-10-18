export type ProcessIconName = 'plan' | 'code' | 'launch'

export interface ProcessStep {
  title: string
  description: string
  icon: ProcessIconName
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: 'Planejamento',
    description: 'Entendemos o seu negócio, os objetivos e as pessoas, e definimos juntos a melhor solução.',
    icon: 'plan',
  },
  {
    title: 'Desenvolvimento',
    description: 'Construímos a solução com testes e revisão em cada etapa, e você acompanha a evolução de perto.',
    icon: 'code',
  },
  {
    title: 'Lançamento',
    description: 'Publicamos, monitoramos e seguimos evoluindo o produto junto com você.',
    icon: 'launch',
  },
]
