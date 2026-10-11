import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import RoomsSection from '../components/RoomsSection'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'

/**
 * Home Page Component
 * Buna Burji Hotel - Amaro Kelle
 * 
 * This page includes:
 * - Hero section (Navbar is rendered in App.jsx for all pages)
 * - About section
 * - Rooms section
 * - Services section
 * - Contact section
 * - Future sections will be added in subsequent steps
 */

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <AboutSection />
      <RoomsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}
