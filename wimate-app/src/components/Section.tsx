import { type ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  children,
}: Props) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <div
            className={`mb-12 sm:mb-16 ${
              align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
            }`}
          >
            {eyebrow && (
              <div className={`chip ${align === "center" ? "mx-auto" : ""}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-wimate-500" />
                {eyebrow}
              </div>
            )}
            {title && <h2 className="mt-4 section-title">{title}</h2>}
            {subtitle && <p className="section-sub">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
