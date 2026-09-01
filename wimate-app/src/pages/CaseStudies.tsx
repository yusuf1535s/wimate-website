import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { caseStudies } from "../data/content";

export default function CaseStudies() {
  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40">
        <div className="container-x">
          <div className="chip">Case studies</div>
          <h1 className="mt-4 section-title max-w-4xl">
            Real outcomes, <span className="gradient-text-blue">measured in production.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink-600">
            A selection of how WiMate customers turned brownfield chaos into
            connected, optimized operations.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Customer stories"
        title="Problem → Solution → Result."
        className="!pt-0"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
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
                  <Step label="Problem" body={c.problem} />
                  <Step label="Solution" body={c.solution} />
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-500">
                      Result
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {c.result.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-ink-800">
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
    </>
  );
}

function Step({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-widest text-ink-500">{label}</div>
      <p className="mt-1 text-ink-700">{body}</p>
    </div>
  );
}
