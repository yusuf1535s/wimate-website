import {
  Factory, Car, Building2, Zap, Droplets, HeartPulse, Truck, ArrowUpRight,
} from "lucide-react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    short: "OEE, downtime, energy & quality",
    description:
      "Connect PLCs, CNCs, compressors and utilities to a single platform. Live OEE, operator efficiency, energy and predictive maintenance — across every line and every shift.",
    points: ["Production count & downtime", "Operator & shift efficiency", "Predictive maintenance", "Energy, water, compressed air"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Car,
    name: "Automotive",
    short: "Tier-1 visibility & uptime",
    description:
      "From body shop to paint shop, WiMate gateways and sensors keep automotive plants connected — with shift-level dashboards and SLA-grade reliability.",
    points: ["Machine health monitoring", "Robotic line uptime", "Energy per vehicle", "Tool & fixture tracking"],
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Building2,
    name: "Buildings",
    short: "Smart BMS for facilities teams",
    description:
      "Unify HVAC, lighting, occupancy and air-quality data across one building or a portfolio. Replace legacy EMS/BMS at a fraction of the cost.",
    points: ["IAQ — Temp, RH, CO₂", "Occupancy-driven control", "Central portfolio view", "Tenant comfort score"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Zap,
    name: "Energy",
    short: "Metering, monitoring, optimization",
    description:
      "Measure electricity, gas, steam and renewable output across plants and distributed sites. Tariff analytics, demand response and sustainability reporting.",
    points: ["Multi-utility metering", "Demand & tariff analytics", "Renewable integration", "ESG reporting"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Droplets,
    name: "Water",
    short: "RO, STP & network monitoring",
    description:
      "Continuous monitoring of water treatment plants, RO performance and pressure across distribution networks — with instant alerts and compliance reports.",
    points: ["TDS, pH, flow, pressure", "RO & STP uptime", "Network monitoring", "Compliance-ready reports"],
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    short: "Hospitals, labs, cold chain",
    description:
      "Monitor temperature-critical storage, pharma cold chain, hospital utilities and lab environments — with audit trails and instant alerts.",
    points: ["Cold chain monitoring", "Hospital utilities", "Lab environment", "Audit & compliance"],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Truck,
    name: "Logistics",
    short: "Connected fleet & assets",
    description:
      "Real-time location, condition and utilization for vehicles, containers and high-value assets — across the supply chain.",
    points: ["Real-time tracking", "Geofencing & routes", "Cold-chain & condition", "SLA dashboards"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Industries() {
  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40">
        <div className="container-x">
          <div className="chip">Industries</div>
          <h1 className="mt-4 section-title max-w-4xl">
            Built for <span className="gradient-text-blue">the real world.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink-600">
            From the shop floor to the smart city — WiMate's hardware and platform
            power operations across seven core industries.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Industries we serve"
        title="One platform. Every industry."
        className="!pt-0"
      >
        <div className="space-y-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.04}>
              <article
                className={`card relative grid items-stretch overflow-hidden lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[200px] overflow-hidden lg:min-h-[300px]">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-wimate-500/30 bg-white/90 px-3 py-1 text-xs text-wimate-700 backdrop-blur">
                    <ind.icon className="h-3.5 w-3.5" /> {ind.name}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="h-display text-2xl font-semibold text-ink-800">
                    {ind.name}
                  </h2>
                  <p className="mt-1 text-sm text-wimate-600">{ind.short}</p>
                  <p className="mt-4 text-ink-700">{ind.description}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink-800">
                    {ind.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-wimate-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-wimate-600 hover:text-wimate-700"
                  >
                    Discuss {ind.name.toLowerCase()} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
