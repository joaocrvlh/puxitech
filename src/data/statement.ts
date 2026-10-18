export type StatIconName = 'team' | 'target' | 'clock'

export interface Stat {
  value: number | string
  suffix?: string
  label: string
  icon: StatIconName
}

export const STATEMENT_WORDS: readonly string[] = ['Planejamos', 'Desenvolvemos', 'Simplificamos']

export const STATS: readonly Stat[] = [
  { value: 'Time', label: 'dedicado em todos os projetos', icon: 'team' },
  { value: 100, suffix: '%', label: 'dos projetos feitos sob medida', icon: 'target' },
  { value: 24, suffix: 'h', label: 'para responder o seu contato', icon: 'clock' },
]
