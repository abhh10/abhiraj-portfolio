import { PROFILE } from '../data'
import { ArrowUpRight } from './Icons'

const link = 'text-[13px] text-fg/90 transition-colors hover:text-dim'

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-[1040px] items-center justify-between px-6 pt-7">
      <a href="#home" className="text-[19px] font-bold tracking-tight" aria-label="Home">
        AK.
      </a>
      <nav aria-label="Primary" className="flex items-center gap-5 sm:gap-8">
        <a href="#projects" className={link}>Projects</a>
        <a href="#about" className={link}>About</a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-[13px] transition-colors hover:border-line-hover"
        >
          Contact <ArrowUpRight />
        </a>
      </nav>
    </header>
  )
}
