import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import Reveal from "../components/Reveal";
import { brand } from "../data/wimate";

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
          {/* Enquiry form — centered, full-width below lg */}
          <Reveal>
            <form onSubmit={onSubmit} className="card relative w-full overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-sky-100 blur-3xl" />
              <h2 className="h-display relative text-2xl font-bold text-ink-800">
                Send us a message
              </h2>
              <p className="relative mt-2 text-sm text-ink-600">
                We will get back within one business day. We will never share your data.
              </p>

              <div className="relative mt-8 space-y-5">
                <Field label="Full name" value={data.name} onChange={(v) => setData({ ...data, name: v })} required />
                <Field label="Work email" type="email" value={data.email} onChange={(v) => setData({ ...data, email: v })} required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company" value={data.company} onChange={(v) => setData({ ...data, company: v })} />
                  <Field label="Phone" value={data.phone} onChange={(v) => setData({ ...data, phone: v })} />
                </div>
                <div>
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
                <div>
                  <label className="text-xs font-medium text-ink-500">Tell us about your site / goals</label>
                  <textarea
                    value={data.message}
                    onChange={(e) => setData({ ...data, message: e.target.value })}
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-paper-200 bg-white px-3.5 py-2.5 text-sm text-ink-800 placeholder-ink-400 outline-none transition-colors focus:border-wimate-500/60 focus:ring-2 focus:ring-wimate-500/20"
                    placeholder="e.g. 3 plants, 80 machines, looking to monitor OEE and energy."
                  />
                </div>
              </div>

              <div className="relative mt-8 flex flex-col-reverse items-stretch gap-3 border-t border-paper-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
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

