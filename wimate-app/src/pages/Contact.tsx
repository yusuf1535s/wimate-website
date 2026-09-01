import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Loader2, Send, MapPin, Phone, Mail, Building2 } from "lucide-react";
import Reveal from "../components/Reveal";
import { brand, contactPage, distributors } from "../data/wimate";

export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "Sales enquiry",
    message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (state !== "idle") return;
    setState("sending");
    const subject = encodeURIComponent(
      `[${data.subject}] ${data.company || data.name || "WiMate website"}`
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone}\nSubject: ${data.subject}\n\n${data.message}`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setState("sent"), 700);
  };

  return (
    <>
      {/* Hero + breadcrumb (matches wimate.in/contact-us) */}
      <section className="relative pt-32 pb-12 sm:pt-40">
        <div className="container-x">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
              <ol className="flex items-center gap-1.5">
                <li><Link to="/" className="hover:text-wimate-600">Home</Link></li>
                <li aria-hidden>/</li>
                <li className="text-ink-700">Contact Us</li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 section-title max-w-4xl">Contact Us</h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-3xl ring-1 ring-paper-200 shadow-soft">
              <img
                src={contactPage.hero.image}
                alt="Contact WiMate"
                loading="lazy"
                className="aspect-[16/6] w-full object-cover sm:aspect-[16/5]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT — exact WiMate contact block */}
          <Reveal className="lg:col-span-5">
            <div className="space-y-4">
              <div className="card p-6">
                <div className="text-xs uppercase tracking-widest text-ink-500">Contact Us</div>
                <ul className="mt-3 space-y-3 text-sm text-ink-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-wimate-50 text-wimate-600 ring-1 ring-wimate-500/20">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      {contactPage.address.lines.map((l, i) => (
                        <span key={i} className="block">{l}</span>
                      ))}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-wimate-50 text-wimate-600 ring-1 ring-wimate-500/20">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      {contactPage.email.items.map((e) => (
                        <a key={e.value} href={e.href} className="text-wimate-600 hover:text-wimate-700">
                          {e.value}
                        </a>
                      ))}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-wimate-50 text-wimate-600 ring-1 ring-wimate-500/20">
                      <Phone className="h-4 w-4" />
                    </span>
                    <a href={contactPage.phone.href} className="text-wimate-600 hover:text-wimate-700">
                      {contactPage.phone.value}
                    </a>
                  </li>
                </ul>
                <div className="mt-4 border-t border-paper-200 pt-4 text-xs font-medium text-ink-500">
                  {brand.hours}
                </div>
              </div>

              {/* Distributors (matches wimate.in) */}
              <div className="card p-6">
                <div className="text-xs uppercase tracking-widest text-ink-500">Distributors</div>
                <ul className="mt-3 space-y-4 text-sm text-ink-700">
                  {distributors.map((d) => (
                    <li key={d.company} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-wimate-50 text-wimate-600 ring-1 ring-wimate-500/20">
                        <Building2 className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-semibold text-ink-800">{d.city} — {d.company}</span>
                        <span className="block">{d.address}</span>
                        {d.phone && <a href={`tel:${d.phone.replace(/[^0-9+]/g, "")}`} className="block text-wimate-600 hover:text-wimate-700">Ph: {d.phone}</a>}
                        {d.email && <a href={`mailto:${d.email}`} className="block text-wimate-600 hover:text-wimate-700">{d.email}</a>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — enquiry form */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <form onSubmit={onSubmit} className="card relative overflow-hidden p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-sky-100 blur-3xl" />
              <h2 className="h-display relative text-lg font-semibold text-ink-800">Send us a message</h2>
              <p className="relative mt-1 text-sm text-ink-600">
                We will get back within one business day. We will never share your data.
              </p>
              <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" value={data.name} onChange={(v) => setData({ ...data, name: v })} required />
                <Field label="Work email" type="email" value={data.email} onChange={(v) => setData({ ...data, email: v })} required />
                <Field label="Company" value={data.company} onChange={(v) => setData({ ...data, company: v })} />
                <Field label="Phone" value={data.phone} onChange={(v) => setData({ ...data, phone: v })} />
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-ink-500">I'm interested in</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "Sales enquiry",
                      "Product datasheet",
                      "Cloud platform demo",
                      "Partnership",
                      "Support",
                    ].map((v) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => setData({ ...data, subject: v })}
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                          data.subject === v
                            ? "border-wimate-500/40 bg-wimate-50 text-wimate-700"
                            : "border-paper-200 bg-white text-ink-700 hover:border-wimate-500/40"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-ink-500">Tell us about your site / goals</label>
                  <textarea
                    value={data.message}
                    onChange={(e) => setData({ ...data, message: e.target.value })}
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-paper-200 bg-white px-3.5 py-2.5 text-sm text-ink-800 placeholder-ink-400 outline-none transition-colors focus:border-wimate-500/60 focus:ring-2 focus:ring-wimate-500/20"
                    placeholder="e.g. 3 plants, 80 machines, looking to monitor OEE and energy."
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-ink-500">
                  By submitting, you agree to our terms.
                </p>
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="btn-primary disabled:opacity-60"
                >
                  {state === "sending" ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                  ) : state === "sent" ? (
                    <><CheckCircle2 className="h-4 w-4" /> Sent</>
                  ) : (
                    <><Send className="h-4 w-4" /> Send enquiry</>
                  )}
                </button>
              </div>
              <AnimatePresence>
                {state === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                  >
                    Thanks {data.name || "there"} — your mail client should have opened with the details. We'll respond within one business day.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", required }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-ink-500">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-paper-200 bg-white px-3.5 py-2.5 text-sm text-ink-800 placeholder-ink-400 outline-none transition-colors focus:border-wimate-500/60 focus:ring-2 focus:ring-wimate-500/20"
      />
    </div>
  );
}
