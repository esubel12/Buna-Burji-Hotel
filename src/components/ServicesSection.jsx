import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getHotelServices, DEFAULT_SERVICES } from '../services/servicesService'
import '../styles/services-section.css'

export default function ServicesSection() {
  const [hotelServices, setHotelServices] = useState(DEFAULT_SERVICES)

  useEffect(() => {
    let isMounted = true
    getHotelServices().then((data) => {
      if (isMounted) setHotelServices(data)
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="services-section">
      {/* Section Introduction */}
      <div className="services-intro">
        <div className="container-lg">
          <p className="section-label">
                    <i className="bi bi-star-fill icon-standard"></i> HOTEL SERVICES
                  </p>
          <h2 className="section-heading">
            Services & Hotel Amenities
          </h2>
          <p className="section-description">
            At Buna Burji Hotel in Amaro Kelle, our service offering is crafted to support every guest with comfort, convenience, and genuine hospitality.
          </p>
        </div>
      </div>

      {/* Amenities Grid */}
      <div className="container-lg">
        <div className="services-grid">
          {hotelServices.map((service) => (
            <article key={service.id} className="service-item">
              <div className="service-icon">
                <i className={`bi ${service.icon || 'bi-star-fill'} icon-standard icon-lg`}></i>
              </div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Section CTA */}
      <div className="services-cta">
        <div className="container-lg">
          <div className="cta-content">
            <h3>Discover More About Our Hospitality</h3>
            <p>For questions about our amenities or services, our team is ready to assist your stay in Amaro Kelle.</p>
            <Link to="/contact" className="btn-cta-primary">
              Contact Us
              <i className="bi bi-telephone-fill icon-standard"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
