import { Link } from 'react-router-dom'
import '../styles/about-section.css'

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container-lg">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Image Column */}
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <div className="about-image">
                <img
                  src="/hero.png"
                  alt="Buna Burji Hotel interior and hospitality atmosphere"
                  className="about-image-photo"
                />
              </div>
              <div className="about-image-accent"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6">
            <div className="about-content">
              <p className="section-label">
                <i className="bi bi-star-fill icon-standard"></i> ABOUT BUNA BURJI HOTEL
              </p>
              
              <h2 className="about-heading">
                A Welcoming Stay in Amaro Kelle
              </h2>

              <p className="about-text">
                Welcome to Buna Burji Hotel, your preferred destination for comfortable accommodation and genuine Ethiopian hospitality. Located in the heart of Amaro Kelle, our hotel combines warm, attentive service with a peaceful, welcoming atmosphere designed to make every guest feel at home.
              </p>

              <p className="about-text">
                At Buna Burji Hotel, we believe that a great stay begins with understanding our guests' needs. Our dedicated team is committed to providing personalized service, ensuring that your visit to Amaro Kelle is not just comfortable, but memorable. Whether you're traveling for business or leisure, we offer the perfect blend of convenience, comfort, and authentic hospitality.
              </p>

              <p className="about-text">
                Experience the warmth of Ethiopian hospitality and the peace of mind that comes with quality accommodation in Amaro Kelle. We look forward to welcoming you.
              </p>

              {/* CTA Button */}
              <div className="about-actions">
                <Link to="/about" className="btn-discover">
                  Discover More About Us
                  <i className="bi bi-arrow-right icon-standard"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
