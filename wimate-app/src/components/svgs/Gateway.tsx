export default function GatewaySVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 160" className={className} aria-label="WiMate Gateway">
      <defs>
        <linearGradient id="gw-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F4FB" />
        </linearGradient>
        <linearGradient id="gw-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2E97FF" />
          <stop offset="100%" stopColor="#006EFF" />
        </linearGradient>
        <linearGradient id="gw-led" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2E97FF" />
          <stop offset="100%" stopColor="#0058CC" />
        </linearGradient>
      </defs>
      {/* shadow */}
      <ellipse cx="110" cy="140" rx="80" ry="6" fill="rgba(15,23,42,0.08)" />
      {/* DIN-rail backplate */}
      <rect x="20" y="100" width="180" height="8" rx="2" fill="#E5EAF2" />
      <rect x="20" y="100" width="180" height="2" fill="rgba(15,23,42,0.06)" />
      {/* main body */}
      <rect x="34" y="36" width="152" height="68" rx="10" fill="url(#gw-body)" stroke="#D5DCE6" />
      {/* top edge highlight */}
      <rect x="34" y="36" width="152" height="3" rx="1.5" fill="url(#gw-top)" />
      {/* screen */}
      <rect x="46" y="48" width="60" height="22" rx="3" fill="#0E1730" />
      <text x="76" y="63" textAnchor="middle" fill="#2E97FF" style={{ font: "600 10px 'JetBrains Mono', monospace" }}>
        4G · ONLINE
      </text>
      {/* LEDs */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={116 + i * 14} cy="56" r="3" fill={i === 0 ? "#2E97FF" : i === 1 ? "#16A34A" : i === 2 ? "#F59E0B" : "#94A3B8"} />
          <circle cx={116 + i * 14} cy="56" r="5" fill="none" stroke="rgba(0,110,255,0.25)" />
        </g>
      ))}
      {/* ports */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={50 + i * 32} y={80} width={22} height={14} rx={2} fill="#0E1730" stroke="rgba(15,23,42,0.1)" />
          <rect x={52 + i * 32} y={82} width={18} height={10} rx={1} fill="#1E2A4F" />
        </g>
      ))}
      <rect x="146" y="80" width="32" height="14" rx="2" fill="#0E1730" stroke="rgba(0,110,255,0.6)" />
      <circle cx="162" cy="87" r="3" fill="url(#gw-led)" />
      {/* antenna */}
      <line x1="170" y1="36" x2="178" y2="14" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
      <circle cx="178" cy="14" r="3" fill="#006EFF" />
      <circle cx="178" cy="14" r="6" fill="none" stroke="rgba(0,110,255,0.3)" />
    </svg>
  );
}
