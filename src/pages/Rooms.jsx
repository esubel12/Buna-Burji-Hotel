import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getRooms, DEFAULT_ROOMS } from '../services/roomService'
import { heroImage, standardBedFallback, getAssetUrl } from '../assets'
import SafeImage from '../components/SafeImage'
import '../styles/rooms.css'

export default function Rooms() {
  const [rooms, setRooms] = useState(DEFAULT_ROOMS)

  useEffect(() => {
    let isMounted = true
    getRooms().then((data) => {
      if (isMounted) {
        setRooms(data)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="rooms-page">
      <section className="rooms-hero">
        <div className="container-lg rooms-hero-grid">
          <div className="rooms-hero-copy">
            <p className="rooms-hero-eyebrow">Our Rooms</p>
            <h1 className="rooms-hero-title">Comfortable accommodation at Buna Burji Hotel in Amaro Kelle.</h1>
            <p className="rooms-hero-text">
              Explore our thoughtfully presented guestrooms, each designed with quiet comfort, elegant details, and a warm Amaro Kelle welcome. For accommodation information, please contact Buna Burji Hotel directly.
            </p>
            <Link to="/contact" className="btn rooms-hero-button">
              Contact Us
            </Link>
          </div>

          <div className="rooms-hero-image-wrapper">
            <SafeImage
              src={heroImage}
              alt="Buna Burji Hotel guest room and hospitality atmosphere"
              className="rooms-hero-image"
            />
          </div>
        </div>
      </section>

      <section className="rooms-list container-lg">
        <div className="rooms-grid">
          {rooms.map((room) => (
            <article key={room.id} className="room-card">
              <div className="room-card-image-wrapper">
                <SafeImage
                  src={getAssetUrl(room.image_url)}
                  fallback={standardBedFallback}
                  alt={room.imageAlt || `Buna Burji Hotel ${room.name}`}
                  className="room-card-image"
                />
              </div>

              <div className="room-card-body">
                <div className="room-card-icon">
                  <i className={`bi ${room.icon || 'bi-bed-fill'}`}></i>
                </div>
                <h2 className="room-card-title">{room.name}</h2>
                <p className="room-card-copy">{room.description}</p>

                <ul className="room-card-features">
                  {(room.features || []).map((feature, index) => (
                    <li key={index} className="room-card-feature">
                      <i className="bi bi-check-circle-fill icon-standard"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn btn-room-contact">
                  Contact Us
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rooms-contact-invite">
        <div className="container-lg rooms-contact-invite-inner">
          <div>
            <p className="rooms-contact-eyebrow">Interested in staying with us?</p>
            <h2>Contact Buna Burji Hotel directly for accommodation information.</h2>
          </div>
          <Link to="/contact" className="btn btn-rooms-contact">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
