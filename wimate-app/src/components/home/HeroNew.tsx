import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Home-only hero. Clean, simple, white/light.
 * - Headline + paragraph + blue "Solutions" CTA on the left
 * - One large industrial image on the right
 * - No chips, no floating data cards, no SaaS decorations
 */
export default function HeroNew() {
  return (
    <section className="relative bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <Reveal as="h1">
              <span className="block font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-ink-800">
                We make your
              </span>
              <span className="mt-1 block font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-ink-800">
                business <span className="text-wimate-500">grow.</span>
              </span>
            </Reveal>

            <Reveal as="p" delay={0.12}>
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink-600">
                We help you to optimize operations and sustain profitable growth
                by adopting the IoT technology.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8">
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 rounded-full bg-wimate-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-glow transition-all hover:bg-wimate-600"
                >
                  Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div className="relative lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-paper-200">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial IoT operations"
                  className="aspect-[5/4] w-full object-cover"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
