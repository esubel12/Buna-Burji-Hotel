import { Link } from 'react-router-dom'
import { heroImage } from '../assets'
import '../styles/about.css'

/**
 * About Page Component
 * Buna Burji Hotel - Amaro Kelle
 *
 * Dedicated About page for hotel overview, values, and contact CTA.
 */

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-hero-content">
                <p className="about-hero-label">
                  <i className="bi bi-building icon-standard"></i>
                  About Buna Burji Hotel
                </p>
                <h4 className="about-hero-title">A warm welcome in Amaro Kelle</h4>
                <p className="about-hero-subtitle">
                  Buna Burji Hotel is thoughtfully designed for guests seeking comfortable accommodation, attentive hospitality, and a calm stay in the heart of Amaro Kelle.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-hero-image">
                <img src={heroImage} alt="Buna Burji Hotel lobby and hospitality atmosphere" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>About Buna Burji Hotel</h2>
            <p>
              Located in Amaro Kelle, Buna Burji Hotel is focused on creating a welcoming stay for every guest. We emphasize comfortable accommodation, warm hospitality, and a calm environment designed for a relaxed and pleasant visit.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values container">
        <div className="about-values-grid">
          <div className="about-value-column">
            <div className="about-value-card">
              <span className="about-value-icon">
                <i className="bi bi-door-open icon-standard"></i>
              </span>
              <div>
                <p className="about-value-title">Comfort</p>
                <p className="about-value-text">
                  Our guest rooms and public spaces are crafted for restful comfort and simplicity, supporting a peaceful stay in Amaro Kelle.
                </p>
              </div>
            </div>
          </div>
          <div className="about-value-column">
            <div className="about-value-card">
              <span className="about-value-icon">
                <i className="bi bi-people icon-standard"></i>
              </span>
              <div>
                <p className="about-value-title">Hospitality</p>
                <p className="about-value-text">
                  Our approach is guest-centered and attentive, welcoming every visitor with thoughtful service and a warm atmosphere.
                </p>
              </div>
            </div>
          </div>
          <div className="about-value-column">
            <div className="about-value-card">
              <span className="about-value-icon">
                <i className="bi bi-sun icon-standard"></i>
              </span>
              <div>
                <p className="about-value-title">Cleanliness</p>
                <p className="about-value-text">
                  We maintain clean, inviting spaces so guests can feel confident and refreshed throughout their stay.
                </p>
              </div>
            </div>
          </div>
          <div className="about-value-column">
            <div className="about-value-card">
              <span className="about-value-icon">
                <i className="bi bi-hand-thumbs-up icon-standard"></i>
              </span>
              <div>
                <p className="about-value-title">Guest Care</p>
                <p className="about-value-text">
                  Every detail is handled with care, ensuring each visitor receives attentive support and a seamless experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta container">
        <div className="about-cta-card">
          <div className="about-cta-copy">
            <h3>Contact Us</h3>
            <p>
              If you have questions about accommodation, room details, or services, contact Buna Burji Hotel directly and we will respond with attentive support.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary about-cta-action">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
