import { Link } from 'react-router-dom'
import { hotelLogo } from '../assets'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navy sticky-top">
      <div className="container-fluid">
        {/* Logo/Brand */}
        <Link className="navbar-brand" to="/">
          <div className="brand-logo">
            <img src={hotelLogo} alt="Buna Burji Hotel logo" />
          </div>
          <div className="brand-copy">
            <div className="brand-text">
              <span className="brand-name">Buna Burji</span>
              <span className="brand-name-accent">Hotel</span>
            </div>
            <div className="brand-location">Amaro Kelle</div>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rooms">
                Rooms & Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-contact" to="/contact">
                <i className="bi bi-telephone-fill nav-link-icon"></i>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
