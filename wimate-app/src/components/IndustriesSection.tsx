import {
  Factory,
  Car,
  Building2,
  Zap,
  Droplets,
  HeartPulse,
  Truck,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";
import Section from "./Section";
import { Link } from "react-router-dom";
import { industries } from "../data/content";

const iconMap: any = { Factory, Car, Building2, Zap, Droplets, HeartPulse, Truck };

export default function IndustriesSection() {
  return (
    <Section
      id="industries"
      eyebrow="Industries we serve"
      title={
        <>
          Built for <span className="gradient-text-blue">the real world.</span>
        </>
      }
      subtitle="From the shop floor to the smart city — WiMate's hardware and platform power operations across industries."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => {
          const Icon = iconMap[ind.icon] ?? Factory;
          return (
            <Reveal key={ind.name} delay={i * 0.04}>
              <Link
                to="/industries"
                className="group card card-hover relative flex items-center justify-between gap-3 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-wimate-50 text-wimate-600 ring-1 ring-wimate-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-800">{ind.name}</div>
                    <div className="text-xs text-ink-500">IIoT solutions</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-ink-400 group-hover:text-wimate-600 transition-colors" />
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
