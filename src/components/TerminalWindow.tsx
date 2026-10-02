import { useState, useEffect } from 'react'

const TERMINAL_LINES = [
  'Learning and building in data engineering',
  'Solving SQL & PySpark problems regularly',
  'Exploring Databricks, Snowflake and cloud data stacks',
  'Gym, football and a bit of everything else',
]

export default function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<number>(0)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      if (current < TERMINAL_LINES.length) {
        current++
        setVisibleLines(current)
      } else {
        clearInterval(interval)
      }
    }, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        border: '1px solid #2a2a2a',
        background: '#0a0a0a',
        height: '100%',
      }}
    >
      {/* Window bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 10px',
          borderBottom: '1px solid #1a1a1a',
          background: '#111111',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                border: '1px solid #2a2a2a',
                background: '#0a0a0a',
              }}
            />
          ))}
          <span
            style={{
              fontSize: '0.55rem',
              color: '#555550',
              marginLeft: '6px',
              letterSpacing: '0.05em',
            }}
          >
            ~/currently
          </span>
        </div>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.3 }}>
          <path d="M2 8L8 2M4 2H8V6" stroke="#888880" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Terminal body */}
      <div
        style={{
          padding: '16px',
          minHeight: '160px',
        }}
      >
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              marginBottom: '10px',
              fontSize: '0.72rem',
              color: '#888880',
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: '#e8621a', flexShrink: 0, marginTop: '1px' }}>&gt;</span>
            <span>{line}</span>
          </div>
        ))}

        {/* Blinking cursor after last line */}
        {visibleLines >= TERMINAL_LINES.length && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#e8621a', fontSize: '0.72rem' }}>&gt;</span>
            <span
              style={{
                display: 'inline-block',
                width: '7px',
                height: '13px',
                background: '#e8621a',
                animation: 'blink 1.1s step-end infinite',
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
