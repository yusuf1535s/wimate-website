export default function SensorSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 160" className={className} aria-label="WiMate Sensor">
      <defs>
        <radialGradient id="sn-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,110,255,0.18)" />
          <stop offset="100%" stopColor="rgba(0,110,255,0)" />
        </radialGradient>
        <linearGradient id="sn-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF2FF" />
        </linearGradient>
      </defs>
      <ellipse cx="110" cy="138" rx="64" ry="5" fill="rgba(15,23,42,0.08)" />
      <circle cx="110" cy="78" r="70" fill="url(#sn-glow)" />
      {/* outer ring */}
      <circle cx="110" cy="78" r="48" fill="url(#sn-body)" stroke="rgba(0,110,255,0.5)" strokeWidth="1.2" />
      <circle cx="110" cy="78" r="48" fill="none" stroke="rgba(0,110,255,0.12)" strokeWidth="6" />
      {/* inner display */}
      <circle cx="110" cy="78" r="34" fill="#FFFFFF" stroke="#D5DCE6" />
      <text x="110" y="76" textAnchor="middle" fill="#006EFF" style={{ font: "600 12px Inter" }}>
        26.4°
      </text>
      <text x="110" y="90" textAnchor="middle" fill="#7A6E69" style={{ font: "500 8px Inter" }}>
        48% RH
      </text>
      {/* signal arcs */}
      <g fill="none" stroke="#006EFF" strokeLinecap="round">
        <path d="M 168 60 q 8 18 0 36" strokeWidth="1.5" opacity="0.8" />
        <path d="M 178 50 q 12 28 0 56" strokeWidth="1.5" opacity="0.5" />
        <path d="M 188 40 q 16 38 0 76" strokeWidth="1.5" opacity="0.25" />
      </g>
      {/* led */}
      <circle cx="110" cy="48" r="2.5" fill="#16A34A" />
    </svg>
  );
}
