import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Placeholder — no backend yet
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    padding: '12px 16px',
    color: '#f1f5f9',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  }

  return (
    <section
      id="contact"
      style={{ padding: '120px 24px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '64px',
        alignItems: 'start',
      }}>
        {/* Left: info */}
        <div>
          <div style={{
            display: 'inline-block',
            background: 'rgba(45, 212, 191, 0.08)',
            border: '1px solid rgba(45, 212, 191, 0.2)',
            borderRadius: '999px',
            padding: '4px 14px',
            fontSize: '11px',
            fontWeight: '600',
            color: '#2dd4bf',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Get in Touch
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: '800',
            letterSpacing: '-1px',
            color: '#f1f5f9',
            lineHeight: '1.1',
            margin: '0 0 16px',
          }}>
            Let's build something together
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#64748b',
            lineHeight: '1.65',
            margin: '0 0 40px',
          }}>
            Whether you're in an industry that needs better software, want to partner, or just want to follow along — we'd love to hear from you.
          </p>

          {/* Direct email */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            marginBottom: '16px',
          }}>
            <div style={{
              width: '36px', height: '36px',
              background: 'rgba(45, 212, 191, 0.1)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#2dd4bf',
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p style={{ color: '#475569', fontSize: '11px', fontWeight: '600', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</p>
              <a href="mailto:contact@ngis.dev" style={{ color: '#f1f5f9', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>
                contact@ngis.dev
              </a>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
          }}>
            <div style={{
              width: '36px', height: '36px',
              background: 'rgba(45, 212, 191, 0.1)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#2dd4bf',
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div>
              <p style={{ color: '#475569', fontSize: '11px', fontWeight: '600', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>GitHub</p>
              <a href="https://github.com/CoreyJC" target="_blank" rel="noopener noreferrer" style={{ color: '#f1f5f9', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>
                github.com/CoreyJC
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div style={{
          background: 'rgba(10, 22, 40, 0.8)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px',
          padding: '32px',
        }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{
                width: '56px', height: '56px',
                background: 'rgba(45, 212, 191, 0.1)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#2dd4bf',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ color: '#f1f5f9', fontSize: '18px', fontWeight: '700', margin: '0 0 8px' }}>Message received</h3>
              <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>We'll get back to you at {formData.email}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginBottom: '8px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(45,212,191,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginBottom: '8px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(45,212,191,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginBottom: '8px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your industry or what you're building..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(45,212,191,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #2dd4bf, #3b82f6)',
                  color: '#050d1a',
                  padding: '13px 24px',
                  borderRadius: '10px',
                  fontWeight: '700',
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={e => e.target.style.opacity = '0.85'}
                onMouseLeave={e => e.target.style.opacity = '1'}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
