import { Link } from 'react-router-dom'
import '../styles/footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="hotel-footer">
      <div className="container-fluid footer-content">
        <div className="footer-brand-card">
          <div className="footer-logo-wrap">
            <img src="/logo.jpg" alt="Buna Burji Hotel logo" />
          </div>
          <div className="footer-brand-copy">
            <h3>Buna Burji Hotel</h3>
            <p className="footer-location">Amaro Kelle</p>
            <p className="footer-description">
              Welcoming guests with comfort, attentive hospitality, and a warm stay in Amaro Kelle.
              Buna Burji Hotel is your elegant home base for every travel need.
            </p>
          </div>
        </div>

        <div className="footer-links-card">
          <p className="footer-section-label">Explore</p>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-contact-card">
          <p className="footer-section-label">Contact</p>
          <div className="footer-contact-item">
            <i className="bi bi-geo-alt-fill icon-standard"></i>
            <div>
              <p>Amaro Kelle</p>
            </div>
          </div>
          <div className="footer-contact-item">
            <i className="bi bi-telephone-fill icon-standard"></i>
            <div>
              <p>Phone number to be provided</p>
            </div>
          </div>
          <div className="footer-contact-item">
            <i className="bi bi-envelope-fill icon-standard"></i>
            <div>
              <p>Email address to be provided</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>© {currentYear} Buna Burji Hotel. All rights reserved.</p>
      </div>
    </footer>
  )
}
