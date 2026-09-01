import { clients } from "../../data/content";
import Reveal from "./Reveal";

/**
 * Home-only "Clients who trust our products and solutions".
 * Simple, clean, single-instance grid — no marquee, no duplication.
 */
export default function TrustedByLogos() {
  return (
    <section className="relative py-12 sm:py-14 lg:py-16">
      <div className="container-x">
        <Reveal>
          <h2 className="text-center font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink-800">
            Clients who trust our products &amp; solutions
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((c) => (
              <li
                key={c.name}
                className="flex items-center justify-center"
                title={c.name}
              >
                <LogoTile c={c} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function LogoTile({ c }: { c: { name: string; image: string } }) {
  return (
    <div className="grid h-16 w-full place-items-center rounded-xl bg-white px-4 ring-1 ring-paper-200">
      <img
        src={c.image}
        alt={c.name}
        loading="lazy"
        className="max-h-10 w-auto max-w-[150px] object-contain"
        onError={(e) => {
          const t = e.currentTarget as HTMLImageElement;
          t.style.display = "none";
          const parent = t.parentElement;
          if (parent && !parent.querySelector("span")) {
            const span = document.createElement("span");
            span.className =
              "font-display text-sm font-semibold text-ink-700";
            span.textContent = c.name;
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
}
