import { PROFILE } from '../data'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const socials = [
  { label: 'GitHub', href: PROFILE.github, icon: <GithubIcon /> },
  { label: 'LinkedIn', href: PROFILE.linkedin, icon: <LinkedinIcon /> },
  { label: 'Email', href: `mailto:${PROFILE.email}`, icon: <MailIcon /> },
]

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-[1040px] px-6 pb-16 pt-4">
      <img
        src={`${import.meta.env.BASE_URL}hero-bridge.jpg`}
        alt=""
        aria-hidden="true"
        width={1800}
        height={600}
        style={{ marginTop: '-3.2%' }} // trims ~half of the empty sky above the bridge
        className="pointer-events-none mx-auto w-full select-none opacity-90 mix-blend-lighten [mask-image:linear-gradient(to_bottom,black_65%,transparent),linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
      />
      <div className="fade-in relative -mt-6 sm:-mt-14 sm:pl-10">
        <div className="flex items-end gap-6">
          <div className="h-[95px] w-[96px] shrink-0 overflow-hidden rounded-xl border border-line sm:h-[126px] sm:w-[126px]">
            <div className="h-[126px] w-full overflow-hidden sm:h-[168px]">
              <img
                src={`${import.meta.env.BASE_URL}avatar.jpg`}
                alt="Portrait of Abhiraj Karpe"
                width={126}
                height={168}
                className="h-full w-full origin-[52%_80%] scale-[1.6] object-cover"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight sm:text-[24px]">
              {PROFILE.name}
              <span className="cursor" aria-hidden="true" />
            </h1>
            <p className="mt-2 max-w-[460px] text-[13px] text-fg/80 sm:text-[14px]">{PROFILE.tagline}</p>
          </div>
        </div>
        <div className="mt-7 max-w-[600px] space-y-3 text-[13px] leading-[1.8] text-dim">
          {PROFILE.intro.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="btn"
              {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
