import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { solutions, type Solution } from "../data/wimate";

/* ----- helpers ----- */
function CapabilityList({ items }: { items: Solution["capabilities"] }) {
  return (
    <ul className="space-y-3 text-[15px] text-ink-700 dark:text-white">
      {items.map((c, i) => {
        if (typeof c === "string") {
          return (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wimate-500" />
              <span>{c}</span>
            </li>
          );
        }
        return (
          <li key={i} className="flex flex-col gap-2">
            <div className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wimate-500" />
              <span className="font-medium text-ink-800 dark:text-white">{c.group}</span>
            </div>
            <ul className="ml-7 flex flex-wrap gap-2">
              {c.items.map((sub) => (
                <li
                  key={sub}
                  className="rounded-full border border-paper-200 bg-white px-3.5 py-1.5 text-sm font-medium text-ink-800 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                >
                  {sub}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

/* ----- one solution block ----- */
function SolutionBlock({ s }: { s: Solution }) {
  return (
    <article id={s.slug} className="relative scroll-mt-28 border-t border-paper-200 dark:border-slate-800 first:border-t-0">
      <div className="container-x py-12 sm:py-16 lg:py-20">
        <Reveal>
          <h2 className="section-title max-w-4xl">{s.title}</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-700 dark:text-slate-300">
            {s.intro}
          </p>
        </Reveal>

        {/* Main image */}
        <Reveal delay={0.12}>
          <div className="mt-8 overflow-hidden rounded-3xl ring-1 ring-paper-200 dark:ring-slate-800 bg-white dark:bg-slate-900 shadow-soft p-2">
            <img
              src={s.mainImage}
              alt={s.title}
              loading="lazy"
              className="aspect-[16/7] w-full object-cover rounded-2xl"
            />
          </div>
        </Reveal>

        {/* Capabilities */}
        <div className="mt-12">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 dark:text-slate-100 sm:text-3xl">
              Capabilities
            </h3>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-5 max-w-4xl">
              <CapabilityList items={s.capabilities} />
            </div>
          </Reveal>
          {s.capabilityNote && (
            <Reveal delay={0.14}>
              <p className="mt-4 max-w-4xl rounded-2xl border border-paper-200 dark:border-slate-800 bg-paper-50 dark:bg-slate-800/80 p-4 text-sm font-medium text-ink-700 dark:text-slate-300">
                {s.capabilityNote}
              </p>
            </Reveal>
          )}
        </div>

        {/* Features + CTA */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 dark:text-slate-100 sm:text-3xl">
                Features
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="mt-5 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink-800 dark:text-slate-200">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-wimate-50 dark:bg-slate-800 text-wimate-600 dark:text-wimate-400 ring-1 ring-wimate-500/20 dark:ring-wimate-500/40">
                      <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          {s.featuresCta && (
            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <Link
                  to={s.featuresCta.href}
                  className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-wimate-500/20 dark:border-slate-800 bg-wimate-50/40 dark:bg-slate-900 p-6 transition-all hover:border-wimate-500/40 dark:hover:border-wimate-500/50 hover:bg-wimate-50 dark:hover:bg-slate-800/80"
                >
                  <span>
                    <span className="block font-display text-lg font-semibold text-ink-800 dark:text-slate-100">
                      {s.featuresCta.label}
                    </span>
                    <span className="mt-1 block text-sm text-ink-600 dark:text-slate-400">
                      Explore the Cloudtesla IoT platform powering this solution.
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 text-wimate-600 dark:text-wimate-400 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            </div>
          )}
        </div>

        {/* Benefits */}
        <div className="mt-12">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 dark:text-slate-100 sm:text-3xl">
              Benefits
            </h3>
          </Reveal>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {s.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.04}>
                <div className="card card-hover h-full p-4 text-sm text-ink-700 dark:text-slate-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-wimate-600 dark:text-wimate-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Why Us */}
        <div className="mt-12">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 dark:text-slate-100 sm:text-3xl">
              Why Us?
            </h3>
          </Reveal>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.04}>
                <div className="card card-hover h-full p-6">
                  <h4 className="h-display text-base font-semibold text-ink-800 dark:text-slate-100">{w.title}</h4>
                  <p className="mt-2 text-sm text-ink-600 dark:text-slate-400">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Industries deployed (Industry 4.0 only) */}
        {s.industries && (
          <div className="mt-12">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 dark:text-slate-100 sm:text-3xl">
                Deployed in the following industries
              </h3>
            </Reveal>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {s.industries.map((ind, i) => (
                <Reveal key={ind.name} delay={i * 0.04}>
                  <div className="group relative overflow-hidden rounded-2xl ring-1 ring-paper-200 dark:ring-slate-800 bg-white dark:bg-slate-900 shadow-soft-sm">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img src={ind.image} alt={ind.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/65 via-ink-900/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <span className="font-display text-sm font-semibold text-white drop-shadow">
                        {ind.name}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Other Solutions */}
        <div className="mt-12">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 dark:text-slate-100 sm:text-3xl">
              Other Solutions
            </h3>
          </Reveal>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.otherSolutions.map((o, i) => (
              <Reveal key={o.href} delay={i * 0.04}>
                <Link
                  to={o.href}
                  className="group block h-full overflow-hidden rounded-2xl border border-paper-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-soft-sm transition-all hover:border-wimate-500/30 dark:hover:border-wimate-500/50 hover:shadow-soft"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img src={o.image} alt={o.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/10 to-transparent" />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-4">
                    <span className="font-display text-sm font-semibold text-ink-800 dark:text-slate-100">{o.title}</span>
                    <ArrowUpRight className="h-4 w-4 text-wimate-600 dark:text-wimate-400 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ----- page ----- */
export default function Solutions() {
  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40">
        <div className="container-x">
          <div className="chip">Solutions</div>
          <h1 className="mt-4 section-title max-w-4xl">
            Turnkey <span className="gradient-text-blue">IoT solutions</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink-600 dark:text-slate-300">
            From the shop floor to the rooftop, our solutions connect assets,
            surface insights and let you act - anywhere, on any device.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`#${s.slug}`}
                  className="rounded-full border border-paper-200 bg-white px-3.5 py-1.5 text-sm font-medium text-ink-800 hover:border-wimate-500/30 hover:bg-wimate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-wimate-500/40 dark:hover:bg-slate-800 dark:text-slate-200"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {solutions.map((s) => (
        <SolutionBlock key={s.slug} s={s} />
      ))}
    </>
  );
}

