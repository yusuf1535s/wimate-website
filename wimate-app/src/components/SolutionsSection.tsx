import { Link } from "react-router-dom";
import {
  Factory,
  Zap,
  Building2,
  Activity,
  Truck,
  Package,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";
import Section from "./Section";
import { solutions } from "../data/content";

const iconMap = {
  Factory,
  Zap,
  Building2,
  Activity,
  Truck,
  Package,
  Droplets: Factory,
  Waves: Activity,
};

export default function SolutionsSection() {
  const featured = solutions.slice(0, 6);
  return (
    <Section
      id="solutions"
      eyebrow="Our Solutions"
      title={
        <>
          One platform. <span className="gradient-text-blue">Every industrial outcome.</span>
        </>
      }
      subtitle="Pre-built solutions that take you from brownfield chaos to live, connected operations in weeks — not quarters."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((s, i) => {
          const Icon = (iconMap as any)[s.icon] ?? Factory;
          return (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to={`/solutions#${s.slug}`}
                className="group card card-hover relative block h-full overflow-hidden p-6"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-100 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-sky-100 to-wimate-50 ring-1 ring-wimate-500/20 text-wimate-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <h3 className="h-display text-lg font-semibold text-ink-800">
                      {s.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-ink-400 group-hover:text-wimate-600 transition-colors" />
                  </div>
                  <p className="mt-1 text-sm text-ink-500">{s.short}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700">
                    {s.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-ink-700">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wimate-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
