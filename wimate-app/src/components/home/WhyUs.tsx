import {
  ShieldCheck,
  Cloud,
  Wrench,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type Item = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const ITEMS: Item[] = [
  {
    icon: ShieldCheck,
    title: "Reliable Hardware",
    description:
      "Time tested, high quality, designed, developed and manufactured in India. 18 months of replacement warranty.",
  },
  {
    icon: Cloud,
    title: "Innovative Software",
    description:
      "Easy to use, highly scalable and cloud-based IoT platform. Dynamic dashboard, Reports, Remote control, Email & SMS alerts.",
  },
  {
    icon: Wrench,
    title: "Turnkey Solutions",
    description:
      "End to end covering hardware supply, cloud platform hosting, installation, commissioning and maintenance",
  },
  {
    icon: Wallet,
    title: "Competitive Cost",
    description:
      "Cloud subscription charges is per month and Hardware price are best in the industry",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-800">
              Why Us ?
            </h2>
          </Reveal>
          <Reveal delay={0.08} as="p">
            <p className="mt-4 text-base sm:text-lg text-ink-600">
              We are committed to resolving the challenges faced by you.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <article className="group h-full rounded-2xl border border-paper-200 bg-white p-7 shadow-soft-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-wimate-50 text-wimate-600">
                  <it.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-800">
                  {it.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                  {it.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
