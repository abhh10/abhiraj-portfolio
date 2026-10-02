import SectionHeader from './SectionHeader'

/* ── Dithered city skyline illustration ── */
function CityIllustration() {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', opacity: 0.7 }}
      aria-label="Dithered city skyline"
    >
      <defs>
        <pattern id="city-dots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="0.8" fill="#333330" />
        </pattern>
        <pattern id="city-dots2" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.6" fill="#2a2a2a" />
        </pattern>
        <pattern id="city-dots3" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.5" fill="#222" />
        </pattern>
      </defs>

      <rect width="280" height="200" fill="#0a0a0a" />

      {/* Stars */}
      {[[20,10],[60,8],[100,15],[140,5],[180,12],[220,7],[260,18],[10,30],[250,25]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="1" height="1" fill="#333330" />
      ))}

      {/* Moon */}
      <circle cx="240" cy="30" r="20" fill="#1a1a1a" />
      <circle cx="240" cy="30" r="18" fill="url(#city-dots2)" />
      <circle cx="240" cy="30" r="14" fill="#161616" />

      {/* Location pin */}
      <g transform="translate(226, 18)">
        <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 19 7 19C7 19 14 12.25 14 7C14 3.13 10.87 0 7 0Z" fill="none" stroke="#e8621a" strokeWidth="1" />
        <circle cx="7" cy="7" r="2.5" stroke="#e8621a" strokeWidth="1" fill="none" />
      </g>

      {/* Building silhouettes */}
      {/* Far buildings */}
      <rect x="0" y="120" width="15" height="80" fill="#111111" />
      <rect x="0" y="120" width="15" height="80" fill="url(#city-dots3)" opacity="0.5" />

      <rect x="18" y="100" width="20" height="100" fill="#0f0f0f" />
      <rect x="42" y="110" width="14" height="90" fill="#111111" />

      <rect x="58" y="80" width="30" height="120" fill="#0e0e0e" />
      <rect x="58" y="80" width="30" height="120" fill="url(#city-dots3)" opacity="0.4" />

      <rect x="90" y="100" width="18" height="100" fill="#111111" />
      <rect x="110" y="90" width="25" height="110" fill="#0f0f0f" />

      <rect x="137" y="70" width="35" height="130" fill="#111111" />
      <rect x="137" y="70" width="35" height="130" fill="url(#city-dots2)" opacity="0.3" />

      <rect x="174" y="95" width="20" height="105" fill="#0e0e0e" />
      <rect x="196" y="85" width="28" height="115" fill="#111111" />
      <rect x="226" y="100" width="18" height="100" fill="#0f0f0f" />
      <rect x="246" y="75" width="34" height="125" fill="#111111" />

      {/* Antenna on tall building */}
      <line x1="154" y1="70" x2="154" y2="50" stroke="#2a2a2a" strokeWidth="1" />
      <line x1="154" y1="55" x2="150" y2="60" stroke="#2a2a2a" strokeWidth="0.5" />
      <line x1="154" y1="55" x2="158" y2="60" stroke="#2a2a2a" strokeWidth="0.5" />
      <circle cx="154" cy="50" r="1.5" fill="#e8621a" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Windows */}
      {[
        [62,88],[62,98],[72,88],[72,98],[82,88],
        [141,78],[141,88],[141,98],[152,78],[152,88],
        [199,93],[210,93],[199,103],[210,103],
        [250,83],[260,83],[250,93],
      ].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="3" height="3" fill="#1a1a1a" />
      ))}

      {/* Ground */}
      <rect x="0" y="192" width="280" height="8" fill="#111111" />

      {/* Dithered bottom fade */}
      <rect x="0" y="160" width="280" height="40" fill="url(#city-dots3)" opacity="0.6" />
    </svg>
  )
}

const CONTACT_LINKS = [
  {
    label: 'EMAIL ME',
    href: 'mailto:abhirajkarpe@example.com',
  },
  {
    label: 'LINKEDIN',
    href: 'https://linkedin.com/in/abhiraj-karpe/',
  },
  {
    label: 'GITHUB',
    href: 'https://github.com/abhh10',
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        borderBottom: '1px solid #2a2a2a',
      }}
    >
      <SectionHeader num="04" title="Contact" rightLabel="Let's connect." />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
        }}
        className="contact-grid"
      >
        {/* Left: copy + links */}
        <div
          style={{
            padding: '36px 28px',
            borderRight: '1px solid #2a2a2a',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}
          className="contact-left"
        >
          <p
            style={{
              fontSize: '0.78rem',
              color: '#888880',
              lineHeight: '1.75',
              maxWidth: '360px',
            }}
          >
            Always open to interesting opportunities,
            <br />
            collaborations or just a good conversation.
          </p>

          {/* Contact buttons */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="btn-secondary"
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Right: illustration + info */}
        <div
          style={{
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="contact-right"
        >
          {/* City illustration */}
          <div style={{ flex: 1, maxHeight: '160px', overflow: 'hidden', borderBottom: '1px solid #1a1a1a' }}>
            <CityIllustration />
          </div>

          {/* Info grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              borderTop: '1px solid #1a1a1a',
            }}
          >
            <div
              style={{
                padding: '16px 20px',
                borderRight: '1px solid #1a1a1a',
              }}
            >
              <div
                style={{
                  fontSize: '0.55rem',
                  color: '#e8621a',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                BASED IN
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  color: '#888880',
                  lineHeight: 1.5,
                }}
              >
                Pune, India
              </div>
            </div>
            <div style={{ padding: '16px 20px' }}>
              <div
                style={{
                  fontSize: '0.55rem',
                  color: '#e8621a',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                INTERESTS
              </div>
              <div
                style={{
                  fontSize: '0.65rem',
                  color: '#888880',
                  lineHeight: 1.6,
                }}
              >
                Data Systems, Football,
                <br />
                Good Food, Better Problems
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-left {
            border-right: none !important;
            border-bottom: 1px solid #2a2a2a !important;
            padding: 24px 20px !important;
          }
          .contact-right {
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
