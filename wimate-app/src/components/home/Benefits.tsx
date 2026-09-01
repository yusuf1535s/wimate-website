import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";
import { benefitsForYou } from "../../data/wimate";

export default function Benefits() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT — accordion */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-800">
                Benefits for you
              </h2>
            </Reveal>
            <Reveal delay={0.08} as="p">
              <p className="mt-3 text-base sm:text-lg text-ink-600">
                Click on the applicable category to explore
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <ul className="mt-7 space-y-3">
                {benefitsForYou.map((it, i) => {
                  const isOpen = open === i;
                  return (
                    <li
                      key={it.title}
                      className={`overflow-hidden rounded-2xl border transition-colors ${
                        isOpen
                          ? "border-wimate-500/30 bg-wimate-50/40"
                          : "border-paper-200 bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                      >
                        <span
                          className={`font-display text-base sm:text-lg font-semibold ${
                            isOpen ? "text-wimate-700" : "text-ink-800"
                          }`}
                        >
                          {it.title}
                        </span>
                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors ${
                            isOpen
                              ? "border-wimate-500/40 bg-white text-wimate-600"
                              : "border-paper-200 bg-paper-50 text-ink-500"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="h-3.5 w-3.5" />
                          ) : (
                            <Plus className="h-3.5 w-3.5" />
                          )}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-2 px-5 pb-5 text-sm text-ink-700">
                              {it.items.map((b: string) => (
                                <li
                                  key={b}
                                  className="flex items-start gap-2"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wimate-500" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          {/* RIGHT — image */}
          <Reveal className="lg:col-span-5" delay={0.12}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-soft-lg ring-1 ring-paper-200">
                <img
                  src="/wimate/products/lower-operations.png"
                  alt="Lower operations cost with WiMate"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-sky-100 blur-2xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
