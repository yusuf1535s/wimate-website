import { motion } from "framer-motion";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { stats, clients } from "../data/content";
import Section from "./Section";

export default function Trusted() {
  return (
    <Section
      id="trusted"
      eyebrow="Trusted by Industry"
      title={
        <>
          Powering operations at <span className="gradient-text-blue">India's most demanding</span> enterprises.
        </>
      }
      subtitle="From global OEMs to smart buildings, manufacturers and municipal infrastructure — WiMate is the trusted IIoT backbone."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => {
          const numeric = parseFloat(String(s.value).replace(/[^0-9.]/g, "")) || 0;
          return (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="card card-hover h-full p-5">
                <div className="font-display text-3xl sm:text-4xl font-semibold text-ink-800">
                  <CountUp to={numeric} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-ink-600">{s.label}</div>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-paper-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" + `${i * 5}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.05 }}
                    className="h-full bg-gradient-to-r from-sky-500 to-wimate-600"
                  />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 rounded-2xl border border-paper-200 bg-white py-6 overflow-hidden shadow-soft-sm">
          <div className="px-6 text-xs uppercase tracking-[0.25em] text-ink-500">
            Clients who trust our products & solutions
          </div>
          <div className="mt-5 relative mask-fade-x">
            <div className="flex animate-marquee gap-12 whitespace-nowrap will-change-transform">
              {[...clients, ...clients].map((c, i) => (
                <div
                  key={`${c.name}-${i}`}
                  className="flex items-center text-lg sm:text-xl font-display font-semibold tracking-tight text-ink-500 hover:text-wimate-600 transition-colors"
                >
                  <img
                    src={c.image}
                    alt={c.name} className="h-8 w-8 rounded mr-3"
                  />
                  {c.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
