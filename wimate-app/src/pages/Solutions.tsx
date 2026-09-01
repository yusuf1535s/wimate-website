import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { solutions, benefitsForYou } from "../data/content";
import * as Icons from "lucide-react";

export default function Solutions() {
  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40">
        <div className="container-x">
          <div className="chip">Solutions</div>
          <h1 className="mt-4 section-title max-w-4xl">
            End-to-end <span className="gradient-text-blue">Industrial IoT solutions.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink-600">
            From the shop floor to the rooftop, our solutions connect assets,
            surface insights and let you act — anywhere, on any device.
          </p>
        </div>
      </section>

      <Section
        id="all"
        eyebrow="All solutions"
        title="A solution for every operational outcome."
        subtitle="Plug & play hardware, secure cloud platform, analytics and remote control — across eight core solution areas."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Factory;
            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <article
                  id={s.slug}
                  className="card card-hover relative h-full overflow-hidden p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-sky-100 to-wimate-50 ring-1 ring-wimate-500/20 text-wimate-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="h-display text-lg font-semibold text-ink-800">
                        {s.title}
                      </h3>
                      <p className="text-xs text-ink-500">{s.short}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-ink-700">{s.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-ink-700">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-wimate-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-wimate-600 hover:text-wimate-700"
                  >
                    Discuss this solution <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        id="benefits"
        eyebrow="Benefits for you"
        title="Built for the people who actually run operations."
        subtitle="Whether you're a consultant, integrator, manufacturer, software provider or AMC — WiMate has a path for you."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefitsForYou.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="card card-hover h-full p-6">
                <h3 className="h-display text-base font-semibold text-ink-800">
                  {b.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink-700">
                  {b.bullets.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-wimate-500" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
