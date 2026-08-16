import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Schedule from './components/Schedule'
import Categories from './components/Categories'
import Events from './components/Events'
import Registration from './components/Registration'
import Prizes from './components/Prizes'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="schedule"><Schedule /></section>
        <section id="categories"><Categories /></section>
        <section id="events"><Events /></section>
        <section id="register"><Registration /></section>
        <section id="prizes"><Prizes /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <FloatingCTA />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}
