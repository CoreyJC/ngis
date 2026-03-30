export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '40px 24px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px',
            background: 'linear-gradient(135deg, #2dd4bf, #3b82f6)',
            borderRadius: '7px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: '800', fontSize: '11px', color: '#050d1a',
          }}>
            NG
          </div>
          <span style={{ fontWeight: '700', fontSize: '14px', color: '#475569' }}>NGIS</span>
        </div>

        {/* Copyright */}
        <p style={{
          color: '#334155',
          fontSize: '13px',
          margin: 0,
        }}>
          &copy; {year} Next Gen Information Solutions. All rights reserved.
        </p>

        {/* Nav */}
        <div style={{ display: 'flex', gap: '24px' }}>
          {['#about', '#software', '#contact'].map((href, i) => {
            const labels = ['About', 'Software', 'Contact']
            return (
              <a
                key={href}
                href={href}
                style={{
                  color: '#334155',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '500',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.target.style.color = '#94a3b8'}
                onMouseLeave={e => e.target.style.color = '#334155'}
              >
                {labels[i]}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
