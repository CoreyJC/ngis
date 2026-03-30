export default function Hero() {
  return (
    <section
      className="hero-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid dot pattern overlay */}
      <div
        className="grid-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '15%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Badge */}
        <div
          className="fade-up fade-up-delay-1"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(45, 212, 191, 0.08)',
            border: '1px solid rgba(45, 212, 191, 0.2)',
            borderRadius: '999px',
            padding: '6px 16px',
            marginBottom: '32px',
            fontSize: '12px',
            fontWeight: '600',
            color: '#2dd4bf',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{
            width: '6px', height: '6px',
            background: '#2dd4bf',
            borderRadius: '50%',
            display: 'inline-block',
            boxShadow: '0 0 8px #2dd4bf',
          }} />
          Enterprise Software Solutions
        </div>

        {/* Heading */}
        <h1
          className="fade-up fade-up-delay-2"
          style={{
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: '800',
            lineHeight: '1.05',
            letterSpacing: '-2px',
            color: '#f1f5f9',
            margin: '0 0 24px',
          }}
        >
          Next Gen{' '}
          <span style={{
            background: 'linear-gradient(135deg, #2dd4bf, #60a5fa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Information
          </span>
          {' '}Solutions
        </h1>

        {/* Tagline */}
        <p
          className="fade-up fade-up-delay-3"
          style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: '#64748b',
            maxWidth: '560px',
            margin: '0 auto 48px',
            lineHeight: '1.6',
            fontWeight: '400',
          }}
        >
          Enterprise software built for real industries.
        </p>

        {/* CTAs */}
        <div
          className="fade-up fade-up-delay-4"
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#software"
            style={{
              background: 'linear-gradient(135deg, #2dd4bf, #3b82f6)',
              color: '#050d1a',
              padding: '14px 32px',
              borderRadius: '10px',
              fontWeight: '700',
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            View Our Software
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="#about"
            style={{
              background: 'transparent',
              color: '#94a3b8',
              padding: '14px 32px',
              borderRadius: '10px',
              fontWeight: '600',
              fontSize: '15px',
              textDecoration: 'none',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              transition: 'color 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#f1f5f9'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            opacity: '0.4',
          }}
        >
          <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748b' }}>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="#64748b" style={{ animation: 'bounce 2s infinite' }}>
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  )
}
