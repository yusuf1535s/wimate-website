import { Link } from "react-router-dom";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { ArrowRight } from "lucide-react";

type Deployment = {
  industry: string;
  segment: string;
  image: string;
  href: string;
  description: string;
};

const DEPLOYMENTS: Deployment[] = [
  {
    industry: "IT, Retail, Shopping malls, Hospitals, Industrial buildings",
    segment: "Building Management",
    image: "/wimate/solutions/bms.png",
    href: "/solutions#building-management",
    description:
      "Centralized monitoring and control capabilities at the equipment level. We have covered more than 20,00,000 Square Feet.",
  },
  {
    industry: "Metalworks, Plastic injection molding, Textile, Automotive",
    segment: "Industry 4.0",
    image: "/wimate/solutions/industry-4.png",
    href: "/solutions#industry-4-0",
    description:
      "Centralized monitoring and analytics at the equipment level — production count, operator efficiency, energy, water and fuel consumption.",
  },
  {
    industry: "RO Water Vending & Plants",
    segment: "RO Plant Monitoring",
    image: "/wimate/solutions/ro-plant.png",
    href: "/solutions#ro-plant",
    description:
      "Energy, water and quality monitoring (Conductivity, TDS, pH) along with pump cycles, tank levels, backwash and plant uptime.",
  },
  {
    industry: "Sewage Treatment Plants",
    segment: "Sewage Treatment Plant",
    image: "/wimate/solutions/stp.png",
    href: "/solutions#stp-monitoring",
    description:
      "Membrane bioreactor, activated sludge, extended aeration and logging - monitored end-to-end on the Cloudtesla platform.",
  },
  {
    industry: "IT, Retail, Shopping malls, Hotels, Apartments, Govt. buildings",
    segment: "Energy Management",
    image: "/wimate/solutions/energy.png",
    href: "/solutions#energy-management",
    description:
      "Voltage, current, power, energy, power factor, frequency, Wh, VAh measured at the meter level across 20,00,000 sq ft and 1 GWh / day.",
  },
  {
    industry: "Manufacturing, Water ATM, Maintenance service providers",
    segment: "Machine Health Monitoring",
    image: "/wimate/solutions/machine-health.png",
    href: "/solutions#machine-health",
    description:
      "24x7 monitoring of temperature, vibration, voltage, current, power and energy — AI-driven failure prediction and SLA tracking.",
  },
  {
    industry: "Cold storage vehicles, Cargo trucks, Earthmoving machinery, Goods wagons",
    segment: "Connected Logistics",
    image: "/wimate/solutions/logistics.png",
    href: "/solutions#connected-logistics",
    description:
      "Real-time location, cargo cabin temperature, driver behavior, geofencing, collision detection and predictive maintenance.",
  },
  {
    industry: "OEMs, Onsite service providers, AMC providers, Facility managers",
    segment: "Asset Management & Ticketing",
    image: "/wimate/solutions/asset-ticketing.png",
    href: "/solutions#asset-management-ticketing",
    description:
      "3-click ticket raising, image upload, auto-assignment, SMS / email escalation, scheduled maintenance, iOS / Android app.",
  },
];

export default function CaseStudies() {
  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40">
        <div className="container-x">
          <div className="chip">Deployed in</div>
          <h1 className="mt-4 section-title max-w-4xl">
            Where WiMate is <span className="gradient-text-blue">deployed.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink-600 dark:text-white">
            Real industries, real sites, real WiMate deployments.
          </p>
        </div>
      </section>

      <Section eyebrow="Customer deployments" title="Across the industries we serve" className="!pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DEPLOYMENTS.map((d, i) => (
            <Reveal key={d.segment} delay={i * 0.04}>
              <Link
                to={d.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-paper-200 bg-white shadow-soft-sm transition-all hover:border-wimate-500/30 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img src={d.image} alt={d.segment} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink-800 shadow-soft-sm dark:text-white">
                    {d.segment}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="h-display text-base font-semibold text-ink-800 dark:text-white">{d.industry}</h3>
                  <p className="mt-2 text-sm text-ink-600 dark:text-white">{d.description}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-wimate-600 group-hover:text-wimate-700">
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
