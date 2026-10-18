export interface CaseStudy {
  title: string
  sector: string
  description: string
  image: string
  alt: string
  stack: readonly string[]
}

export const CASES: readonly CaseStudy[] = [
  {
    title: 'Plataforma de agendamento online',
    sector: 'Saúde',
    description: 'Sistema web para clínicas gerenciarem consultas, prontuários e lembretes automáticos para pacientes.',
    image: '/cases/agendamento.svg',
    alt: 'Tela do painel de agendamentos com calendário e lista de consultas',
    stack: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'App de pedidos para o comércio local',
    sector: 'Varejo',
    description: 'Aplicativo com catálogo, pagamento via Pix e acompanhamento da entrega em tempo real.',
    image: '/cases/pedidos.svg',
    alt: 'Telas do aplicativo de pedidos em um celular',
    stack: ['React Native', 'NestJS', 'AWS'],
  },
  {
    title: 'Painel de gestão para cooperativas',
    sector: 'Agronegócio',
    description: 'Indicadores de produção, estoque e logística em um painel que funciona até sem internet no campo.',
    image: '/cases/cooperativa.svg',
    alt: 'Painel com gráficos de produção e estoque',
    stack: ['Next.js', 'Python', 'Docker'],
  },
  {
    title: 'Portal do aluno',
    sector: 'Educação',
    description: 'Notas, frequência e comunicados da escola reunidos em um portal simples para alunos e famílias.',
    image: '/cases/escola.svg',
    alt: 'Tela do portal do aluno com notas e comunicados',
    stack: ['React', 'NestJS', 'MongoDB'],
  },
  {
    title: 'Site institucional com orçamento online',
    sector: 'Serviços',
    description: 'Site rápido e otimizado para buscas, com formulário de orçamento integrado ao WhatsApp.',
    image: '/cases/institucional.svg',
    alt: 'Página inicial de um site institucional',
    stack: ['Next.js', 'Vercel'],
  },
]
