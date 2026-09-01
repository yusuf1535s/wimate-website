import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import Reveal from "./Reveal";
import { brand } from "../data/content";

export default function ContactSection() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    topic: "demo",
    message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (state !== "idle") return;
    setState("sending");
    const subject = encodeURIComponent(
      `New ${data.topic === "demo" ? "demo" : "enquiry"} — ${data.company || data.name || "WiMate website"}`
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone}\nTopic: ${data.topic}\n\n${data.message}`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setState("sent"), 700);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="container-x">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="chip">Contact</div>
            <h2 className="mt-4 section-title">
              Let's design your <span className="gradient-text-blue">connected operation.</span>
            </h2>
            <p className="section-sub">
              Tell us a little about your site, machines and goals. We'll get back
              within one business day.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <Info label="Email" value={brand.email} href={`mailto:${brand.email}`} />
              <Info label="Phone" value={brand.phone} href={`tel:${brand.phone}`} />
              <Info label="Address" value={brand.address} />
              <Info label="Hours" value={brand.hours} />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="card relative overflow-hidden p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-sky-100 blur-3xl" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full name"
                  value={data.name}
                  onChange={(v) => setData({ ...data, name: v })}
                  required
                />
                <Field
                  label="Work email"
                  type="email"
                  value={data.email}
                  onChange={(v) => setData({ ...data, email: v })}
                  required
                />
                <Field
                  label="Company"
                  value={data.company}
                  onChange={(v) => setData({ ...data, company: v })}
                />
                <Field
                  label="Phone"
                  value={data.phone}
                  onChange={(v) => setData({ ...data, phone: v })}
                />
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-ink-500">
                    I'm interested in
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      ["demo", "Book a demo"],
                      ["solutions", "Solutions"],
                      ["products", "Products / hardware"],
                      ["partnership", "Partnership"],
                    ].map(([v, l]) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => setData({ ...data, topic: v })}
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                          data.topic === v
                            ? "border-wimate-500/40 bg-wimate-50 text-wimate-700"
                            : "border-paper-200 bg-white text-ink-700 hover:border-wimate-500/40"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-ink-500">
                    Tell us about your site / goals
                  </label>
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
                  By submitting, you agree to our terms. We'll never share your data.
                </p>
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="btn-primary disabled:opacity-60"
                >
                  {state === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : state === "sent" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Sent
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send enquiry
                    </>
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
                    Thanks {data.name || "there"} — your mail client should have
                    opened with the details. We'll respond within one business day.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
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

function Info({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-wimate-500" />
      <div>
        <div className="text-[11px] uppercase tracking-widest text-ink-500">
          {label}
        </div>
        {href ? (
          <a href={href} className="text-sm text-ink-800 hover:text-wimate-600">
            {value}
          </a>
        ) : (
          <div className="text-sm text-ink-800">{value}</div>
        )}
      </div>
    </div>
  );
}
