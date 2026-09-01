import { useState } from "react";
import { brand } from "../data/content";

type Props = {
  className?: string;
  alt?: string;
};

/**
 * Real WiMate logo (downloaded from wimate.in).
 * The PNG has a dark logomark on transparent — it reads perfectly on white/light surfaces.
 */
export default function Logo({ className = "h-10 w-auto", alt = brand.name }: Props) {
  const [err, setErr] = useState(false);
  if (err) return <Wordmark className={className} />;
  return (
    <img
      src="/wimate-logo.png"
      alt={alt}
      className={className}
      onError={() => setErr(true)}
      draggable={false}
    />
  );
}

export function Wordmark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center font-display text-2xl font-bold tracking-tight ${className}`}
    >
      <span className="text-ink-800">Wi</span>
      <span className="text-wimate-500">Mate</span>
    </span>
  );
}
