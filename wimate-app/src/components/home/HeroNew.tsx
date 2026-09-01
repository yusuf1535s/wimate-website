import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { solutions } from "../../data/wimate";

/**
 * Home-only hero. Clean, simple, white/light.
 * - Headline + paragraph + blue "Solutions" CTA on the left
 * - Dynamic image + crossfading title on the right, driven by the `solutions`
 *   list from the data layer (8 slides, auto-rotates, manual dot pager, click
 *   through to the corresponding solution anchor)
 */
const ROTATE_MS = 4000;

type Slide = {
  src: string;
  title: string;
  slug: string;
};

const SLIDES: Slide[] = solutions
  .filter((s) => !!s.mainImage)
  .map((s) => ({
    src: s.mainImage,
    title: s.title,
    slug: s.slug,
  }));

export default function HeroNew() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const active = SLIDES[index];

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

          {/* RIGHT — dynamic image carousel driven by solutions data */}
          <div className="relative lg:col-span-6">
            <Reveal delay={0.1}>
              <div>
                <div
                  className="relative overflow-hidden rounded-3xl shadow-soft ring-1 ring-paper-200"
                  role="region"
                  aria-label="WiMate solutions preview"
                >
                  <Link
                    to={`/solutions#${active.slug}`}
                    aria-label={`${active.title} — learn more`}
                    className="block aspect-[5/4] w-full"
                  >
                    {SLIDES.map((s, i) => (
                      <img
                        key={s.slug}
                        src={s.src}
                        alt={s.title}
                        loading={i === 0 ? "eager" : "lazy"}
                        aria-hidden={i !== index}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                          i === index ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                  </Link>

                  {/* dot pager — manual control + visual progress */}
                  <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
                    {SLIDES.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Show ${SLIDES[i].title}`}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === index
                            ? "w-6 bg-white"
                            : "w-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* crossfading caption below the image (driven by active solution) */}
                <div
                  className="relative mt-4 h-7 sm:h-8"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {SLIDES.map((s, i) => (
                    <Link
                      key={s.slug}
                      to={`/solutions#${s.slug}`}
                      aria-hidden={i !== index}
                      tabIndex={i === index ? 0 : -1}
                      className={`absolute inset-0 font-display text-base sm:text-lg font-semibold tracking-tight transition-opacity duration-700 ease-in-out ${
                        i === index
                          ? "opacity-100 text-ink-800"
                          : "opacity-0 text-ink-800 pointer-events-none"
                      }`}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
