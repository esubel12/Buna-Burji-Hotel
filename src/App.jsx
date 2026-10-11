import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'

/**
 * Main App Component
 * Root component for Buna Burji Hotel website
 * Location: Amaro Kelle
 *
 * Routes:
 * - /          Home (Navbar + Hero)
 * - /about     About Us
 * - /rooms     Rooms & Services
 * - /services  Services & Amenities
 * - /contact   Contact Us
 */

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app-container">
        {/* Navbar appears on all pages */}
        <Navbar />
        
        {/* Page Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}
