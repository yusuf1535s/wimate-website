import Reveal from "./Reveal";
import Section from "./Section";
import { caseStudies } from "../data/content";

export default function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Case studies"
      title={
        <>
          Real outcomes, <span className="gradient-text-blue">measured in production.</span>
        </>
      }
      subtitle="How leading enterprises used WiMate to cut downtime, energy and cost — and run smarter operations."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {caseStudies.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <article className="card card-hover h-full p-6">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full border border-wimate-500/20 bg-wimate-50 px-2.5 py-1 font-medium text-wimate-700">
                  {c.industry}
                </span>
                <span className="text-ink-400">0{i + 1}</span>
              </div>
              <h3 className="mt-4 h-display text-xl font-semibold text-ink-800 text-balance">
                {c.title}
              </h3>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-ink-500">
                    Problem
                  </div>
                  <p className="mt-1 text-ink-700">{c.problem}</p>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-ink-500">
                    Solution
                  </div>
                  <p className="mt-1 text-ink-700">{c.solution}</p>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-ink-500">
                    Result
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {c.result.map((r) => (
                      <li
                        key={r}
                        className="flex items-start gap-2 text-ink-800"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
