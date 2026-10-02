interface Props {
  title: string
  num: string
  rightLabel?: string
}

export default function SectionHeader({ title, num, rightLabel }: Props) {
  return (
    <div
      style={{
        borderBottom: '1px solid #2a2a2a',
        background: '#111111',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Folder icon */}
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
          <path
            d="M0 2C0 1.45 0.45 1 1 1H5L7 3H15C15.55 3 16 3.45 16 4V12C16 12.55 15.55 13 15 13H1C0.45 13 0 12.55 0 12V2Z"
            fill="none"
            stroke="#444440"
            strokeWidth="1"
          />
        </svg>
        <span
          style={{
            fontSize: '0.6rem',
            color: '#444440',
            letterSpacing: '0.05em',
          }}
        >
          {num}.
        </span>
        <span
          style={{
            fontSize: '0.95rem',
            fontWeight: '600',
            letterSpacing: '0.12em',
            color: '#e8e6e0',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </span>
      </div>
      {rightLabel && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              fontSize: '0.55rem',
              color: '#444440',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {rightLabel}
          </span>
          {/* Expand icon */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="0.5" y="0.5" width="11" height="11" stroke="#2a2a2a" />
            <path d="M4 2H10V8" stroke="#444440" strokeWidth="0.8" />
            <path d="M2 10L10 2" stroke="#444440" strokeWidth="0.8" />
          </svg>
        </div>
      )}
    </div>
  )
}
