import SectionHeader from './SectionHeader'
import TerminalWindow from './TerminalWindow'

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        borderBottom: '1px solid #2a2a2a',
      }}
    >
      <SectionHeader num="03" title="About" rightLabel="A bit more context." />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
        }}
        className="about-grid"
      >
        {/* Left: bio */}
        <div
          style={{
            padding: '32px 28px',
            borderRight: '1px solid #2a2a2a',
          }}
          className="about-left"
        >
          <p
            style={{
              fontSize: '0.78rem',
              color: '#888880',
              lineHeight: '1.8',
              marginBottom: '20px',
              maxWidth: '440px',
            }}
          >
            I&apos;m a Computer Science graduate who enjoys
            <br />
            working with data, building pipelines and
            <br />
            understanding how systems work end to end.
          </p>
          <p
            style={{
              fontSize: '0.78rem',
              color: '#666660',
              lineHeight: '1.8',
              marginBottom: '36px',
              maxWidth: '440px',
            }}
          >
            Mostly focused on data engineering — from
            <br />
            ingestion and transformation to analytics-ready
            <br />
            data. I also like exploring web development,
            <br />
            machine learning and the occasional random project.
          </p>

          {/* Download resume button */}
          <a
            href="/Abhiraj_Karpe_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex' }}
          >
            DOWNLOAD RESUME ↗
          </a>
        </div>

        {/* Right: terminal */}
        <div
          style={{
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="about-right"
        >
          <TerminalWindow />
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-left {
            border-right: none !important;
            border-bottom: 1px solid #2a2a2a !important;
            padding: 24px 20px !important;
          }
          .about-right {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
