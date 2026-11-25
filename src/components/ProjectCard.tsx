import type { Project } from '../data'
import { ArrowUpRight, BoltIcon, DatabaseIcon, GithubIcon, LayersIcon, UsersIcon } from './Icons'

const ICONS = { layers: LayersIcon, database: DatabaseIcon, users: UsersIcon, bolt: BoltIcon }

export default function ProjectCard({ project: p }: { project: Project }) {
  const Icon = ICONS[p.icon]
  const live = p.status === 'Live'
  return (
    <article className="group flex flex-col rounded-xl border border-line bg-bg p-6 transition-colors duration-200 hover:border-line-hover">
      <div className="flex items-start gap-5">
        <Icon className="mt-0.5 shrink-0 text-fg" />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[17px] font-semibold">{p.name}</h3>
            <span className="flex shrink-0 items-center gap-1.5 text-[11px] text-dim">
              {live && <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />}
              [ {p.status} ]
            </span>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-dim">{p.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.name} technologies`}>
            {p.tags.map((t) => (
              <li key={t} className="tag">{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-5 flex justify-end gap-4 pl-[46px] text-dim">
        <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} className="transition-colors hover:text-fg">
          <GithubIcon />
        </a>
        {p.external && (
          <a href={p.external} target="_blank" rel="noreferrer" aria-label={`Visit ${p.name}`} className="transition-colors hover:text-fg">
            <ArrowUpRight width={16} height={16} />
          </a>
        )}
      </div>
    </article>
  )
}
