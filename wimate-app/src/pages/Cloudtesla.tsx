import { Link } from "react-router-dom";
import { cloudteslaPage } from "../data/wimate";
import type { ReactNode } from "react";

/* Cloudtesla page — styled to match wimate.in/cloudtesla (text-heavy,
   editorial, light bg, no card-grid / chip-eyebrow patterns that the
   Home page uses). */

type Bullet = string | { label?: string; group?: string; items: string[] };

function BulletList({ items }: { items: Bullet[] }) {
  return (
    <ul className="list-none space-y-2.5 pl-0 text-[15px] leading-relaxed text-ink-800 dark:text-white">
      {items.map((b, i) => {
        if (typeof b === "string") {
          return (
            <li key={i} className="relative pl-5">
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-wimate-500" />
              {b}
            </li>
          );
        }
        return (
          <li key={i} className="relative pl-5">
            <div className="relative pl-0">
              <span className="absolute -left-5 top-2.5 h-1.5 w-1.5 rounded-full bg-wimate-500" />
              {b.label ?? b.group}
            </div>
            {b.items && b.items.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5 pl-0">
                {b.items.map((sub) => (
                  <span
                    key={sub}
                    className="rounded-sm border border-paper-200 bg-white px-2.5 py-0.5 text-[12.5px] font-normal text-ink-700 dark:text-white"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function TwoColSplit({
  id,
  title,
  image,
  alt,
  imageLeft,
  children,
}: {
  id?: string;
  title: string;
  image: string;
  alt: string;
  imageLeft: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div
        className={`grid items-start gap-8 md:gap-10 lg:grid-cols-2 ${
          imageLeft ? "" : ""
        }`}
      >
        <div className={imageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
          <h3 className="mb-4 text-2xl font-bold tracking-tight text-ink-800 dark:text-white">
            {title}
          </h3>
          {children}
        </div>
        <div className={imageLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-auto w-full rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}

function CenteredTwoColText({
  title,
  items,
  bg = "white",
}: {
  title: string;
  items: Bullet[];
  bg?: "white" | "paper";
}) {
  return (
    <section
      className={`${
        bg === "paper"
          ? "bg-paper-50 dark:bg-slate-900"
          : "bg-white dark:bg-slate-950"
      } py-12 sm:py-16`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-6 text-center text-2xl font-bold tracking-tight text-ink-800 dark:text-white">
          {title}
        </h3>
        <div className="mx-auto max-w-5xl columns-1 md:columns-2 md:gap-12">
          <BulletList items={items} />
        </div>
      </div>
    </section>
  );
}

export default function Cloudtesla() {
  return (
    <div className="bg-[#F8F8F8] dark:bg-slate-950">
      {/* Titlebar — matches wimate.in titlebar style */}
      <section className="border-b border-paper-200 dark:border-slate-800 bg-[#FAF6F7] dark:bg-slate-900 py-10 sm:py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-3 px-4 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-ink-800 sm:text-3xl dark:text-white">
            {cloudteslaPage.hero.title}
          </h1>
          <nav aria-label="Breadcrumb" className="text-sm text-ink-500 dark:text-slate-400">
            <ol className="flex items-center gap-1.5">
              {cloudteslaPage.breadcrumb.map((part, i, arr) => (
                <li key={part} className="flex items-center gap-1.5">
                  {i === 0 ? (
                    <Link to="/" className="hover:text-wimate-600">
                      {part}
                    </Link>
                  ) : (
                    <span className="text-ink-700 dark:text-white">{part}</span>
                  )}
                  {i < arr.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* Intro + bullets (no card grid, no icon tiles) */}
      <section className="bg-[#F8F8F8] dark:bg-slate-950 py-12 sm:py-14">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[15px] leading-relaxed text-ink-700 dark:text-white">
            {cloudteslaPage.hero.intro}
          </p>
          <ul className="mt-6 space-y-2 text-[15px] text-ink-800 dark:text-white">
            {cloudteslaPage.hero.benefits.map((b) => (
              <li key={b} className="relative pl-5">
                <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-wimate-500" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Connectivity */}
      <TwoColSplit
        id="connectivity"
        title={cloudteslaPage.connectivity.title}
        image={cloudteslaPage.connectivity.image}
        alt={cloudteslaPage.connectivity.title}
        imageLeft={false}
      >
        <BulletList items={cloudteslaPage.connectivity.bullets} />
      </TwoColSplit>

      {/* Insights */}
      <TwoColSplit
        id="insights"
        title={cloudteslaPage.insights.title}
        image={cloudteslaPage.insights.image}
        alt={cloudteslaPage.insights.title}
        imageLeft={true}
      >
        <BulletList items={cloudteslaPage.insights.bullets} />
      </TwoColSplit>

      {/* Action */}
      <TwoColSplit
        id="action"
        title={cloudteslaPage.action.title}
        image={cloudteslaPage.action.image}
        alt={cloudteslaPage.action.title}
        imageLeft={false}
      >
        <BulletList items={cloudteslaPage.action.bullets} />
      </TwoColSplit>

      {/* Features — centered 2-column text */}
      <CenteredTwoColText
        title="Features"
        items={cloudteslaPage.features.flatMap((f) => [
          f.group,
          ...f.items,
        ])}
        bg="white"
      />

      {/* Use cases — centered 2-column text */}
      <CenteredTwoColText
        title="Use cases"
        items={cloudteslaPage.useCases}
        bg="paper"
      />

      {/* Turnkey Solutions — simple 4-col image grid, no shadow cards */}
      <section className="bg-[#F8F8F8] dark:bg-slate-950 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-8 text-center text-2xl font-bold tracking-tight text-ink-800 dark:text-white">
            Turnkey Solutions
          </h3>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:gap-8">
            {cloudteslaPage.turnkey.map((t) => (
              <li key={t.href}>
                <Link to={t.href} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      className="h-auto w-full transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </div>
                  <h4 className="mt-3 text-center text-sm font-semibold text-ink-800 group-hover:text-wimate-600 dark:group-hover:text-sky-400 sm:text-[15px] dark:text-white">
                    {t.name}
                  </h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
