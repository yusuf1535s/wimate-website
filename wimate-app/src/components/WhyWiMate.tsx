import { Layers, Cpu, ShieldCheck, Cloud, Headphones, Lock } from "lucide-react";
import Reveal from "./Reveal";
import Section from "./Section";
import { whyWiMate } from "../data/content";

const iconMap: any = { Layers, Cpu, ShieldCheck, Cloud, Headphones, Lock };

export default function WhyWiMate() {
  return (
    <Section
      id="why"
      eyebrow="Why WiMate"
      title={
        <>
          One accountable team. <span className="gradient-text-blue">The full IIoT stack.</span>
        </>
      }
      subtitle="From silicon to cloud, WiMate owns the full stack — so you get a single point of accountability, faster outcomes and zero integration risk."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyWiMate.map((w, i) => {
          const Icon = iconMap[w.icon] ?? Layers;
          return (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="card card-hover h-full p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-sky-100 to-wimate-50 ring-1 ring-wimate-500/20 text-wimate-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 h-display text-lg font-semibold text-ink-800">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {w.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
