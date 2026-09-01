import { clients } from "../../data/wimate";
import Reveal from "./Reveal";

/**
 * Home-only "Clients who trust our products and solutions".
 * Big logo marquee — full-color, infinite horizontal slide, hover-pause, edge fades.
 */
export default function TrustedByLogos() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="container-x">
        <Reveal>
          <h2 className="text-center font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink-800">
            Clients who trust our products &amp; solutions
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-paper-200 bg-white px-4 py-10 shadow-soft-sm sm:px-6 sm:py-12">
            {/* edge fades so logos don't slam into the card edge */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent"
            />

            <div
              className="group flex w-max gap-12 will-change-transform sm:gap-14"
              style={{
                animation: "tb-marquee 40s linear infinite",
              }}
            >
              {/* track duplicated for seamless loop */}
              {[...clients, ...clients].map((c, i) => (
                <LogoTile key={`${c.name}-${i}`} c={c} />
              ))}
            </div>

            {/* hover-to-pause the marquee */}
            <style>{`
              .group:hover { animation-play-state: paused !important; }
              @keyframes tb-marquee {
                from { transform: translateX(0); }
                to   { transform: translateX(-50%); }
              }
            `}</style>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LogoTile({ c }: { c: { name: string; image: string } }) {
  return (
    <div
      className="group/tile flex h-24 w-60 shrink-0 items-center justify-center sm:h-28 sm:w-72"
      title={c.name}
    >
      <div className="grid h-full w-full place-items-center rounded-2xl px-5">
        <img
          src={c.image}
          alt={c.name}
          loading="lazy"
          className="max-h-16 w-auto max-w-[220px] object-contain opacity-100 transition-transform duration-300 group-hover/tile:scale-105 sm:max-h-20"
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            t.style.display = "none";
            const parent = t.parentElement;
            if (parent && !parent.querySelector("span")) {
              const span = document.createElement("span");
              span.className =
                "font-display text-base font-semibold text-ink-700";
              span.textContent = c.name;
              parent.appendChild(span);
            }
          }}
        />
      </div>
    </div>
  );
}
