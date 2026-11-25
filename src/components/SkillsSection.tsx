import { SKILLS } from '../data'

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-[1040px] px-6 pb-20">
      <h2 className="section-title mb-6"><span className="text-dim">&gt;</span> Skills</h2>
      <div className="space-y-4">
        {SKILLS.map((g) => (
          <div key={g.group} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
            <span className="w-32 shrink-0 text-[12px] text-mute">{g.group}</span>
            <ul className="flex flex-wrap gap-2.5">
              {g.items.map((s) => (
                <li key={s} className="rounded-lg border border-line px-3 py-1 text-[13px]">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
