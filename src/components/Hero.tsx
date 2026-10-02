import { useEffect, useState } from 'react'

/* ── CRT Computer SVG illustration ── */
function RetroComputer() {
  return (
    <svg
      viewBox="0 0 420 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Retro CRT computer illustration"
      style={{ width: '100%', maxWidth: '420px', height: 'auto' }}
    >
      <defs>
        {/* Halftone / dither pattern for city bg */}
        <pattern id="dots-lg" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.2" fill="#333330" />
        </pattern>
        <pattern id="dots-md" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="0.9" fill="#2a2a2a" />
        </pattern>
        <pattern id="dots-sm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.7" fill="#222220" />
        </pattern>
        {/* CRT scanlines */}
        <pattern id="scanlines" x="0" y="0" width="1" height="3" patternUnits="userSpaceOnUse">
          <rect width="1" height="1" y="0" fill="rgba(0,0,0,0.35)" />
        </pattern>
        {/* Noise filter */}
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blend" />
          <feComposite in="blend" in2="SourceGraphic" operator="in" />
        </filter>
        <clipPath id="screen-clip">
          <rect x="136" y="88" width="148" height="106" rx="2" />
        </clipPath>
      </defs>

      {/* ── Background: dithered city skyline ── */}
      <rect width="420" height="380" fill="#0a0a0a" />

      {/* Moon */}
      <circle cx="360" cy="45" r="28" fill="#1a1a1a" />
      <circle cx="360" cy="45" r="26" fill="url(#dots-md)" />
      <circle cx="360" cy="45" r="22" fill="#222220" />
      <circle cx="355" cy="40" r="3" fill="#0a0a0a" />
      <circle cx="365" cy="50" r="2" fill="#0a0a0a" />

      {/* Stars */}
      {[[30,20],[80,15],[120,30],[180,10],[240,25],[300,12],[390,35],[410,20],[15,45],[55,60]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="1.5" height="1.5" fill="#444440" />
      ))}

      {/* City buildings — dithered silhouette */}
      {/* Far bg buildings */}
      <rect x="0" y="200" width="420" height="180" fill="#0e0e0e" />

      {/* Building cluster 1 — far right */}
      <rect x="310" y="140" width="30" height="240" fill="#111111" />
      <rect x="310" y="140" width="30" height="240" fill="url(#dots-sm)" opacity="0.5" />
      <rect x="348" y="160" width="22" height="220" fill="#0f0f0f" />
      <rect x="376" y="120" width="44" height="260" fill="#111111" />
      <rect x="376" y="120" width="44" height="260" fill="url(#dots-sm)" opacity="0.4" />
      <rect x="400" y="100" width="20" height="280" fill="#0f0f0f" />

      {/* Building cluster 2 — left */}
      <rect x="0" y="180" width="25" height="200" fill="#111111" />
      <rect x="18" y="155" width="18" height="225" fill="#0f0f0f" />
      <rect x="0" y="155" width="25" height="225" fill="url(#dots-sm)" opacity="0.3" />

      {/* Small windows on buildings */}
      {[[315,160],[315,175],[315,190],[320,160],[320,175],[380,130],[380,145],[385,130]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="3" height="3" fill="#1a1a1a" />
      ))}
      {/* Lit windows (tiny orange tints) */}
      {[[317,162],[322,177],[382,132]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="2" height="2" fill="#4a2a10" />
      ))}

      {/* Desk surface */}
      <rect x="30" y="310" width="360" height="6" fill="#1a1a1a" />
      <rect x="30" y="310" width="360" height="2" fill="#222220" />

      {/* Books stack on right */}
      <rect x="344" y="282" width="46" height="28" fill="#161616" />
      <rect x="344" y="282" width="46" height="4" fill="#1e1e1e" />
      <rect x="346" y="286" width="44" height="4" fill="#141414" />
      <rect x="346" y="290" width="44" height="4" fill="#181818" />
      <rect x="346" y="294" width="44" height="4" fill="#121212" />
      {/* Book labels */}
      <text x="350" y="285" fontFamily="'IBM Plex Mono',monospace" fontSize="3.5" fill="#444440">DATA</text>
      <text x="350" y="291" fontFamily="'IBM Plex Mono',monospace" fontSize="3.5" fill="#444440">SYSTEMS</text>
      <text x="350" y="297" fontFamily="'IBM Plex Mono',monospace" fontSize="3.5" fill="#444440">FOOTBALL</text>
      <text x="350" y="303" fontFamily="'IBM Plex Mono',monospace" fontSize="3.5" fill="#444440">ETC.</text>

      {/* Plant pot */}
      <rect x="60" y="290" width="22" height="20" fill="#141414" />
      <rect x="62" y="292" width="18" height="16" fill="#111111" />
      {/* Plant stems */}
      <line x1="71" y1="290" x2="65" y2="268" stroke="#1e1e1e" strokeWidth="1.5" />
      <line x1="71" y1="290" x2="78" y2="265" stroke="#1e1e1e" strokeWidth="1.5" />
      <line x1="71" y1="290" x2="60" y2="278" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="71" y1="290" x2="82" y2="278" stroke="#1a1a1a" strokeWidth="1" />
      {/* Leaves */}
      <ellipse cx="63" cy="265" rx="6" ry="9" fill="#1a1a1a" transform="rotate(-20,63,265)" />
      <ellipse cx="79" cy="263" rx="6" ry="10" fill="#1e1e1e" transform="rotate(15,79,263)" />
      <ellipse cx="58" cy="276" rx="5" ry="7" fill="#161616" transform="rotate(-35,58,276)" />
      <ellipse cx="84" cy="276" rx="5" ry="7" fill="#181818" transform="rotate(30,84,276)" />

      {/* ══ MONITOR body ══ */}
      {/* Monitor outer shell */}
      <rect x="118" y="72" width="184" height="150" rx="4" fill="#161616" />
      <rect x="118" y="72" width="184" height="150" rx="4" stroke="#2a2a2a" strokeWidth="1" />
      {/* Monitor bezel */}
      <rect x="124" y="78" width="172" height="138" rx="3" fill="#111111" />
      {/* Screen area */}
      <rect x="136" y="88" width="148" height="106" rx="2" fill="#080c08" />

      {/* CRT glow effect — very subtle green tint */}
      <rect x="136" y="88" width="148" height="106" rx="2" fill="#0a110a" />

      {/* Terminal content on screen */}
      <g clipPath="url(#screen-clip)">
        {/* Screen bg */}
        <rect x="136" y="88" width="148" height="106" fill="#07100a" />
        {/* Scanlines overlay */}
        <rect x="136" y="88" width="148" height="106" fill="url(#scanlines)" opacity="0.5" />

        {/* Terminal text */}
        <text x="144" y="106" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill="#4a9a5a" letterSpacing="0.5">
          select *
        </text>
        <text x="144" y="118" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill="#4a9a5a" letterSpacing="0.5">
          from ideas
        </text>
        <text x="144" y="130" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill="#4a9a5a" letterSpacing="0.5">
          where curiosity
        </text>
        <text x="144" y="142" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill="#4a9a5a" letterSpacing="0.5">
          = true;
        </text>
        {/* Separator line */}
        <line x1="136" y1="152" x2="284" y2="152" stroke="#1a2a1a" strokeWidth="0.5" />
        {/* Result row */}
        <text x="144" y="163" fontFamily="'IBM Plex Mono',monospace" fontSize="6.5" fill="#2a6a3a" letterSpacing="0.3">
          1 row returned ✓
        </text>
        {/* Cursor */}
        <rect x="144" y="170" width="7" height="11" fill="#e8621a">
          <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Screen bezel reflections */}
      <line x1="138" y1="90" x2="138" y2="192" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <line x1="139" y1="90" x2="282" y2="90" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

      {/* Monitor brand label */}
      <rect x="195" y="200" width="30" height="6" fill="#0f0f0f" />
      <text x="200" y="205" fontFamily="'IBM Plex Mono',monospace" fontSize="3.5" fill="#2a2a2a" letterSpacing="0.5">
        CRT-9000
      </text>

      {/* Monitor neck */}
      <rect x="188" y="222" width="44" height="8" fill="#141414" />
      <rect x="200" y="222" width="20" height="10" fill="#111111" />

      {/* Monitor base */}
      <rect x="160" y="230" width="100" height="8" rx="2" fill="#161616" />
      <rect x="160" y="230" width="100" height="2" fill="#1e1e1e" />
      <rect x="164" y="232" width="92" height="4" fill="#131313" />

      {/* Monitor buttons */}
      <circle cx="280" cy="172" r="3" fill="#0f0f0f" stroke="#222220" strokeWidth="0.5" />
      <circle cx="280" cy="182" r="2" fill="#0f0f0f" stroke="#222220" strokeWidth="0.5" />
      <rect x="278" y="190" width="4" height="8" rx="1" fill="#0f0f0f" stroke="#222220" strokeWidth="0.5" />
      {/* Power LED */}
      <circle cx="280" cy="160" r="1.5" fill="#e8621a" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* ══ KEYBOARD ══ */}
      <rect x="130" y="308" width="160" height="10" rx="1" fill="#141414" />
      <rect x="130" y="308" width="160" height="3" fill="#181818" />
      {/* Key rows */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={134 + i*6} y={310} width="5" height="4" rx="0.5" fill="#0f0f0f" stroke="#1a1a1a" strokeWidth="0.3" />
      ))}
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x={133 + i*6} y={315} width="5" height="4" rx="0.5" fill="#0f0f0f" stroke="#1a1a1a" strokeWidth="0.3" />
      ))}
      {/* Spacebar */}
      <rect x="155" y="315" width="30" height="4" rx="0.5" fill="#0f0f0f" stroke="#1a1a1a" strokeWidth="0.3" />

      {/* Mouse */}
      <rect x="305" y="304" width="18" height="26" rx="9" fill="#141414" stroke="#1e1e1e" strokeWidth="0.5" />
      <line x1="314" y1="304" x2="314" y2="316" stroke="#1a1a1a" strokeWidth="0.5" />

      {/* USB cable */}
      <path d="M 210 318 Q 220 330 230 320 Q 240 310 248 318" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />

      {/* Ambient glow under monitor — subtle */}
      <ellipse cx="210" cy="320" rx="80" ry="8" fill="#0a110a" opacity="0.4" />
    </svg>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      style={{
        borderBottom: '1px solid #2a2a2a',
        minHeight: 'calc(100vh - 36px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle retro grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(42,42,42,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(42,42,42,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Dithered gradient fade from grid to solid */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(transparent, #0a0a0a)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '60px 24px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* ── LEFT: text content ── */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(8px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          {/* Path label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              border: '1px solid #2a2a2a',
              padding: '3px 10px',
              marginBottom: '28px',
              background: '#111111',
            }}
          >
            <span style={{ color: '#e8621a', fontSize: '0.65rem' }}>~/</span>
            <span
              style={{
                fontSize: '0.65rem',
                color: '#888880',
                letterSpacing: '0.08em',
              }}
            >
              home/abhiraj
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: 'clamp(48px, 8vw, 80px)',
              fontWeight: '600',
              lineHeight: '1.0',
              letterSpacing: '-0.01em',
              color: '#e8e6e0',
              marginBottom: '0',
              fontFamily: 'inherit',
            }}
          >
            ABHIRAJ
          </h1>
          <h1
            style={{
              fontSize: 'clamp(48px, 8vw, 80px)',
              fontWeight: '600',
              lineHeight: '1.0',
              letterSpacing: '-0.01em',
              color: '#e8e6e0',
              marginBottom: '28px',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            KARPE
            <span
              style={{
                color: '#e8621a',
                marginLeft: '6px',
                fontWeight: '300',
              }}
            >
              |
            </span>
          </h1>

          {/* Tagline */}
          <div style={{ marginBottom: '36px' }}>
            <p
              style={{
                fontSize: '0.85rem',
                color: '#888880',
                lineHeight: '1.7',
                maxWidth: '380px',
              }}
            >
              <span
                style={{
                  color: '#e8621a',
                  marginRight: '6px',
                  fontWeight: '500',
                }}
              >
                &gt;
              </span>
              I build data pipelines, systems
              <br />
              <span style={{ marginLeft: '16px' }}>and a few other things.</span>
            </p>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              VIEW PROJECTS ↗
            </a>
            <a
              href="/Abhiraj_Karpe_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              DOWNLOAD RESUME ↗
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-secondary"
            >
              GET IN TOUCH ↗
            </a>
          </div>
        </div>

        {/* ── RIGHT: retro computer illustration ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(12px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
          className="crt-flicker hero-illustration"
        >
          <RetroComputer />
        </div>
      </div>

      {/* Mobile stacking fix */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .hero-illustration {
            order: -1;
            max-height: 260px;
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  )
}
