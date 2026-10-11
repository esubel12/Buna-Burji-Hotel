import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getRooms, DEFAULT_ROOMS } from '../services/roomService'
import '../styles/rooms-section.css'

export default function RoomsSection() {
  const [accommodations, setAccommodations] = useState(DEFAULT_ROOMS)

  useEffect(() => {
    let isMounted = true
    getRooms().then((data) => {
      if (isMounted) setAccommodations(data)
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="rooms-section">
      {/* Section Introduction */}
      <div className="rooms-intro">
        <div className="container-lg">
          <p className="section-label">
            <i className="bi bi-door-closed icon-standard"></i> OUR ROOMS
          </p>
          <h2 className="section-heading">
            Comfortable Accommodation for Every Stay
          </h2>
          <p className="section-description">
            At Buna Burji Hotel, we believe comfort begins the moment you enter your room. Each accommodation is thoughtfully designed to provide the relaxation and amenities you deserve during your stay in Amaro Kelle.
          </p>
        </div>
      </div>

      {/* Accommodations Grid */}
      <div className="container-lg">
        <div className="rooms-grid">
          {accommodations.map((room) => (
            <div key={room.id} className="room-card">
              {/* Room Image */}
              <div className="room-image-wrapper">
                <img
                  src={room.image_url || '/hero.png'}
                  alt={`Buna Burji Hotel ${room.name}`}
                  className="room-image-photo"
                />
              </div>

              {/* Room Info */}
              <div className="room-info">
                <div className="room-icon">
                  <i className={`bi ${room.icon || 'bi-bed-fill'} icon-standard icon-lg`}></i>
                </div>
                <h3 className="room-name">{room.name}</h3>
                <p className="room-description">{room.description}</p>
                
                {/* Room Features */}
                <ul className="room-features">
                  {(room.features || []).map((feature, idx) => (
                    <li key={idx}>
                      <i className="bi bi-check-circle-fill icon-standard"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View Details Button */}
                <Link to="/rooms" className="btn-view-details">
                  View Details
                  <i className="bi bi-arrow-right icon-standard"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section CTA */}
      <div className="rooms-cta">
        <div className="container-lg">
          <div className="cta-content">
            <p>Ready to experience comfort and hospitality?</p>
            <Link to="/contact" className="btn-contact-cta">
              Get in Touch with Us
              <i className="bi bi-telephone-fill icon-standard"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
