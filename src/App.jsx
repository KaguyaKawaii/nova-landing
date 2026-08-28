import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import LogoCloud from './components/LogoCloud.jsx'
import Features from './components/Features.jsx'
import DashboardShowcase from './components/DashboardShowcase.jsx'
import AIShowcase from './components/AIShowcase.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Integrations from './components/Integrations.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <DashboardShowcase />
        <AIShowcase />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
