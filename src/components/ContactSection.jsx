import { useState } from 'react'
import { submitContactMessage } from '../services/contactService'
import '../styles/contact-section.css'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formError, setFormError] = useState('')
  const [formSuccess, setFormSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormError('')
    setFormSuccess('')

    if (!formData.fullName.trim()) {
      setFormError('Please enter your full name.')
      return
    }

    if (!validateEmail(formData.email)) {
      setFormError('Please provide a valid email address.')
      return
    }

    if (!formData.phone.trim()) {
      setFormError('Please enter your phone number.')
      return
    }

    if (!formData.message.trim()) {
      setFormError('Please enter your message.')
      return
    }

    setIsSubmitting(true)
    const result = await submitContactMessage(formData)
    setIsSubmitting(false)

    if (result.success) {
      setFormSuccess('Thank you! Your message has been received. Our team at Buna Burji Hotel will contact you shortly.')
      setFormData({ fullName: '', email: '', phone: '', message: '' })
    } else {
      setFormError(result.error || 'Failed to submit message. Please try again or call us directly.')
    }
  }

  return (
    <section className="contact-section">
      <div className="container-lg contact-wrapper">
        <div className="contact-info-card">
          <p className="section-label">
            <i className="bi bi-geo-alt-fill icon-standard"></i> CONTACT & LOCATION
          </p>
          <h2>Contact Buna Burji Hotel</h2>
          <p className="contact-intro">
            Contact the hotel directly for accommodation information, room inquiries, services, and general questions.
            Our team in Amaro Kelle is ready to assist with every guest request.
          </p>

          <div className="contact-details-grid">
            <div className="contact-detail-item">
              <i className="bi bi-geo-alt icon-standard"></i>
              <div>
                <p className="detail-title">Location</p>
                <p>Amaro Kelle</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <i className="bi bi-telephone-fill icon-standard"></i>
              <div>
                <p className="detail-title">Phone</p>
                <p>Phone number to be provided</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <i className="bi bi-envelope-fill icon-standard"></i>
              <div>
                <p className="detail-title">Email</p>
                <p>Email address to be provided</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <i className="bi bi-headset icon-standard"></i>
              <div>
                <p className="detail-title">Reception / Guest Support</p>
                <p>Reception & guest assistance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="form-header">
            <h3>Send a Message</h3>
            <p>Complete the form below and our team at Buna Burji Hotel will respond promptly.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {formError && <div className="form-message form-error">{formError}</div>}
            {formSuccess && <div className="form-message form-success">{formSuccess}</div>}

            <div className="form-row">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending Message...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

            <div className="map-placeholder">
            <div className="map-label">
              <i className="bi bi-map-fill icon-standard"></i> Buna Burji Hotel — Amaro Kelle
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
