import type { BranchKey } from '../components/Logo/geometry'
import type { ServiceIconName } from '../components/icons/ServiceIcon'

export interface Service {
  title: string
  description: string
  icon: ServiceIconName
  branch: BranchKey
}

export const SERVICES: readonly Service[] = [
  {
    title: 'Sistemas web e plataformas sob medida',
    description: 'Arquitetura e desenvolvimento de sistemas e plataformas sob medida, com foco em alta performance e escalabilidade estruturada.',
    icon: 'web',
    branch: 'green',
  },
  {
    title: 'Inteligência artificial e machine learning',
    description: 'Integramos modelos de IA e machine learning para automatizar processos complexos, gerar insights e criar produtos mais inteligentes.',
    icon: 'ai',
    branch: 'navy',
  },
  {
    title: 'Aplicativos e produtos SaaS',
    description: 'Da ideia ao lançamento: idealizamos, desenhamos, desenvolvemos e lançamos aplicativos e soluções próprias para os mercados B2B e B2C.',
    icon: 'product',
    branch: 'brown',
  },
]
