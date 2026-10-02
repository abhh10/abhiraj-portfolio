/* SVG pipeline diagrams for each project */

/* Project 01 — CDC Lakehouse: PostgreSQL → Debezium → Kafka → Iceberg → Trino */
export function CDCDiagram() {
  const nodes = ['PostgreSQL', 'Debezium', 'Kafka', 'Iceberg', 'Trino']
  const icons = [
    <g key="pg">
      <ellipse cx="10" cy="6" rx="9" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="1" y="6" width="18" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="10" cy="18" rx="9" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
    </g>,
    <g key="dbz">
      <circle cx="10" cy="10" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      {[0,60,120,180,240,300].map((a, i) => {
        const r = Math.PI * a / 180
        return <rect key={i} x={10 + 5.5*Math.cos(r) - 1} y={10 + 5.5*Math.sin(r) - 2} width="2" height="4" transform={`rotate(${a},${10 + 5.5*Math.cos(r)},${10 + 5.5*Math.sin(r)})`} fill="currentColor" />
      })}
    </g>,
    <g key="kfk">
      {[0,1,2,3].map(i => (
        <rect key={i} x={2 + i*4} y={4} width="3" height="14" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1" />
      ))}
    </g>,
    <g key="ice">
      <rect x="1" y="4" width="18" height="14" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="1" y1="9" x2="19" y2="9" stroke="currentColor" strokeWidth="0.8" />
      <line x1="7" y1="4" x2="7" y2="18" stroke="currentColor" strokeWidth="0.8" />
      <line x1="13" y1="4" x2="13" y2="18" stroke="currentColor" strokeWidth="0.8" />
    </g>,
    <g key="tri">
      <circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="5" y1="8" x2="11" y2="8" stroke="currentColor" strokeWidth="0.8" />
      <line x1="5" y1="10" x2="10" y2="10" stroke="currentColor" strokeWidth="0.8" />
    </g>,
  ]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '16px', flexWrap: 'wrap', rowGap: '8px' }}>
      {nodes.map((label, i) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" style={{ color: '#888880' }}>
              {icons[i]}
            </svg>
            <span style={{ fontSize: '0.5rem', color: '#444440', letterSpacing: '0.03em', textAlign: 'center', lineHeight: 1.2 }}>
              {label}
            </span>
          </div>
          {i < nodes.length - 1 && (
            <span style={{ color: '#333330', fontSize: '0.7rem', margin: '0 4px', marginBottom: '14px' }}>→</span>
          )}
        </div>
      ))}
    </div>
  )
}

/* Project 02 — YouTube Pipeline: API → S3 → PySpark → Glue → Athena */
export function YouTubeDiagram() {
  const nodes = ['API', 'S3', 'PySpark', 'Glue', 'Athena']
  const icons = [
    <g key="api">
      <text x="2" y="14" fontFamily="monospace" fontSize="11" fill="currentColor" opacity="0.8">{'{ }'}</text>
    </g>,
    <g key="s3">
      <ellipse cx="10" cy="5" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="2" y="5" width="16" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M2 17 Q10 20 18 17" fill="none" stroke="currentColor" strokeWidth="1" />
    </g>,
    <g key="pyspark">
      <path d="M12 2L5 11H10L8 18L15 9H10L12 2Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </g>,
    <g key="glue">
      <circle cx="10" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="3" cy="4" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="17" cy="4" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="3" cy="16" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="17" cy="16" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="5" y1="5" x2="8" y2="8" stroke="currentColor" strokeWidth="0.8" />
      <line x1="15" y1="5" x2="12" y2="8" stroke="currentColor" strokeWidth="0.8" />
      <line x1="5" y1="15" x2="8" y2="12" stroke="currentColor" strokeWidth="0.8" />
      <line x1="15" y1="15" x2="12" y2="12" stroke="currentColor" strokeWidth="0.8" />
    </g>,
    <g key="athena">
      <rect x="2" y="12" width="3" height="6" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <rect x="7" y="7" width="3" height="11" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <rect x="12" y="3" width="3" height="15" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <line x1="1" y1="18" x2="19" y2="18" stroke="currentColor" strokeWidth="0.8" />
    </g>,
  ]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '16px', flexWrap: 'wrap', rowGap: '8px' }}>
      {nodes.map((label, i) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" style={{ color: '#888880' }}>
              {icons[i]}
            </svg>
            <span style={{ fontSize: '0.5rem', color: '#444440', letterSpacing: '0.03em', textAlign: 'center', lineHeight: 1.2 }}>
              {label}
            </span>
          </div>
          {i < nodes.length - 1 && (
            <span style={{ color: '#333330', fontSize: '0.7rem', margin: '0 4px', marginBottom: '14px' }}>→</span>
          )}
        </div>
      ))}
    </div>
  )
}

/* Project 03 — Crypto Pipeline: API → Kafka → Spark → Postgres → Dashboard */
export function CryptoDiagram() {
  const nodes = ['Crypto API', 'Kafka', 'PySpark', 'PostgreSQL', 'Grafana']
  const icons = [
    <g key="crypto">
      <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M8 6V14M12 6V14M7 8H12 M7 12H12" stroke="currentColor" strokeWidth="1" />
    </g>,
    <g key="kfk">
      {[0,1,2,3].map(i => (
        <rect key={i} x={2 + i*4} y={4} width="3" height="14" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1" />
      ))}
    </g>,
    <g key="spark">
      <path d="M12 2L5 11H10L8 18L15 9H10L12 2Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </g>,
    <g key="pg">
      <ellipse cx="10" cy="6" rx="9" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="1" y="6" width="18" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="10" cy="18" rx="9" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
    </g>,
    <g key="dash">
      <rect x="2" y="3" width="16" height="14" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="2" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="0.8" />
      <line x1="10" y1="8" x2="10" y2="17" stroke="currentColor" strokeWidth="0.8" />
    </g>,
  ]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '16px', flexWrap: 'wrap', rowGap: '8px' }}>
      {nodes.map((label, i) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" style={{ color: '#888880' }}>
              {icons[i]}
            </svg>
            <span style={{ fontSize: '0.5rem', color: '#444440', letterSpacing: '0.03em', textAlign: 'center', lineHeight: 1.2 }}>
              {label}
            </span>
          </div>
          {i < nodes.length - 1 && (
            <span style={{ color: '#333330', fontSize: '0.7rem', margin: '0 4px', marginBottom: '14px' }}>→</span>
          )}
        </div>
      ))}
    </div>
  )
}

/* Project 04 — Databricks NYC Trip: TLC Data → Databricks → Delta Lake → PowerBI */
export function NYCDiagram() {
  const nodes = ['NYC TLC', 'DBFS', 'Databricks', 'Delta Lake', 'Power BI']
  const icons = [
    <g key="tlc">
      <rect x="2" y="5" width="16" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="6" cy="15" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="14" cy="15" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
    </g>,
    <g key="dbfs">
      <ellipse cx="10" cy="5" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="2" y="5" width="16" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M2 17 Q10 20 18 17" fill="none" stroke="currentColor" strokeWidth="1" />
    </g>,
    <g key="dbx">
      <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" fill="none" stroke="currentColor" strokeWidth="1" />
    </g>,
    <g key="delta">
      <polygon points="10,2 18,17 2,17" fill="none" stroke="currentColor" strokeWidth="1" />
    </g>,
    <g key="pbi">
      <rect x="3" y="11" width="3" height="6" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <rect x="8" y="7" width="3" height="10" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <rect x="13" y="3" width="3" height="14" fill="none" stroke="currentColor" strokeWidth="0.8" />
    </g>,
  ]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '16px', flexWrap: 'wrap', rowGap: '8px' }}>
      {nodes.map((label, i) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" style={{ color: '#888880' }}>
              {icons[i]}
            </svg>
            <span style={{ fontSize: '0.5rem', color: '#444440', letterSpacing: '0.03em', textAlign: 'center', lineHeight: 1.2 }}>
              {label}
            </span>
          </div>
          {i < nodes.length - 1 && (
            <span style={{ color: '#333330', fontSize: '0.7rem', margin: '0 4px', marginBottom: '14px' }}>→</span>
          )}
        </div>
      ))}
    </div>
  )
}
