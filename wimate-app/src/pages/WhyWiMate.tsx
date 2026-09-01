import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Cloud,
  Cpu,
  ShieldCheck,
  Wrench,
  Headphones,
  Wallet,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { useInView } from "framer-motion";
import { clients } from "../data/content";

/* -------------------------------------------------------------------------- */
/* Page-scoped helpers — do not affect other pages                            */
/* -------------------------------------------------------------------------- */

function CountUp({
  to,
  duration = 1400,
}: {
  to: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{Math.round(val).toLocaleString("en-IN")}</span>;
}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

const STATS = [
  { value: 496864, suffix: "", label: "Data points monitored per day" },
  { value: 1, suffix: "GWh+", label: "Energy measured everyday" },
  { value: 5500, suffix: "+", label: "Devices in field" },
  { value: 20, suffix: "+", label: "Satisfied Customers" },
];

const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "We're Experienced Professionals",
    description:
      "100+ years of team experience in deploying IoT solutions in IT, Manufacturing, Real estate, Hospitality, BMS & EMS.",
  },
  {
    icon: Cpu,
    title: "Reliable Hardware",
    description:
      "Time tested, high quality, designed, developed and manufactured in India. 18 months of replacement warranty.",
  },
  {
    icon: Cloud,
    title: "Innovative Software",
    description:
      "Easy to use, highly scalable and cloud-based IoT platform with dynamic dashboards, reports, remote control, email & SMS alerts.",
  },
  {
    icon: Wrench,
    title: "Turnkey Solution",
    description:
      "End to end covering hardware supply, cloud platform hosting, installation, commissioning and maintenance.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "24×7 phone, email and on-site support backed by an in-house team that owns the full stack.",
  },
  {
    icon: Wallet,
    title: "Competitive Cost",
    description:
      "Cloud subscription charges per month and hardware prices that are best in the industry.",
  },
] as const;

type TurnkeySolution = { name: string; to: string; image: string };

const TURNKEY_SOLUTIONS: TurnkeySolution[] = [
  {
    name: "Building Management",
    to: "/solutions#building-management",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Energy Management",
    to: "/solutions#energy-management",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Production Monitoring",
    to: "/solutions#industry-4-0",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Machine Health",
    to: "/solutions#machine-health",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "RO Plant Monitoring",
    to: "/solutions#ro-water",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sewage Treatment Plant",
    to: "/solutions#stp-monitoring",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Smart Logistics",
    to: "/solutions#smart-logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Asset Mgmt. & Ticketing",
    to: "/solutions#asset-management",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
  },
];

const TRUST_LOGOS = ["IBM", "Bosch", "Toyota", "ITC Limited"] as const;

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function WhyWiMatePage() {
  return (
    <>
      {/* ---------------- Page heading + breadcrumb ---------------- */}
      <section className="relative pt-32 pb-10 sm:pt-40 sm:pb-12">
        <div className="container-x">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="text-xs font-medium text-ink-500"
            >
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link to="/" className="hover:text-wimate-600">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-ink-700">About Us</li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={0.06} as="header">
            <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-800">
              About Us
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Introduction ---------------- */}
      <Section className="!pt-0">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="space-y-5 text-[15px] sm:text-base leading-relaxed text-ink-700">
              <p>
                We believe that the world around us can be simple. The same
                ideology runs through our approach, products and solutions.
              </p>
              <p>
                We recognized the need in the market for cost effective and
                reliable IoT Hardware &amp; Software platform so formed a lean
                startup focused on developing and deploying turnkey solutions
                using Internet of Things (IoT). Our customers range from
                micro, small and medium scale enterprises to multi national
                companies.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-paper-200 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Our team"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        {/* Cloudtesla + Unifier paragraphs with inline links to existing routes */}
        <Reveal className="mt-12">
          <div className="rounded-3xl border border-paper-200 bg-white p-6 sm:p-8 shadow-soft-sm">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="chip">
                  <Cloud className="h-3.5 w-3.5" />
                  Cloud Platform
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink-800">
                  Cloudtesla
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                  <span className="font-semibold text-wimate-600">
                    Cloudtesla
                  </span>{" "}
                  is an easy to use and affordable cloud-based IoT platform for
                  managing thousands of machinery and plants across the globe.
                  It has helped numerous customers ranging from small
                  businesses to multinational companies to streamline complex
                  processes, monitor the machinery, maximize the uptime and
                  save on the operational expenses by up to{" "}
                  <span className="font-semibold text-wimate-600">60%</span>.
                </p>
              </div>
              <div>
                <div className="chip">
                  <Cpu className="h-3.5 w-3.5" />
                  Gateway
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink-800">
                  <Link
                    to="/products#unifier-300"
                    className="hover:text-wimate-600"
                  >
                    Unifier
                  </Link>{" "}
                  gateway platform
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                  The{" "}
                  <Link
                    to="/products#unifier-300"
                    className="font-semibold text-wimate-600 hover:text-wimate-700"
                  >
                    Unifier
                  </Link>{" "}
                  gateway platform has various models with different
                  communication capabilities such as Ethernet, 3G, 4G, Wi-Fi,
                  RS485, Zigbee which helps our customers to achieve
                  uninterrupted communication between the motes/field devices
                  and the hosted application platform.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- Vision / Mission / Core Values ---------------- */}
      <Section
        eyebrow="Our Team"
        title="What drives us"
        subtitle="A small, focused team obsessed with making industrial operations simpler, smarter and more reliable."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              tag: "Our Vision",
              body: "To be the global leader in making people's life easier.",
            },
            {
              tag: "Our Mission",
              body:
                "To empower our customers with user-friendly and affordable IoT solutions, designed to enhance operational efficiency. We commit to continuous improvement and exceptional support to ensure our users can achieve measurable success and sustainability goals.",
            },
            {
              tag: "Core Values",
              body: "Integrity, Excellence, Agility and Ownership.",
            },
          ].map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.06}>
              <div className="card card-hover h-full p-7">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-wimate-600">
                  {c.tag}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-800">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Why Choose Us ---------------- */}
      <Section
        eyebrow="Why Choose Us"
        title="A team that owns the full IIoT stack."
        subtitle="Hardware, software, deployment and support — all from a single accountable team."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((w, i) => {
            const Icon: LucideIcon = w.icon;
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

      {/* ---------------- Statistics ---------------- */}
      <Section
        eyebrow="By the numbers"
        title="Operating at industrial scale."
        align="center"
      >
        <div className="rounded-3xl border border-wimate-500/15 bg-gradient-to-br from-sky-50 via-white to-wimate-50 p-6 shadow-soft sm:p-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="text-center sm:text-left">
                  <div className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink-800">
                    {s.value >= 100 ? <CountUp to={s.value} /> : s.value}
                    <span className="text-wimate-500">{s.suffix}</span>
                  </div>
                  <div className="mt-2 text-sm text-ink-600">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------- Turnkey Solutions grid ---------------- */}
      <Section
        eyebrow="Turnkey Solutions"
        title="Solutions across every operational outcome."
        subtitle="From the shop floor to the rooftop — end-to-end IIoT solutions, designed to be deployed in weeks."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TURNKEY_SOLUTIONS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <Link
                to={s.to}
                className="group card card-hover relative block h-full overflow-hidden p-0"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800/85 via-ink-800/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-wimate-300">
                      Solution
                    </div>
                    <div className="mt-1 font-display text-base font-semibold text-white">
                      {s.name}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-medium text-ink-700">
                    Learn more
                  </span>
                  <ArrowRight className="h-4 w-4 text-wimate-500 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Clients Who Trust Us ---------------- */}
      <Section
        eyebrow="Clients who trust us"
        title="Trusted by leading enterprises."
        align="center"
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-paper-200 bg-white p-6 shadow-soft-sm sm:p-8">
          <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
            {TRUST_LOGOS.map((name) => {
              const client = clients.find(
                (c) => c.name.toLowerCase() === name.toLowerCase()
              );
              if (!client) return null;
              return (
                <li
                  key={name}
                  className="group flex items-center justify-center"
                  title={name}
                >
                  <div className="grid h-16 w-full place-items-center rounded-xl border border-paper-200 bg-paper-50 px-4 transition-all duration-300 group-hover:border-wimate-500/30 group-hover:bg-white group-hover:shadow-soft">
                    <img
                      src={client.image}
                      alt={name}
                      loading="lazy"
                      className="max-h-9 w-auto max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement;
                        t.style.display = "none";
                        const parent = t.parentElement;
                        if (parent && !parent.querySelector("span")) {
                          const span = document.createElement("span");
                          span.className =
                            "font-display text-sm font-semibold text-ink-700";
                          span.textContent = name;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
    </>
  );
}
