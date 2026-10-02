import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { num: '01', label: 'HOME', href: '#home' },
  { num: '02', label: 'PROJECTS', href: '#projects' },
  { num: '03', label: 'ABOUT', href: '#about' },
  { num: '04', label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderBottom: '1px solid #2a2a2a',
          background: '#0a0a0a',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            height: '36px',
          }}
        >
          {/* Left: icon + nav items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {/* Terminal icon */}
            <div
              style={{
                width: '18px',
                height: '18px',
                border: '1px solid #444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 3L4 5L1 7" stroke="#e8621a" strokeWidth="1" />
                <path d="M5 7H9" stroke="#888880" strokeWidth="1" />
              </svg>
            </div>

            {/* Desktop nav items */}
            <div
              className="hidden sm:flex"
              style={{ alignItems: 'center', gap: '20px' }}
            >
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.num}
                  onClick={() => scrollTo(item.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '0',
                    paddingBottom: active === item.label.toLowerCase() ? '1px' : '0',
                    borderBottom:
                      active === item.label.toLowerCase()
                        ? '1px solid #e8621a'
                        : '1px solid transparent',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.6rem',
                      color: '#444440',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.num}.
                  </span>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      color:
                        active === item.label.toLowerCase()
                          ? '#e8621a'
                          : '#888880',
                      transition: 'color 0.2s ease',
                      fontFamily: 'inherit',
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="flex sm:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none',
                border: '1px solid #2a2a2a',
                cursor: 'pointer',
                padding: '3px 6px',
                color: '#888880',
                fontSize: '0.6rem',
                letterSpacing: '0.08em',
                fontFamily: 'inherit',
              }}
            >
              {mobileOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>

          {/* Right: title + window controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                color: '#e8e6e0',
                fontWeight: '500',
              }}
              className="hidden sm:block"
            >
              ABHIRAJ KARPE.EXE
            </span>
            {/* Window controls */}
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0' }}
              className="hidden sm:flex"
            >
              {['—', '□', '×'].map((c, i) => (
                <span
                  key={i}
                  style={{
                    width: '22px',
                    height: '22px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #2a2a2a',
                    borderLeft: i === 0 ? '1px solid #2a2a2a' : 'none',
                    fontSize: '0.55rem',
                    color: '#444440',
                    cursor: 'default',
                    userSelect: 'none',
                    lineHeight: 1,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              borderTop: '1px solid #1a1a1a',
              background: '#0a0a0a',
              padding: '12px 20px',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.num}
                onClick={() => scrollTo(item.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px 0',
                  borderBottom: '1px solid #1a1a1a',
                  fontFamily: 'inherit',
                }}
              >
                <span style={{ fontSize: '0.6rem', color: '#444440' }}>
                  {item.num}.{' '}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    color:
                      active === item.label.toLowerCase()
                        ? '#e8621a'
                        : '#888880',
                  }}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
