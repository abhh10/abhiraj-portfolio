import { useRef, useState, useEffect } from 'react'
import ProjectCard, { Project } from './ProjectCard'
import SectionHeader from './SectionHeader'
import { CDCDiagram, YouTubeDiagram, CryptoDiagram, NYCDiagram } from './ProjectDiagrams'

const PROJECTS: Project[] = [
  {
    id: '01_CDC_LAKEHOUSE',
    num: '01',
    title: 'CDC Lakehouse',
    subtitle: 'PostgreSQL → Debezium → Kafka → Iceberg → Trino',
    description:
      'End-to-end CDC pipeline capturing PostgreSQL changes with Debezium and Kafka, writing to Iceberg tables and querying through Trino.',
    tags: ['Debezium', 'Kafka', 'Iceberg', 'Trino', 'Docker'],
    diagram: <CDCDiagram />,
    link: 'https://github.com/abhh10/cdc-lakehouse',
  },
  {
    id: '02_YOUTUBE_PIPELINE',
    num: '02',
    title: 'YouTube Data Pipeline',
    subtitle: 'API → S3 → PySpark → Glue → Athena',
    description:
      'Processed 400K+ YouTube records using a Spark-based pipeline with incremental processing and partitioned storage.',
    tags: ['AWS', 'PySpark', 'Glue', 'Athena', 'Airflow'],
    diagram: <YouTubeDiagram />,
    link: 'https://github.com/abhh10/youtube-aws-data-pipeline',
  },
  {
    id: '03_CRYPTO_PIPELINE',
    num: '03',
    title: 'Crypto Data Engineering Pipeline',
    subtitle: 'CoinGecko API → Kafka → PySpark → PostgreSQL',
    description:
      'Real-time streaming pipeline processing cryptocurrency market data with Kafka and PySpark, aggregated for analytics.',
    tags: ['Kafka', 'PySpark', 'PostgreSQL', 'Docker', 'Streamlit'],
    diagram: <CryptoDiagram />,
    link: 'https://github.com/abhh10/crypto-data-engineering-pipeline',
  },
  {
    id: '04_NYC_TRIP_PIPELINE',
    num: '04',
    title: 'Databricks NYC Trip Pipeline',
    subtitle: 'NYC TLC → DBFS → Databricks → Delta Lake',
    description:
      'Batch data engineering pipeline executing Medallion Architecture on Databricks Delta Lake to process NYC taxi trips.',
    tags: ['Databricks', 'PySpark', 'Delta Lake', 'DBFS', 'SQL'],
    diagram: <NYCDiagram />,
    link: 'https://github.com/abhh10/databricks-nyc-trip-pipeline',
  },
]

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const scrollLeft = container.scrollLeft
    const width = container.clientWidth
    const index = Math.round(scrollLeft / (width * 0.75))
    setActiveIndex(Math.min(Math.max(index, 0), PROJECTS.length - 1))
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', handleScroll)
      return () => el.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return
    const targetCard = scrollRef.current.children[index] as HTMLElement
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
      setActiveIndex(index)
    }
  }

  return (
    <section
      id="projects"
      style={{
        borderBottom: '1px solid #2a2a2a',
        background: '#0a0a0a',
      }}
    >
      <SectionHeader num="02" title="Projects" rightLabel="Slide / scroll to explore" />

      {/* Retro OS Carousel Controls Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 20px',
          background: '#0e0e0e',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.6rem', color: '#888880', letterSpacing: '0.08em' }}>
            INDEX: <span style={{ color: '#e8621a' }}>[{String(activeIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}]</span>
          </span>
          <div style={{ display: 'flex', gap: '4px' }}>
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                style={{
                  width: '18px',
                  height: '6px',
                  background: activeIndex === i ? '#e8621a' : '#2a2a2a',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background 0.2s ease',
                }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="btn-secondary"
            style={{
              padding: '4px 10px',
              fontSize: '0.6rem',
              opacity: activeIndex === 0 ? 0.3 : 1,
              cursor: activeIndex === 0 ? 'default' : 'pointer',
            }}
          >
            &lt; PREV
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(PROJECTS.length - 1, activeIndex + 1))}
            disabled={activeIndex === PROJECTS.length - 1}
            className="btn-secondary"
            style={{
              padding: '4px 10px',
              fontSize: '0.6rem',
              opacity: activeIndex === PROJECTS.length - 1 ? 0.3 : 1,
              cursor: activeIndex === PROJECTS.length - 1 ? 'default' : 'pointer',
            }}
          >
            NEXT &gt;
          </button>
        </div>
      </div>

      {/* Slideable horizontally scrollable track */}
      <div
        ref={scrollRef}
        style={{
          padding: '24px',
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'thin',
          scrollbarColor: '#e8621a #111111',
          WebkitOverflowScrolling: 'touch',
        }}
        className="projects-slider"
      >
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            style={{
              flex: '0 0 360px',
              maxWidth: '85vw',
              scrollSnapAlign: 'start',
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <style>{`
        .projects-slider::-webkit-scrollbar {
          height: 6px;
        }
        .projects-slider::-webkit-scrollbar-track {
          background: #111111;
        }
        .projects-slider::-webkit-scrollbar-thumb {
          background: #e8621a;
        }
      `}</style>
    </section>
  )
}
