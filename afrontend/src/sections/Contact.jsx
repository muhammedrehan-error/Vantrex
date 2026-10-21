import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react'
import {GlassCard} from '../components/GlassCard'
import {useReveal} from '../hooks/useReveal'
import { siteInfo } from '../data/siteInfo'
import './Contact.css'

const serviceOptions = [
  { value: 'Web Engineering', label: 'Full-Stack Web Development' },
  { value: 'Landing Page', label: 'High-Converting Landing Page' },
  { value: 'E-Commerce', label: 'E-Commerce Architecture' },
  { value: 'Developer Mentorship', label: 'Tech Training / Mentorship' },
  { value: 'General Consultation', label: 'General Strategic Inquiry' },
]

// Estimator ka type id → form ke dropdown ki value
const serviceByType = {
  landing: 'Landing Page',
  webapp: 'Web Engineering',
  ecommerce: 'E-Commerce',
}

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  service: 'Web Engineering',
  details: '',
}

 export const Contact = ({ estimate }) => {
  const [leftRef, leftVisible] = useReveal()

  // Poora form ek object me: har input ek key
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // 'idle' | 'success'

  const contactCards = [
    { id: 'phone', icon: Phone, label: 'Direct Line', value: siteInfo.phones.join('  •  ') },
    { id: 'mail', icon: Mail, label: 'Electronic Mail', value: siteInfo.email },
    { id: 'pin', icon: MapPin, label: 'Studio Hub', value: siteInfo.location },
  ]

  // Estimator me "Lock In Scope" dabane par form pre-fill karo
  useEffect(() => {
    if (!estimate) return

    const details = [
      'Estimated scope from the Vantrex estimator:',
      `• Architecture: ${estimate.typeName}`,
      `• Modules: ${estimate.modules.length ? estimate.modules.join(', ') : 'None'}`,
      `• Investment: ₹${estimate.total.toLocaleString('en-IN')} (approx.)`,
      `• Timeline: ~${estimate.minDays}-${estimate.maxDays} business days`,
      '',
      'Additional details:',
      '',
    ].join('\n')

    setForm((prev) => ({
      ...prev,
      service: serviceByType[estimate.typeId] ?? prev.service,
      details,
    }))
  }, [estimate]) // estimate badle tabhi chalao

  // Ek hi function sabhi inputs ke liye: input ke `name` se pata chalta hai kaunsi key badalni hai
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault() // page reload mat karo (required/email check browser pehle hi kar chuka hota hai)

    const message = [
      '*New Vantrex Project Brief*',
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.phone.trim() ? `Phone: ${form.phone.trim()}` : '',
      `Classification: ${form.service}`,
      `\nScope:\n${form.details.trim()}`,
    ]
      .filter(Boolean)
      .join('\n')

    const url = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`

    setStatus('success')
    setTimeout(() => window.open(url, '_blank', 'noopener,noreferrer'), 800)
    // TODO (backend phase): yahan WhatsApp ki jagah fetch() se Express API ko data bhejenge
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__layout">
        {/* Left: info */}
        <div ref={leftRef} className={`contact__info reveal ${leftVisible ? 'reveal--active' : ''}`}>
          <div className="contact__head">
            <div className="contact__label">
              <span className="contact__label-dot" />
              <span>CONTACT STUDIO</span>
            </div>
            <h2 className="contact__title">Let's build your next competitive advantage.</h2>
            <p className="contact__text">
              Share your goals, expected launch window, or questions. We respond within 12
              hours with actionable next steps.
            </p>
          </div>

          <div className="contact__cards">
            {contactCards.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.id} className="contact-card">
                  <div className="contact-card__icon">
                    <Icon size={16} />
                  </div>
                  <div>
                    <span className="contact-card__label">{c.label}</span>
                    <span className="contact-card__value">{c.value}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <a
            href={`https://wa.me/${siteInfo.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__whatsapp"
          >
            <MessageSquare size={16} />
            <span>Direct Chat via WhatsApp Studio</span>
          </a>
        </div>

        {/* Right: form */}
        <GlassCard className="contact__form-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form__row">
              <div>
                <label htmlFor="form-name">Full Name *</label>
                <input
                  type="text" id="form-name" name="name" required
                  value={form.name} onChange={handleChange}
                  placeholder="Alex Morgan"
                />
              </div>
              <div>
                <label htmlFor="form-email">Email Address *</label>
                <input
                  type="email" id="form-email" name="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="alex@company.com"
                />
              </div>
            </div>

            <div className="contact-form__row">
              <div>
                <label htmlFor="form-phone">Phone / WhatsApp</label>
                <input
                  type="tel" id="form-phone" name="phone"
                  value={form.phone} onChange={handleChange}
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <label htmlFor="form-service">Project Classification</label>
                <select id="form-service" name="service" value={form.service} onChange={handleChange}>
                  {serviceOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="form-details">Project Vision / Scope *</label>
              <textarea
                id="form-details" name="details" rows="4" required
                value={form.details} onChange={handleChange}
                placeholder="Tell us about the project goals, timeline, and features..."
              />
            </div>

            <button type="submit" className="btn-primary contact-form__submit">
              <span>Dispatch Project Brief</span>
              <Send size={16} />
            </button>
          </form>

          {status === 'success' && (
            <div className="contact-form__toast">
              <CheckCircle2 size={16} />
              <span>Project brief compiled! Redirecting to studio channel...</span>
            </div>
          )}
        </GlassCard>
      </div>
    </section>
  )
}

