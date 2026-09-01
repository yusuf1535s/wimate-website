export default function IoCardSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 160" className={className} aria-label="I/O Card">
      <defs>
        <linearGradient id="io-pcb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF2FF" />
        </linearGradient>
      </defs>
      <ellipse cx="110" cy="140" rx="86" ry="5" fill="rgba(15,23,42,0.08)" />
      <rect x="24" y="34" width="172" height="92" rx="6" fill="url(#io-pcb)" stroke="rgba(0,110,255,0.25)" />
      {/* traces */}
      <g stroke="rgba(0,110,255,0.45)" strokeWidth="0.6" fill="none">
        <path d="M 30 50 H 80 V 70 H 30" />
        <path d="M 30 90 H 60 V 110 H 190" />
        <path d="M 100 40 V 60 H 140 V 80" />
        <path d="M 190 50 V 90 H 160 V 120" />
      </g>
      {/* terminal blocks */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={36 + i * 38} y={42} width={28} height={16} rx={2} fill="#006EFF" opacity="0.85" />
          <circle cx={50 + i * 38} cy={50} r={2} fill="#FFFFFF" />
        </g>
      ))}
      {/* main IC */}
      <rect x="74" y="78" width="72" height="34" rx="3" fill="#0E1730" stroke="rgba(255,255,255,0.05)" />
      <text x="110" y="100" textAnchor="middle" fill="#2E97FF" style={{ font: "600 9px 'JetBrains Mono', monospace" }}>
        WiMate IO
      </text>
      {/* pins */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={`l-${i}`} x={70 - 4} y={82 + i * 5} width={4} height={2} fill="#94A3B8" />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={`r-${i}`} x={146} y={82 + i * 5} width={4} height={2} fill="#94A3B8" />
      ))}
      {/* LEDs */}
      <circle cx="166" cy="62" r="2.5" fill="#16A34A" />
      <circle cx="174" cy="62" r="2.5" fill="#F59E0B" />
      <circle cx="182" cy="62" r="2.5" fill="#006EFF" />
    </svg>
  );
}
