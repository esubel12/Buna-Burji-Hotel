import { Link } from 'react-router-dom'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Background overlay */}
      <div className="hero-background"></div>

      {/* Hero content */}
      <div className="hero-content container">
        <div className="row align-items-center h-100">
          <div className="col-lg-8 col-md-10 mx-auto text-center hero-text-wrapper">
            <img src="/logo.jpg" alt="Buna Burji Hotel logo" className="hero-logo" />
            <p className="hero-location">Amaro Kelle</p>
            <h2 className="hero-subtitle">
              Experience Comfort and Hospitality
            </h2>
            <p className="hero-description">
              Welcome to our premium destination hotel, where traditional warmth meets modern comfort in the heart of Amaro Kelle.
            </p>

            {/* Call-to-action buttons */}
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <i className="bi bi-telephone-fill icon-standard"></i> Contact Us
              </Link>
              <Link to="/rooms" className="btn btn-secondary btn-lg">
                <i className="bi bi-door-open icon-standard"></i> Explore Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative accent */}
      <div className="hero-accent"></div>
    </section>
  )
}
