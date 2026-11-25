import { EXPERIENCE } from '../data'

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-[1040px] px-6 pb-20">
      <h2 className="section-title mb-6"><span className="text-dim">&gt;</span> Experience</h2>
      <div className="space-y-5">
        {EXPERIENCE.map((e) => (
          <article key={e.company + e.role} className="rounded-xl border border-line p-6 transition-colors duration-200 hover:border-line-hover">
            <div className="flex items-start gap-4">
              <img
                src={`${import.meta.env.BASE_URL}${e.logo}`}
                alt={`${e.company} logo`}
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-full"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-[16px] font-semibold">{e.role}</h3>
                  <span className="text-[12px] text-dim">{e.period}</span>
                </div>
                <p className="text-[13px] text-dim">
                  {e.company} · {e.location}
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5 text-[13px] leading-[1.7] text-dim sm:pl-16">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-mute" aria-hidden="true">–</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2 sm:pl-16" aria-label="Technologies">
              {e.tags.map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
