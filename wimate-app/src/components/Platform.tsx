import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  Battery,
  Cpu,
  Gauge,
  Radio,
  Zap,
  Thermometer,
  Droplets,
  Wind,
  CircleDot,
  ArrowUpRight,
} from "lucide-react";
import Section from "./Section";

const machines = [
  { name: "CNC Line A", id: "M-204", status: "running", eff: 92, kwh: 184 },
  { name: "Compressor 03", id: "M-118", status: "running", eff: 88, kwh: 96 },
  { name: "DG Set 02", id: "M-051", status: "idle", eff: 0, kwh: 12 },
  { name: "Boiler 01", id: "M-031", status: "running", eff: 84, kwh: 64 },
  { name: "Pump 14", id: "M-302", status: "alert", eff: 41, kwh: 22 },
  { name: "HVAC Tower B", id: "M-512", status: "running", eff: 76, kwh: 58 },
];

const alerts = [
  { level: "warn", icon: Thermometer, msg: "Pump 14 bearing temp above threshold", time: "2m" },
  { level: "info", icon: Battery, msg: "WiSense 100 battery low — Zone 3", time: "11m" },
  { level: "ok", icon: CircleDot, msg: "DG Set 02 returned to standby", time: "26m" },
  { level: "warn", icon: Droplets, msg: "RO Plant #2 inlet pressure drop", time: "41m" },
];

function statusColor(s: string) {
  switch (s) {
    case "running":
      return "text-emerald-700 bg-emerald-50 ring-emerald-200";
    case "idle":
      return "text-amber-700 bg-amber-50 ring-amber-200";
    case "alert":
      return "text-rose-700 bg-rose-50 ring-rose-200";
    default:
      return "text-ink-700";
  }
}

function useTickingSeries(seed: number[], speed = 1200) {
  const [data, setData] = useState(seed);
  useEffect(() => {
    const id = setInterval(() => {
      setData((d) => {
        const next = [...d.slice(1), Math.max(0, Math.min(100, d[d.length - 1] + (Math.random() - 0.5) * 14))];
        return next;
      });
    }, speed);
    return () => clearInterval(id);
  }, [speed]);
  return data;
}

function EnergyChart() {
  const series = useTickingSeries([42, 48, 45, 55, 50, 58, 62, 60, 66, 64, 70, 68], 1400);
  const max = Math.max(...series, 10);
  const w = 320;
  const h = 90;
  const step = w / (series.length - 1);
  const path = series
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (v / max) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h + 6}`} className="w-full h-24">
      <defs>
        <linearGradient id="eg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#006EFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#006EFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="el" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2E97FF" />
          <stop offset="100%" stopColor="#006EFF" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#eg)" />
      <path
        d={path}
        fill="none"
        stroke="url(#el)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={(series.length - 1) * step}
        cy={h - (series[series.length - 1] / max) * h}
        r="3.5"
        fill="#006EFF"
      />
    </svg>
  );
}

function ProductionGauge({ value = 78 }: { value?: number }) {
  const r = 44;
  const c = Math.PI * r;
  const pct = Math.max(0, Math.min(1, value / 100));
  return (
    <svg viewBox="0 0 120 70" className="w-full h-24">
      <defs>
        <linearGradient id="gg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2E97FF" />
          <stop offset="100%" stopColor="#0058CC" />
        </linearGradient>
      </defs>
      <path
        d="M 10 60 A 50 50 0 0 1 110 60"
        fill="none"
        stroke="rgba(15,23,42,0.08)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M 10 60 A 50 50 0 0 1 110 60"
        fill="none"
        stroke="url(#gg)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${c * pct} ${c}`}
        style={{ transition: "stroke-dasharray 0.8s ease" }}
      />
      <text
        x="60"
        y="55"
        textAnchor="middle"
        className="fill-ink-800"
        style={{ font: "600 18px Inter, sans-serif" }}
      >
        {value}%
      </text>
      <text
        x="60"
        y="68"
        textAnchor="middle"
        className="fill-ink-500"
        style={{ font: "500 8px Inter, sans-serif" }}
      >
        OEE
      </text>
    </svg>
  );
}

export default function Platform() {
  return (
    <Section
      id="platform"
      eyebrow="The WiMate IoT Platform"
      title={
        <>
          A single pane of glass for <span className="gradient-text-blue">machines, energy,</span> people & assets.
        </>
      }
      subtitle="Live dashboards, predictive analytics, remote control and alerts — built on a secure, scalable IIoT cloud."
    >
      <div className="card relative overflow-hidden p-0 shadow-soft">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-wimate-500/40 to-transparent" />
        {/* Topbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-200 px-5 py-3 bg-paper-50">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-wimate-50 text-wimate-600 ring-1 ring-wimate-500/20">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-ink-800">Plant Overview</div>
              <div className="text-[11px] text-ink-500">
                Bengaluru · Plant 01 · {new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {["Live", "Shift A", "All sites"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-paper-200 bg-white px-3 py-1 text-[11px] text-ink-700"
              >
                {t}
              </span>
            ))}
            <span className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
              Connected
            </span>
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-12">
          {/* Machines column */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-paper-200 p-5">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-ink-800">Machines</h4>
              <span className="text-[11px] text-ink-500">6 of 84 online</span>
            </div>
            <div className="mt-3 space-y-2">
              {machines.map((m, i) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center justify-between rounded-xl border border-paper-200 bg-white px-3 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        m.status === "running"
                          ? "bg-emerald-500"
                          : m.status === "alert"
                          ? "bg-rose-500"
                          : "bg-amber-500"
                      }`}
                    />
                    <div>
                      <div className="text-sm font-medium text-ink-800">
                        {m.name}
                      </div>
                      <div className="text-[10px] text-ink-400">{m.id}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:block w-24">
                      <div className="h-1 w-full rounded-full bg-paper-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-wimate-600"
                          style={{ width: `${m.eff}%` }}
                        />
                      </div>
                      <div className="mt-0.5 text-right text-[10px] text-ink-500">
                        {m.eff}% eff
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ${statusColor(
                        m.status
                      )}`}
                    >
                      {m.status}
                    </span>
                    <div className="hidden sm:block text-right">
                      <div className="text-[11px] text-ink-700">{m.kwh} kWh</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Charts column */}
          <div className="lg:col-span-7 p-5">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-paper-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-ink-500">Energy</div>
                  <Zap className="h-4 w-4 text-wimate-600" />
                </div>
                <div className="mt-1 font-display text-2xl text-ink-800">1,284 <span className="text-sm text-ink-500">kWh</span></div>
                <EnergyChart />
              </div>
              <div className="rounded-xl border border-paper-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-ink-500">Production</div>
                  <Gauge className="h-4 w-4 text-wimate-600" />
                </div>
                <div className="mt-1 font-display text-2xl text-ink-800">12,408 <span className="text-sm text-ink-500">units</span></div>
                <ProductionGauge value={78} />
              </div>
              <div className="rounded-xl border border-paper-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-ink-500">Alerts</div>
                  <AlertTriangle className="h-4 w-4 text-rose-500" />
                </div>
                <div className="mt-1 font-display text-2xl text-ink-800">2 <span className="text-sm text-ink-500">active</span></div>
                <div className="mt-2 space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Critical</span>
                    <span className="text-rose-600 font-semibold">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Warnings</span>
                    <span className="text-amber-600 font-semibold">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-500">Resolved (24h)</span>
                    <span className="text-emerald-600 font-semibold">17</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-paper-200 bg-white p-4 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-ink-500">Live alerts</div>
                  <span className="text-[10px] text-ink-400">last 1h</span>
                </div>
                <div className="mt-3 space-y-2">
                  {alerts.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-center justify-between gap-3 rounded-lg border border-paper-200 bg-paper-50 px-3 py-2"
                    >
                      <div className="flex items-center gap-3">
                        <a.icon
                          className={`h-4 w-4 ${
                            a.level === "warn"
                              ? "text-amber-500"
                              : a.level === "info"
                              ? "text-wimate-500"
                              : "text-emerald-500"
                          }`}
                        />
                        <span className="text-sm text-ink-800">{a.msg}</span>
                      </div>
                      <span className="text-[10px] text-ink-400">{a.time} ago</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-paper-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-ink-500">Site vitals</div>
                  <Activity className="h-4 w-4 text-wimate-600" />
                </div>
                <div className="mt-3 space-y-3">
                  {[
                    { k: "Temperature", v: "26.4°C", icon: Thermometer, c: "text-wimate-600" },
                    { k: "Humidity", v: "48%", icon: Droplets, c: "text-wimate-600" },
                    { k: "Air Quality (CO₂)", v: "612 ppm", icon: Wind, c: "text-emerald-600" },
                    { k: "Devices online", v: "1,284", icon: Radio, c: "text-wimate-600" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2 text-ink-500">
                        <s.icon className={`h-4 w-4 ${s.c}`} />
                        {s.k}
                      </div>
                      <span className="font-medium text-ink-800">{s.v}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-wimate-600 hover:text-wimate-700"
                >
                  Open full dashboard <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
