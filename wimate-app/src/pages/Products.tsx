import { Link } from "react-router-dom";
import { ArrowUpRight, Cloud, Layers, Radio, Cpu, ShieldCheck, Globe } from "lucide-react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { products } from "../data/content";
import GatewaySVG from "../components/svgs/Gateway";
import HmiSVG from "../components/svgs/Hmi";
import SensorSVG from "../components/svgs/Sensor";

function pickSVG(category: string) {
  if (category === "Connectivity") return GatewaySVG;
  if (category === "HMI & IO") return HmiSVG;
  return SensorSVG;
}

export default function Products() {
  const groups = [
    { id: "gateways", title: "Connectivity — Unifier Gateways & Wi-Link", items: products.filter(p => p.category === "Connectivity") },
    { id: "hmi", title: "HMI & I/O", items: products.filter(p => p.category === "HMI & IO") },
    { id: "sensors", title: "WiSense Sensors", items: products.filter(p => p.category === "Sensors") },
  ];

  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40">
        <div className="container-x">
          <div className="chip">Products</div>
          <h1 className="mt-4 section-title max-w-4xl">
            Hardware that's <span className="gradient-text-blue">built to last.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink-600">
            Industrial-grade gateways, HMIs, I/O cards and sensors — designed,
            developed and manufactured in India. 18-month replacement warranty.
          </p>
        </div>
      </section>

      {groups.map((g) => (
        <Section
          key={g.id}
          id={g.id}
          eyebrow={g.title}
          title="Plug, connect, monitor."
          subtitle="Industrial form factors, secure firmware, cloud-ready out of the box."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((p, i) => {
              const SVG = pickSVG(p.category);
              return (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <article className="card card-hover h-full overflow-hidden p-5">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 via-white to-wimate-50 ring-1 ring-paper-200">
                      <SVG className="h-full w-full p-5" />
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="h-display text-base font-semibold text-ink-800">
                            {p.name}
                          </h3>
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
                        <p className="text-xs text-ink-500">{p.short}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-ink-700">{p.description}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-wimate-500" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-wimate-600 hover:text-wimate-700"
                    >
                      Request datasheet <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Section>
      ))}

      <Section
        id="cloud"
        eyebrow="WiMate Cloud"
        title={
          <>
            One secure <span className="gradient-text-blue">IIoT platform.</span>
          </>
        }
        subtitle="Dynamic dashboards, reports, remote control, email & SMS alerts. 256-bit SSL, role-based access, on-premise option."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            { icon: Cloud, t: "Cloud or on-premise", d: "Run on the secure WiMate cloud or deploy on-premise — your data, your control." },
            { icon: Layers, t: "Dynamic dashboards", d: "Build dashboards per site, asset, line or role — without writing a line of code." },
            { icon: Radio, t: "Alerts & remote control", d: "Configurable thresholds with email, SMS and in-app alerts, plus remote control of devices." },
            { icon: Cpu, t: "Open APIs", d: "REST APIs and webhooks to integrate with your ERP, BMS, MES or custom software." },
            { icon: ShieldCheck, t: "256-bit SSL", d: "Encrypted at rest and in transit with role-based access and full audit logs." },
            { icon: Globe, t: "Multi-site", d: "Manage 1 site or 1,000 sites from a single console with site-level permissions." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 0.04}>
              <div className="card card-hover h-full p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-wimate-50 text-wimate-600 ring-1 ring-wimate-500/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 h-display text-base font-semibold text-ink-800">{f.t}</h3>
                <p className="mt-2 text-sm text-ink-700">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
