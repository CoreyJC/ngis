export default function About() {
  const pillars = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Industry First',
      desc: 'We learn the industry first. Then we build.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: 'Enterprise Grade',
      desc: 'Multi tenant architecture, role based access, and audit trails. Built in from day one.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI Powered',
      desc: 'Reporting and insights that actually make sense, built on top of solid operational data.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Small & Focused',
      desc: 'No bloated teams or endless meetings. Just a small group of people shipping software that works.',
    },
  ]

  return (
    <section
      id="about"
      style={{
        padding: '120px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div style={{ maxWidth: '640px', marginBottom: '64px' }}>
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
          Who We Are
        </div>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: '800',
          letterSpacing: '-1px',
          color: '#f1f5f9',
          lineHeight: '1.1',
          margin: '0 0 20px',
        }}>
          We offer next generation solutions that simplify and improve information sharing.
        </h2>
        <p style={{
          fontSize: '17px',
          color: '#64748b',
          lineHeight: '1.7',
          margin: '0 0 16px',
        }}>
          NGIS is a software company with a straightforward goal: provide the next generation tools to markets that have been overlooked. We focus on simplifying and integrating data so information can be made instantly and conveniently so delayed reports are never an issue.
        </p>
      </div>

      {/* Pillars grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
      }}>
        {pillars.map((p, i) => (
          <div
            key={i}
            className="card-hover"
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '28px',
            }}
          >
            <div style={{
              width: '40px', height: '40px',
              background: 'rgba(45, 212, 191, 0.1)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#2dd4bf',
              marginBottom: '16px',
            }}>
              {p.icon}
            </div>
            <h3 style={{
              fontSize: '15px',
              fontWeight: '700',
              color: '#f1f5f9',
              margin: '0 0 8px',
            }}>
              {p.title}
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#64748b',
              lineHeight: '1.6',
              margin: 0,
            }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
