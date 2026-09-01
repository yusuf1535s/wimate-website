import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Section from "./Section";
import { process } from "../data/content";

export default function ProcessSection() {
  return (
    <Section
      id="process"
      eyebrow="Implementation process"
      title={
        <>
          From survey to <span className="gradient-text-blue">optimized operations.</span>
        </>
      }
      subtitle="A proven 6-step approach to take you from brownfield chaos to a live, connected operation."
    >
      <div className="relative">
        {/* connector line (desktop) */}
        <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px lg:block">
          <div className="relative h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-paper-300 to-transparent" />
            <motion.div
              initial={{ x: "-30%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
              className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-wimate-500/60 to-transparent"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <div className="card card-hover relative h-full p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-sky-100 to-wimate-100 ring-1 ring-wimate-500/30 text-sm font-semibold text-wimate-700">
                    {p.step}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-wimate-500/30 to-transparent lg:hidden" />
                </div>
                <h3 className="mt-4 h-display text-base font-semibold text-ink-800">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
