import { PROFILE, PROJECTS } from '../data'
import ProjectCard from './ProjectCard'
import { ArrowUpRight } from './Icons'

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-[1040px] px-6 pb-20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="section-title"><span className="text-dim">&gt;</span> Projects</h2>
        <a
          href={`${PROFILE.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[13px] transition-colors hover:text-dim"
        >
          View all <ArrowUpRight />
        </a>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  )
}
