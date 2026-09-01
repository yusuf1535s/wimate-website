import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Radio, Cloud, LineChart, CheckCircle2, Sparkles } from "lucide-react";
import HeroFlow from "./HeroFlow";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 sm:pb-24 overflow-hidden">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="chip"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Industrial IoT · Made in India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 h-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] text-ink-800 text-balance"
            >
              Connect <span className="gradient-text-blue">Everything.</span>
              <br />
              Control <span className="gradient-text-blue">Anything.</span>
              <br />
              Optimize <span className="gradient-text-blue">Everything.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-ink-600 text-balance"
            >
              Industrial IoT solutions that connect machines, energy, buildings
              and operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/solutions" className="btn-primary">
                Explore Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-700"
            >
              {[
                "18-month hardware warranty",
                "Cloud or on-premise",
                "256-bit SSL",
                "End-to-end turnkey",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-wimate-500" />
                  {p}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 grid max-w-xl grid-cols-3 gap-4 sm:gap-6"
            >
              {[
                { k: "10,000+", v: "Devices in field" },
                { k: "4 GWh", v: "Energy measured / day" },
                { k: "30+", v: "Enterprise customers" },
              ].map((s) => (
                <div key={s.v} className="card p-4">
                  <div className="font-display text-xl sm:text-2xl font-semibold text-ink-800">
                    {s.k}
                  </div>
                  <div className="text-xs text-ink-500 mt-1">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <HeroFlow />
          </div>
        </div>
      </div>

      <div className="container-x mt-16 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card flex flex-col items-center justify-between gap-6 p-6 sm:flex-row sm:p-8"
        >
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <Logo className="h-12 sm:h-14 w-auto" />
            <div className="hidden h-10 w-px bg-paper-300 sm:block" />
            <div className="text-center text-sm text-ink-600 sm:text-left">
              <div className="font-semibold text-ink-800">Wimate Technology Solutions</div>
              <div className="text-xs text-ink-500">Designed, developed & manufactured in India</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-ink-500">
            <span className="rounded-full border border-wimate-500/20 bg-wimate-50 px-2.5 py-1 font-medium text-wimate-700">
              Make in India
            </span>
            <span className="rounded-full border border-paper-200 bg-paper-50 px-2.5 py-1 font-medium text-ink-700">
              18-month warranty
            </span>
          </div>
        </motion.div>
      </div>

      <div className="container-x mt-20 sm:mt-24">
        <div className="text-center text-xs uppercase tracking-[0.3em] text-ink-500">
          The WiMate Stack
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            { icon: Radio, label: "Sensors" },
            { icon: Cpu, label: "Gateway" },
            { icon: Cloud, label: "Cloud" },
            { icon: LineChart, label: "Analytics" },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card card-hover flex items-center gap-3 p-4"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-wimate-50 text-wimate-600 ring-1 ring-wimate-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-800">{label}</div>
                <div className="text-xs text-ink-500">
                  {["Field sensors", "Edge connectivity", "Secure platform", "Insights & control"][i]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
