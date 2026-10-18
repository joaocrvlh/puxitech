import { MotionConfig } from 'motion/react'
import { ThemeProvider } from './theme/ThemeProvider'
import { SkipLink } from './components/SkipLink/SkipLink'
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress'
import { Header } from './layout/Header/Header'
import { Footer } from './layout/Footer/Footer'
import { Hero } from './sections/Hero/Hero'
import { Services } from './sections/Services/Services'
import { Statement } from './sections/Statement/Statement'
import { Process } from './sections/Process/Process'
import { Cases } from './sections/Cases/Cases'
import { Contact } from './sections/Contact/Contact'

export function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <SkipLink targetId="conteudo" />
        <ScrollProgress />
        <Header />
        <main id="conteudo" tabIndex={-1}>
          <Hero />
          <Services />
          <Statement />
          <Process />
          <Cases />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </ThemeProvider>
  )
}
