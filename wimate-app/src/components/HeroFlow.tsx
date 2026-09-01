import { motion } from "framer-motion";
import { Radio, Cpu, Cloud, LineChart, ArrowRight } from "lucide-react";

const nodes = [
  { key: "sensors", label: "Sensors", icon: Radio, x: 8, y: 50, color: "#3D8FFF" },
  { key: "gateway", label: "Gateway", icon: Cpu, x: 38, y: 50, color: "#006EFF" },
  { key: "cloud", label: "Cloud", icon: Cloud, x: 68, y: 50, color: "#0058CC" },
  { key: "dashboard", label: "Analytics", icon: LineChart, x: 96, y: 50, color: "#16A34A" },
];

export default function HeroFlow() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-sky-100 via-wimate-50/60 to-white blur-2xl" />
      <div className="relative card p-5 sm:p-6 overflow-hidden">
        <div className="flex items-center justify-between text-xs text-ink-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-slow" />
            Live IIoT topology
          </div>
          <div className="font-mono text-[10px] text-ink-400">wimate.cloud · live</div>
        </div>

        <div className="relative mt-5 h-[300px] sm:h-[340px]">
          <svg
            viewBox="0 0 104 60"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3D8FFF" />
                <stop offset="50%" stopColor="#006EFF" />
                <stop offset="100%" stopColor="#0058CC" />
              </linearGradient>
              <linearGradient id="flow2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#006EFF" />
                <stop offset="100%" stopColor="#16A34A" />
              </linearGradient>
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 4 0 L 0 0 0 4" fill="none" stroke="rgba(15,23,42,0.05)" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="104" height="60" fill="url(#grid)" />
            {/* curved connections */}
            <path
              d="M 8 30 C 22 8, 28 52, 38 30"
              fill="none"
              stroke="url(#flow)"
              strokeWidth="0.6"
              strokeDasharray="0.6 0.6"
              className="opacity-90"
            />
            <path
              d="M 38 30 C 52 8, 58 52, 68 30"
              fill="none"
              stroke="url(#flow)"
              strokeWidth="0.6"
              strokeDasharray="0.6 0.6"
              className="opacity-90"
            />
            <path
              d="M 68 30 C 82 8, 88 52, 96 30"
              fill="none"
              stroke="url(#flow2)"
              strokeWidth="0.6"
              strokeDasharray="0.6 0.6"
              className="opacity-90"
            />
            {/* moving dots */}
            <circle r="0.9" fill="#3D8FFF">
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                path="M 8 30 C 22 8, 28 52, 38 30"
              />
            </circle>
            <circle r="0.9" fill="#006EFF">
              <animateMotion
                dur="2.6s"
                repeatCount="indefinite"
                path="M 38 30 C 52 8, 58 52, 68 30"
              />
            </circle>
            <circle r="0.9" fill="#16A34A">
              <animateMotion
                dur="2.8s"
                repeatCount="indefinite"
                path="M 68 30 C 82 8, 88 52, 96 30"
              />
            </circle>
          </svg>

          {nodes.map((n, i) => (
            <motion.div
              key={n.key}
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <div className="relative">
                <div
                  className="absolute inset-0 -m-2 rounded-full blur-xl opacity-40"
                  style={{ background: n.color }}
                />
                <div className="relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl border border-paper-200 bg-white shadow-soft">
                  <n.icon className="h-5 w-5 sm:h-6 sm:w-6 text-wimate-600" />
                </div>
                <div className="mt-2 text-center text-[10px] sm:text-xs font-semibold text-ink-700">
                  {n.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-[11px]">
          {[
            { l: "Uptime", v: "99.95%" },
            { l: "Sites live", v: "120+" },
            { l: "Latency", v: "<120ms" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-lg border border-paper-200 bg-paper-50 px-3 py-2"
            >
              <div className="text-ink-500">{s.l}</div>
              <div className="text-ink-800 font-semibold">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-[11px] text-ink-500">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-wimate-500" />
            Sensors → Gateway → Cloud → Analytics
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-wimate-500" />
        </div>
      </div>
    </div>
  );
}
