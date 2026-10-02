import { ReactNode } from 'react'

export interface Project {
  id: string
  num: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  diagram: ReactNode
  link?: string
}

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <article
      className="project-card"
      style={{
        border: '1px solid #2a2a2a',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
      }}
    >
      {/* Window chrome bar */}
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
          {/* Three dots */}
          {['#2a2a2a', '#2a2a2a', '#2a2a2a'].map((c, i) => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                border: `1px solid ${c}`,
                background: '#0a0a0a',
              }}
            />
          ))}
          <span
            style={{
              fontSize: '0.5rem',
              color: '#333330',
              marginLeft: '6px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {project.id}
          </span>
        </div>
        {/* Arrow link icon */}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.4 }}>
          <path d="M2 8L8 2M4 2H8V6" stroke="#888880" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Card content */}
      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Pipeline diagram */}
        <div style={{ marginBottom: '4px' }}>
          {project.diagram}
        </div>

        {/* Dither separator */}
        <div
          style={{
            height: '1px',
            background: 'repeating-linear-gradient(90deg, #1a1a1a 0px, #1a1a1a 3px, transparent 3px, transparent 6px)',
            marginBottom: '14px',
          }}
        />

        {/* Title */}
        <h3
          style={{
            fontSize: '0.95rem',
            fontWeight: '600',
            letterSpacing: '0.06em',
            color: '#e8e6e0',
            textTransform: 'uppercase',
            marginBottom: '10px',
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.72rem',
            color: '#666660',
            lineHeight: '1.65',
            marginBottom: '16px',
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2px',
            marginBottom: '14px',
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.55rem',
                color: '#555550',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginRight: '8px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View link */}
        <a
          href={project.link ?? '#'}
          className="link-arrow view-link"
          style={{ fontSize: '0.65rem' }}
          onClick={project.link ? undefined : (e) => e.preventDefault()}
        >
          VIEW PROJECT ↗
        </a>
      </div>
    </article>
  )
}
