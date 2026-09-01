import { Link } from "react-router-dom";
import { CheckCircle2, FileText, BookOpen, HelpCircle } from "lucide-react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { products as wProducts, type Product as WProduct, type ProductSpecGroup, type ProductSpecRow } from "../data/wimate";
import { solutions } from "../data/wimate";

/* ---------- Helpers ---------- */
function SpecTable({ rows }: { rows: ProductSpecRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-paper-200 bg-white shadow-soft-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.label}
                className={i !== rows.length - 1 ? "border-b border-paper-200" : ""}
              >
                <td className="w-2/5 px-4 py-3 font-medium text-ink-800 sm:px-6">{r.label}</td>
                <td className="px-4 py-3 text-ink-700 sm:px-6">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SpecGroups({ groups }: { groups: ProductSpecGroup[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {groups.map((g) => (
        <div
          key={g.group}
          className="overflow-hidden rounded-2xl border border-paper-200 bg-white shadow-soft-sm"
        >
          <div className="bg-paper-50 px-4 py-2.5 text-sm font-semibold text-ink-800 sm:px-6">
            {g.group}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <tbody>
                {g.rows.map((r, i) => (
                  <tr
                    key={r.label}
                    className={i !== g.rows.length - 1 ? "border-b border-paper-200" : ""}
                  >
                    <td className="w-2/5 px-4 py-2.5 font-medium text-ink-800 sm:px-6">{r.label}</td>
                    <td className="px-4 py-2.5 text-ink-700 sm:px-6">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Per-product section ---------- */
function ProductSection({ product }: { product: WProduct }) {
  return (
    <article id={product.slug} className="relative scroll-mt-28 border-t border-paper-200 first:border-t-0">
      <div className="container-x py-12 sm:py-16 lg:py-20">
        <Reveal>
          <h2 className="section-title max-w-4xl">
            {product.title}
            {product.badge && (
              <span
                className={`ml-3 align-middle rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                  product.badge === "New"
                    ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                    : "bg-wimate-50 text-wimate-700 ring-1 ring-wimate-500/20"
                }`}
              >
                {product.badge}
              </span>
            )}
          </h2>
        </Reveal>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <p className="text-base sm:text-lg leading-relaxed text-ink-700">
              {product.description}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-paper-200">
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Features */}
        <div className="mt-12">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 sm:text-3xl">
              Features
            </h3>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {product.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[15px] text-ink-800"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-wimate-50 text-wimate-600 ring-1 ring-wimate-500/20">
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Architecture */}
        {product.architecture && (
          <div className="mt-12">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 sm:text-3xl">
                Architecture
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-5 overflow-hidden rounded-3xl ring-1 ring-paper-200 shadow-soft">
                <img
                  src={product.architecture}
                  alt={`${product.title} architecture`}
                  loading="lazy"
                  className="w-full object-contain"
                />
              </div>
            </Reveal>
          </div>
        )}

        {/* Specs */}
        {(product.specs || product.specGroups) && (
          <div className="mt-12">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 sm:text-3xl">
                Specifications
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-5">
                {product.specGroups ? (
                  <SpecGroups groups={product.specGroups} />
                ) : (
                  <SpecTable rows={product.specs!} />
                )}
              </div>
            </Reveal>
          </div>
        )}

        {/* Applications */}
        {product.applications && (
          <div className="mt-12">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 sm:text-3xl">
                Applications
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {product.applications.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2.5 text-[15px] text-ink-800"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wimate-500" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        )}

        {/* Variants */}
        {product.variants && (
          <div className="mt-12">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 sm:text-3xl">
                Variants
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="mt-5 space-y-2 text-[15px] text-ink-800">
                {product.variants.map((v) => (
                  <li
                    key={v}
                    className="flex items-start gap-2.5"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wimate-500" />
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
            {product.variantsNote && (
              <Reveal delay={0.12}>
                <p className="mt-4 rounded-2xl border border-paper-200 bg-paper-50 p-4 text-sm leading-relaxed text-ink-700">
                  {product.variantsNote}
                </p>
              </Reveal>
            )}
          </div>
        )}

        {/* Notes */}
        {product.notes?.map((n, i) => (
          <Reveal key={i} delay={0.05}>
            <p className="mt-6 rounded-2xl border border-paper-200 bg-paper-50 p-4 text-sm leading-relaxed text-ink-700">
              {n}
            </p>
          </Reveal>
        ))}

        {/* Product documentation */}
        <div className="mt-12">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-800 sm:text-3xl">
              Product documentation
            </h3>
          </Reveal>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Datasheet", icon: FileText, desc: "Detailed electrical, environmental and connectivity specs." },
              { title: "Catalog", icon: BookOpen, desc: "Full product family comparison and ordering info." },
              { title: "User manual", icon: HelpCircle, desc: "Installation, configuration and troubleshooting guide." },
            ].map((d, i) => (
              <Reveal key={d.title} delay={i * 0.04}>
                <Link
                  to="/contact"
                  className="card card-hover group block h-full p-6"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-sky-100 to-wimate-50 ring-1 ring-wimate-500/20 text-wimate-600">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <h4 className="h-display mt-4 text-base font-semibold text-ink-800">
                    {d.title}
                  </h4>
                  <p className="mt-2 text-sm text-ink-600">{d.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-wimate-600 group-hover:text-wimate-700">
                    Contact us
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- Page ---------- */
export default function Products() {
  const connectivity = wProducts.filter((p) => p.category === "Connectivity");
  const hmi = wProducts.filter((p) => p.category === "HMI & IO");
  const sensors = wProducts.filter((p) => p.category === "Sensors");

  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-12 sm:pt-40">
        <div className="container-x">
          <div className="chip">Products</div>
          <h1 className="mt-4 section-title max-w-4xl">
            Industrial <span className="gradient-text-blue">IoT hardware</span> built in India
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink-600">
            Unifier gateways, HMIs & I/O cards, and WiSense sensors. Designed,
            developed and manufactured in India. 18-month replacement warranty.
          </p>
        </div>
      </section>

      {/* Connectivity */}
      <div id="gateways" className="bg-paper-50/60">
        <Section
          eyebrow="Connectivity"
          title="Unifier Gateways & Wi-Link"
          subtitle="Industrial-grade 3G/4G, sensing and multiport gateways, plus out-of-the-box RS485 wire replacement."
        >
          <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {connectivity.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`#${p.slug}`}
                  className="card card-hover group flex h-full items-center justify-between p-4"
                >
                  <span className="text-sm font-medium text-ink-800">{p.title}</span>
                  <span className="text-xs text-wimate-600 group-hover:text-wimate-700">View</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
      {connectivity.map((p) => (
        <ProductSection key={p.slug} product={p} />
      ))}

      {/* HMI & IO */}
      <div id="hmi" className="bg-paper-50/60">
        <Section
          eyebrow="HMI & IO"
          title="Touchscreen HMIs and IO cards"
          subtitle="Modbus-based touchscreens and four-in-one IO cards for BMS and industrial automation."
        >
          <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {hmi.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`#${p.slug}`}
                  className="card card-hover group flex h-full items-center justify-between p-4"
                >
                  <span className="text-sm font-medium text-ink-800">{p.title}</span>
                  <span className="text-xs text-wimate-600 group-hover:text-wimate-700">View</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
      {hmi.map((p) => (
        <ProductSection key={p.slug} product={p} />
      ))}

      {/* Sensors */}
      <div id="sensors" className="bg-paper-50/60">
        <Section
          eyebrow="Sensors"
          title="WiSense Sensors"
          subtitle="Temperature, humidity, CO2, vibration and occupancy sensors with optional wireless mesh."
        >
          <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {sensors.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`#${p.slug}`}
                  className="card card-hover group flex h-full items-center justify-between p-4"
                >
                  <span className="text-sm font-medium text-ink-800">{p.title}</span>
                  <span className="text-xs text-wimate-600 group-hover:text-wimate-700">View</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
      {sensors.map((p) => (
        <ProductSection key={p.slug} product={p} />
      ))}

      {/* WiMate Cloud (matches wimate.in's products page footer panel) */}
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Cloud or on-premise", d: "Run on the secure WiMate cloud or deploy on-premise - your data, your control." },
            { t: "Dynamic dashboards", d: "Build dashboards per site, asset, line or role - without writing a line of code." },
            { t: "Alerts & remote control", d: "Configurable thresholds with email, SMS and in-app alerts, plus remote control of devices." },
            { t: "Open APIs", d: "REST APIs and webhooks to integrate with your ERP, BMS, MES or custom software." },
            { t: "256-bit SSL", d: "Encrypted at rest and in transit with role-based access and full audit logs." },
            { t: "Multi-site", d: "Manage 1 site or 1,000 sites from a single console with site-level permissions." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 0.04}>
              <div className="card card-hover h-full p-6">
                <h3 className="h-display text-base font-semibold text-ink-800">{f.t}</h3>
                <p className="mt-2 text-sm text-ink-700">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/cloudtesla"
            className="inline-flex items-center gap-2 rounded-full bg-wimate-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-wimate-600"
          >
            Read more on the IoT platform
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
        <p className="mt-4 text-center text-[11px] uppercase tracking-wider text-ink-500">
          Read about {solutions.length} turnkey solutions
        </p>
      </Section>
    </>
  );
}
