const products = [
  {
    name: 'LogLedger',
    subtitle: 'LumberSoftware',
    description:
      'Inventory management for lumber yards. Logs, green lumber, kiln dried, and millwork, with built-in reporting.',
    status: 'In Development',
    statusColor: '#f59e0b',
    statusBg: 'rgba(245, 158, 11, 0.1)',
    statusBorder: 'rgba(245, 158, 11, 0.25)',
    github: 'https://github.com/CoreyJC/LogLedger',
    tags: ['SaaS', 'Multi Tenant', 'Reporting', 'Lumber Industry'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    accentColor: '#2dd4bf',
    accentBg: 'rgba(45, 212, 191, 0.08)',
  },
]

function StatusBadge({ label, color, bg, border }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: bg,
      border: `1px solid ${border}`,
      color: color,
      borderRadius: '999px',
      padding: '4px 12px',
      fontSize: '11px',
      fontWeight: '700',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    }}>
      <span style={{
        width: '5px', height: '5px',
        background: color,
        borderRadius: '50%',
        boxShadow: `0 0 6px ${color}`,
      }} />
      {label}
    </span>
  )
}

function ProductCard({ product }) {
  return (
    <div
      className="card-hover"
      style={{
        background: 'rgba(10, 22, 40, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        borderRadius: '16px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '2px',
        background: `linear-gradient(90deg, ${product.accentColor}, transparent)`,
        borderRadius: '16px 16px 0 0',
      }} />

      {/* Icon + Status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div style={{
          width: '48px', height: '48px',
          background: product.accentBg,
          border: `1px solid rgba(${product.accentColor === '#2dd4bf' ? '45,212,191' : '96,165,250'},0.2)`,
          borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: product.accentColor,
        }}>
          {product.icon}
        </div>
        <StatusBadge
          label={product.status}
          color={product.statusColor}
          bg={product.statusBg}
          border={product.statusBorder}
        />
      </div>

      {/* Name */}
      <div style={{ marginBottom: '12px' }}>
        <h3 style={{
          fontSize: '22px',
          fontWeight: '800',
          color: '#f1f5f9',
          margin: '0 0 2px',
          letterSpacing: '-0.5px',
        }}>
          {product.name}
        </h3>
        <p style={{
          fontSize: '12px',
          color: product.accentColor,
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          opacity: 0.8,
        }}>
          {product.subtitle}
        </p>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '14px',
        color: '#64748b',
        lineHeight: '1.65',
        margin: '0 0 20px',
        flexGrow: 1,
      }}>
        {product.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
        {product.tags.map(tag => (
          <span key={tag} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#94a3b8',
            borderRadius: '6px',
            padding: '3px 10px',
            fontSize: '11px',
            fontWeight: '500',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      {product.github && (
        <a
          href={product.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#94a3b8',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: '600',
            padding: '10px 16px',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '8px',
            transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
            width: 'fit-content',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#f1f5f9'
            e.currentTarget.style.borderColor = 'rgba(45,212,191,0.3)'
            e.currentTarget.style.background = 'rgba(45,212,191,0.05)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#94a3b8'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
          <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      )}
    </div>
  )
}

export default function Software() {
  return (
    <section
      id="software"
      style={{
        padding: '120px 24px',
        background: 'rgba(10, 22, 40, 0.4)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '560px', marginBottom: '64px' }}>
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
            Our Software
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: '800',
            letterSpacing: '-1px',
            color: '#f1f5f9',
            lineHeight: '1.1',
            margin: '0 0 16px',
          }}>
            Software that fits the job
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#64748b',
            lineHeight: '1.65',
            margin: 0,
          }}>
            Each product is built for one industry from the ground up. Not a general platform stretched to fit.
          </p>
        </div>

        {/* Product grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {products.map(p => <ProductCard key={p.name} product={p} />)}

          {/* Coming soon card */}
          <div style={{
            background: 'rgba(10, 22, 40, 0.4)',
            border: '1px dashed rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            minHeight: '200px',
          }}>
            <div style={{
              width: '44px', height: '44px',
              border: '1px dashed rgba(255,255,255,0.12)',
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#334155',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p style={{
              color: '#334155',
              fontSize: '13px',
              fontWeight: '600',
              margin: 0,
              textAlign: 'center',
            }}>
              More products coming soon
            </p>
            <p style={{
              color: '#1e293b',
              fontSize: '12px',
              margin: 0,
              textAlign: 'center',
            }}>
              New industries in the pipeline
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
