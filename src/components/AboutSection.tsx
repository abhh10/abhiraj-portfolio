import { PROFILE } from '../data'
import { ArrowUpRight } from './Icons'

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[1040px] px-6 pb-24">
      <h2 className="section-title mb-6"><span className="text-dim">&gt;</span> About</h2>
      <p className="max-w-[640px] text-[14px] leading-[1.8] text-dim">
        B.Tech Computer Science graduate (Software Engineering) from Ajeenkya D.Y. Patil University, Pune, CGPA 8.86.
        I focus on LLM-based systems: retrieval, tool use, guardrails and evaluation, backed by data engineering
        experience with Kafka, Spark and Iceberg. Outside of work I solve algorithm problems (700+ on LeetCode).
      </p>
      <a href={PROFILE.resume} download className="btn mt-6">
        Resume (PDF) <ArrowUpRight />
      </a>
    </section>
  )
}
