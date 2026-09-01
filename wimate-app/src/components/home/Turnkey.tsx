import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import { turnkeySteps } from "../../data/wimate";

const STEPS = turnkeySteps;

export default function Turnkey() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT — image */}
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-paper-200">
                <img
                  src="/wimate/products/iot-solution.png"
                  alt="WiMate turnkey IoT deployment"
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* RIGHT — content */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="chip">Turnkey solutions</div>
            </Reveal>

            <Reveal as="h2" delay={0.08}>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-ink-800">
                Turnkey solutions
                <br />
                <span className="text-wimate-500">deployment approach</span>
              </h2>
            </Reveal>

            <Reveal as="p" delay={0.15}>
              <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-ink-600">
                We work with you to transform your organization by driving bold
                ideas and pragmatic solutions.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <ul className="mt-7 space-y-3.5">
                {STEPS.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-[15px] text-ink-800"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-wimate-50 text-wimate-600 ring-1 ring-wimate-500/20">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8">
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 rounded-full bg-wimate-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-wimate-600 hover:shadow-glow-lg"
                >
                  Our Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
