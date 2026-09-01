import Reveal from "./Reveal";
import Section from "./Section";
import { products, type Product } from "../data/content";
import GatewaySVG from "./svgs/Gateway";
import HmiSVG from "./svgs/Hmi";
import IoCardSVG from "./svgs/IoCard";
import SensorSVG from "./svgs/Sensor";

function pickSVG(category: string) {
  switch (category) {
    case "Connectivity":
      return GatewaySVG;
    case "HMI & IO":
      return HmiSVG;
    case "Sensors":
      return SensorSVG;
    default:
      return IoCardSVG;
  }
}

export default function Hardware() {
  const gateways = products.filter((p) => p.category === "Connectivity");
  const hmis = products.filter((p) => p.category === "HMI & IO");
  const sensors = products.filter((p) => p.category === "Sensors");

  return (
    <Section
      id="hardware"
      eyebrow="Hardware Ecosystem"
      title={
        <>
          A complete hardware stack, <span className="gradient-text-blue">engineered in India.</span>
        </>
      }
      subtitle="Gateways, HMIs, I/O cards and sensors — designed, developed and manufactured in India. Industrial-grade, plug & play, 18-month warranty."
    >
      <Reveal>
        <ProductGroup title="Gateways" items={gateways} accent="from-sky-100 to-wimate-100" />
      </Reveal>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <ProductGroup
            title="HMI & I/O"
            items={hmis}
            accent="from-sky-100 to-wimate-50"
            compact
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ProductGroup
            title="Sensors"
            items={sensors}
            accent="from-wimate-50 to-sky-50"
            compact
          />
        </Reveal>
      </div>
    </Section>
  );
}

function ProductGroup({
  title,
  items,
  accent,
  compact = false,
}: {
  title: string;
  items: Product[];
  accent: string;
  compact?: boolean;
}) {
  return (
    <div className="card relative overflow-hidden p-5 sm:p-6">
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br ${accent} blur-3xl opacity-80`}
      />
      <div className="relative flex items-center justify-between">
        <h3 className="h-display text-lg font-semibold text-ink-800">{title}</h3>
        <span className="text-[11px] text-ink-500">
          {items.length} products
        </span>
      </div>
      <div
        className={`relative mt-5 grid gap-4 ${
          compact
            ? "sm:grid-cols-2"
            : "sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {items.map((p) => {
          const SVG = pickSVG(p.category);
          return (
            <div
              key={p.slug}
              className="group relative overflow-hidden rounded-2xl border border-paper-200 bg-white p-4 transition-all duration-300 hover:border-wimate-500/40 hover:shadow-soft"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 via-white to-wimate-50 ring-1 ring-paper-200">
                <SVG className="h-full w-full p-4 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-3 flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-ink-800">{p.name}</h4>
                    {p.badge && (
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                          p.badge === "New"
                            ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                            : "bg-wimate-50 text-wimate-700 ring-1 ring-wimate-500/20"
                        }`}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-ink-500">{p.short}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
