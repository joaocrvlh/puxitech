export type FeatureVisualName = 'chat' | 'progress' | 'support'

export interface Feature {
  eyebrow: string
  title: string
  description: string
  visual: FeatureVisualName
}

export const FEATURES: readonly Feature[] = [
  {
    eyebrow: 'Simples e direto',
    title: 'Sem burocracia e sem jargão técnico',
    description: 'Você conversa direto com quem desenvolve. Explicamos cada decisão de um jeito claro, sem intermediários.',
    visual: 'chat',
  },
  {
    eyebrow: 'Transparência',
    title: 'Você acompanha tudo de perto',
    description: 'Atualizações frequentes e acesso ao que está sendo construído, para você ver o projeto ganhar forma do começo ao fim.',
    visual: 'progress',
  },
  {
    eyebrow: 'Parceria contínua',
    title: 'Suporte de verdade depois do lançamento',
    description: 'Seguimos juntos com monitoramento, melhorias e atendimento próximo para o seu produto nunca parar.',
    visual: 'support',
  },
]
