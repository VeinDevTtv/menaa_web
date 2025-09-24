import Hero from './components/Hero'
import About from './components/About'
import Links from './components/Links'
import Events from './components/Events'
import QRSection from './components/QRSection'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <DarkModeToggle />
      <Hero />
      <About />
      <Links />
      <Events />
      <QRSection />
      <Footer />
    </div>
  )
}

export default App