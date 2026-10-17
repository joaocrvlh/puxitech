import { MotionConfig } from 'motion/react'
import { ThemeProvider } from './theme/ThemeProvider'
import { SkipLink } from './components/SkipLink/SkipLink'
import { Header } from './layout/Header/Header'
import { Hero } from './sections/Hero/Hero'

export function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <SkipLink targetId="conteudo" />
        <Header />
        <main id="conteudo" tabIndex={-1}>
          <Hero />
        </main>
      </MotionConfig>
    </ThemeProvider>
  )
}
