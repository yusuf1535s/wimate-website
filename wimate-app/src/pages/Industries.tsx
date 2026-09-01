import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

type Row = {
  segment: string;
  description: string;
  industries: string;
  image: string;
  href: string;
};

const ROWS: Row[] = [
  {
    segment: "Building Management",
    description: "Centralized monitoring and control at the equipment level — over 20,00,000 sq ft monitored to date.",
    industries: "IT, Retail, Shopping malls, Hospitals, Industrial buildings, Educational institutes, Hotels, Apartments, Govt. buildings & campuses",
    image: "/wimate/solutions/bms.png",
    href: "/solutions#building-management",
  },
  {
    segment: "Industry 4.0",
    description: "Production process monitoring, predictive maintenance, and storage condition monitoring — built for brownfield factories.",
    industries: "Metalworks, Plastic injection molding, Textile, Automotive",
    image: "/wimate/solutions/industry-4.png",
    href: "/solutions#industry-4-0",
  },
  {
    segment: "RO Plant Monitoring",
    description: "Maximum uptime and the highest quality water — energy, water, conductivity, TDS, pH and plant status on one console.",
    industries: "Water Vending Operators, Real estate, Hotels, Hospitals, Industrial plants",
    image: "/wimate/solutions/ro-plant.png",
    href: "/solutions#ro-plant",
  },
  {
    segment: "Sewage Treatment Plant",
    description: "Membrane bioreactor, activated sludge process, extended aeration and logging — instrumented on the Cloudtesla platform.",
    industries: "Municipal STPs, Industrial STPs, Real estate, Hospitals, Hotels",
    image: "/wimate/solutions/stp.png",
    href: "/solutions#stp-monitoring",
  },
  {
    segment: "Energy Management",
    description: "Voltage, current, power, energy, power factor, Wh, VAh — measured at the meter level, building 1 GWh / day.",
    industries: "IT parks, Manufacturing, Hospitals, Shopping malls, Hotels, Apartments, Govt. buildings",
    image: "/wimate/solutions/energy.png",
    href: "/solutions#energy-management",
  },
  {
    segment: "Machine Health Monitoring",
    description: "24x7 monitoring of critical parameters and AI-driven failure prediction — for the line and the kiosk.",
    industries: "Manufacturing, Water ATM, Maintenance service providers",
    image: "/wimate/solutions/machine-health.png",
    href: "/solutions#machine-health",
  },
  {
    segment: "Connected Logistics",
    description: "Real-time location, cargo cabin conditions, driver behavior, geofencing, collision and vibration alerts.",
    industries: "Cold storage vehicles, Cargo trucks, Earthmoving machinery, Goods wagons",
    image: "/wimate/solutions/logistics.png",
    href: "/solutions#connected-logistics",
  },
  {
    segment: "Asset Management & Ticketing",
    description: "3-click ticketing, auto-assignment, scheduled maintenance, SLA tracking, and an iOS / Android app.",
    industries: "OEMs, Onsite service providers, AMC providers, Facility managers",
    image: "/wimate/solutions/asset-ticketing.png",
    href: "/solutions#asset-management-ticketing",
  },
];

export default function Industries() {
  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40">
        <div className="container-x">
          <div className="chip">Industries</div>
          <h1 className="mt-4 section-title max-w-4xl">
            Industries <span className="gradient-text-blue">we serve</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink-600">
            Real deployments across building management, manufacturing, water, energy and logistics.
          </p>
        </div>
      </section>

      <Section eyebrow="By solution" title="The industries behind every WiMate deployment" className="!pt-0">
        <div className="grid gap-5 lg:grid-cols-2">
          {ROWS.map((r, i) => (
            <Reveal key={r.segment} delay={i * 0.04}>
              <Link
                to={r.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-paper-200 bg-white shadow-soft-sm transition-all hover:border-wimate-500/30 hover:shadow-soft sm:flex-row"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-56">
                  <img src={r.image} alt={r.segment} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="h-display text-base font-semibold text-ink-800">{r.segment}</h3>
                  <p className="mt-2 text-sm text-ink-600">{r.description}</p>
                  <div className="mt-3 text-xs font-medium uppercase tracking-widest text-ink-500">
                    Deployed in
                  </div>
                  <p className="mt-1 text-sm text-ink-700">{r.industries}</p>
                  <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-wimate-600 group-hover:text-wimate-700">
                    View solution
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
