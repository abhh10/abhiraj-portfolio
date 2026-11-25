import { PROFILE } from '../data'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1040px] px-6 pb-10">
      <div className="flex flex-col gap-3 border-t border-line pt-6 text-[12px] text-dim sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Abhiraj Karpe</span>
        <nav aria-label="Social" className="flex gap-5">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-fg">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">LinkedIn</a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-fg">Email</a>
        </nav>
        <span className="flex items-center gap-2">
          Built with React
          <span className="h-1.5 w-1.5 rounded-full bg-ok" role="img" aria-label="Online" />
        </span>
      </div>
    </footer>
  )
}
