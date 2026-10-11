import './services-page.css'

/**
 * Services Page Component
 * Buna Burji Hotel - Amaro Kelle
 * 
 * Comprehensive information about hotel services and amenities
 * designed to enhance guest comfort and convenience.
 */

export default function Services() {
  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="services-page-header">
        <div className="container-lg">
          <h1>Hotel Services & Amenities</h1>
          <p>Designed for Your Comfort and Convenience</p>
        </div>
      </section>

      {/* Services Content */}
      <section className="container-lg services-content">
        
        {/* Comfortable Accommodation */}
        <div className="service-detail">
          <div className="service-detail-header">
                <i className="bi bi-house-fill icon-standard"></i>
            <h2>Comfortable Accommodation</h2>
          </div>
          <p>Our rooms are thoughtfully designed to provide a peaceful retreat after a day of exploration or business. Each room features:</p>
          <ul>
            <li>Quality bedding for restful sleep</li>
            <li>Modern bathroom facilities</li>
            <li>Clean, well-maintained surroundings</li>
            <li>Comfortable seating areas</li>
            <li>Adequate storage and workspace</li>
            <li>Pleasant natural lighting</li>
          </ul>
        </div>

        {/* Dining Experience */}
        <div className="service-detail">
          <div className="service-detail-header">
              <i className="bi bi-cup-hot-fill icon-standard"></i>
            <h2>Dining Experience</h2>
          </div>
          <p>We believe hospitality begins with welcoming guests to our dining spaces. Enjoy quality meals in a warm, inviting environment where our team is dedicated to ensuring your satisfaction.</p>
          <ul>
            <li>Professional and attentive service</li>
            <li>Thoughtfully prepared meals</li>
            <li>Clean and well-maintained dining area</li>
            <li>Welcoming atmosphere</li>
            <li>Quality food preparation</li>
            <li>Reasonable hours of service</li>
          </ul>
        </div>

        {/* High-Speed Internet */}
        <div className="service-detail">
          <div className="service-detail-header">
              <i className="bi bi-wifi icon-standard"></i>
            <h2>High-Speed Internet</h2>
          </div>
          <p>Stay connected during your stay with complimentary WiFi throughout the hotel. Whether you need to catch up on work, stay in touch with family, or browse the web, our internet service keeps you connected.</p>
          <ul>
            <li>Free WiFi in all rooms</li>
            <li>Free WiFi in common areas</li>
            <li>Reliable connectivity</li>
            <li>Fast speeds for browsing and streaming</li>
            <li>Easy connection process</li>
            <li>Support available if needed</li>
          </ul>
        </div>

        {/* Guest Assistance */}
        <div className="service-detail">
          <div className="service-detail-header">
              <i className="bi bi-headset icon-standard"></i>
            <h2>Guest Assistance</h2>
          </div>
          <p>Our dedicated team is always available to help make your stay more enjoyable. From recommendations about local attractions to assistance with special requests, we're here to support you.</p>
          <ul>
            <li>Local area recommendations</li>
            <li>Directions and travel assistance</li>
            <li>Special requests and accommodations</li>
            <li>Helpful information about Amaro Kelle</li>
            <li>Professional and courteous staff</li>
            <li>Prompt response to inquiries</li>
          </ul>
        </div>

        {/* Convenient Location */}
        <div className="service-detail">
          <div className="service-detail-header">
              <i className="bi bi-geo-alt-fill icon-standard"></i>
            <h2>Convenient Location</h2>
          </div>
          <p>Buna Burji Hotel is centrally located in Amaro Kelle, providing easy access to the city's key attractions, services, and transportation options.</p>
          <ul>
            <li>Central location in Amaro Kelle</li>
            <li>Easy access to local attractions</li>
            <li>Close proximity to essential services</li>
            <li>Good transportation connections</li>
            <li>Walkable to local shops and restaurants</li>
            <li>Safe and welcoming neighborhood</li>
          </ul>
        </div>

        {/* Authentic Hospitality */}
        <div className="service-detail">
          <div className="service-detail-header">
              <i className="bi bi-heart-fill icon-standard"></i>
            <h2>Authentic Hospitality</h2>
          </div>
          <p>Above all, we are committed to providing genuine Ethiopian hospitality. We believe in treating every guest with warmth, respect, and genuine care, making you feel valued and at home.</p>
          <ul>
            <li>Warm and welcoming atmosphere</li>
            <li>Genuine care for guest comfort</li>
            <li>Respectful and attentive service</li>
            <li>Understanding of guest needs</li>
            <li>Professional yet personal approach</li>
            <li>Commitment to guest satisfaction</li>
          </ul>
        </div>

      </section>

      {/* Contact Section */}
      <section className="services-contact-section">
        <div className="container-lg">
          <div className="contact-content">
            <h2>Questions About Our Services?</h2>
            <p>Feel free to reach out to us with any questions about our amenities or services. We're here to help!</p>
            <a href="mailto:info@bunaburji.com" className="btn-service-contact">
                <i className="bi bi-envelope-fill icon-standard"></i>
              Send us an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
