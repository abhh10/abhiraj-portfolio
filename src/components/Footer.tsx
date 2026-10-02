export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #1a1a1a',
        background: '#0a0a0a',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span
        style={{
          fontSize: '0.6rem',
          color: '#444440',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        ABHIRAJ KARPE © 2026
      </span>

      <a
        href="https://github.com/abhh10"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.6rem',
          color: '#444440',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#e8621a')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#444440')}
      >
        BUILT WITH CURIOSITY ↗
      </a>
    </footer>
  )
}
