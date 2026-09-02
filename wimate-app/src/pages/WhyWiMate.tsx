import { Link } from "react-router-dom";
import { ShieldCheck, Cloud, Wrench, Headphones, Wallet, Users, ArrowRight } from "lucide-react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { aboutPage, clients } from "../data/wimate";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/* Page-scoped count-up */
function CountUp({ to, duration = 1400 }: { to: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const cleaned = to.replace(/[^0-9.]/g, "");
    const num = parseFloat(cleaned);
    if (!isFinite(num)) {
      setVal(to);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = Math.round(num * eased);
      const display = cleaned.includes(".")
        ? cur.toString()
        : cur.toLocaleString("en-IN");
      setVal(to.replace(/[0-9.,]+/, display));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{val}</span>;
}

const ICONS = {
  "We're Experienced Professionals": Users,
  "Reliable Hardware": ShieldCheck,
  "Innovative Software": Cloud,
  "Turnkey Solution": Wrench,
  "Customer support": Headphones,
  "Competitive Cost": Wallet,
};

const STATS = [
  { label: "Data points monitored per day", value: "496,864" },
  { label: "Energy measured everyday", value: "1GWh+" },
  { label: "Devices in field", value: "5,500+" },
  { label: "Satisfied Customers", value: "20+" },
];

export default function WhyWiMate() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="container-x pt-32 sm:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-500 dark:text-slate-400">
          <ol className="flex items-center gap-1.5">
            <li><Link to="/" className="hover:text-wimate-600">Home</Link></li>
            <li aria-hidden>/</li>
            <li className="text-ink-700 dark:text-white">About Us</li>
          </ol>
        </nav>
      </div>

      {/* Intro + image */}
      <section className="relative pt-6 pb-12">
        <div className="container-x">
          <Reveal>
            <h1 className="section-title max-w-4xl">About Us</h1>
          </Reveal>
          <div className="mt-6 grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <p className="text-base sm:text-lg leading-relaxed text-ink-700 dark:text-white">
                {aboutPage.intro}
              </p>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-700 dark:text-white">
                <Link to="/cloudtesla" className="font-semibold text-wimate-600 hover:text-wimate-700">Cloudtesla</Link>
                {" "}
                {aboutPage.cloudtesla.replace(/^Cloudtesla\s+/, "")}
              </p>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-700 dark:text-white">
                <Link to="/products#unifier-300" className="font-semibold text-wimate-600 hover:text-wimate-700">Unifier</Link>
                {" "}
                {aboutPage.unifier.replace(/^\*?\*?Unifier\s+/, "").replace(/\*?\*?$/, "")}
              </p>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={0.1}>
              <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-paper-200">
                <img src={aboutPage.ourTeamImage} alt="Our team" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="relative py-12 sm:py-16">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-3xl ring-1 ring-paper-200 shadow-soft bg-white">
              <img src={aboutPage.iotImage} alt="Internet of things" loading="lazy" className="h-auto w-full object-contain" />
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Our Vision", body: aboutPage.vision },
              { title: "Our Mission", body: aboutPage.mission },
              { title: "Core Values", body: aboutPage.coreValues },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="card card-hover h-full p-6">
                  <h3 className="h-display text-lg font-semibold text-ink-800 dark:text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-white">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section eyebrow="Why Choose Us" title="Why Choose Us?">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPage.whyChoose.map((w, i) => {
            const Icon = ICONS[w.title as keyof typeof ICONS] ?? ShieldCheck;
            return (
              <Reveal key={w.title} delay={i * 0.04}>
                <div className="card card-hover h-full p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-sky-100 to-wimate-50 ring-1 ring-wimate-500/20 text-wimate-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="h-display mt-4 text-base font-semibold text-ink-800 dark:text-white">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-white">{w.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Statistics */}
      <section className="relative py-12 sm:py-16">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-br from-wimate-500 to-sky-700 px-6 py-10 sm:px-10 sm:py-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.05}>
                  <div className="text-center text-white">
                    <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl">
                      <CountUp to={s.value} />
                    </div>
                    <div className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-white/80">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Solutions */}
      <Section eyebrow="Turnkey Solutions" title="Turnkey Solutions">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutPage.turnkey.map((t, i) => (
            <Reveal key={t.href} delay={i * 0.04}>
              <Link
                to={t.href}
                className="group block h-full overflow-hidden rounded-2xl border border-paper-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-soft-sm transition-all hover:border-wimate-500/30 dark:hover:border-wimate-500/50 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img src={t.image} alt={t.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/10 to-transparent" />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <span className="font-display text-sm font-semibold text-ink-800 dark:text-slate-100">{t.name}</span>
                  <ArrowRight className="h-4 w-4 text-wimate-600 dark:text-wimate-400 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Clients who trust us */}
      <Section
        eyebrow="Clients who trust us"
        title="Clients who trust our products &amp; solutions"
        align="center"
      >
        <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
          {aboutPage.trustLogos.map((name) => {
            const client = clients.find((c) => c.name === name);
            if (!client) return null;
            return (
              <li key={name} className="flex items-center justify-center" title={name}>
                <div className="grid h-16 w-full place-items-center rounded-xl border border-paper-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
                  <img src={client.image} alt={name} loading="lazy" className="max-h-10 w-auto max-w-[150px] object-contain" />
                </div>
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
}
