export default function HmiSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 160" className={className} aria-label="HMI Panel">
      <defs>
        <linearGradient id="hmi-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F4FB" />
        </linearGradient>
        <linearGradient id="hmi-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2E97FF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0058CC" stopOpacity="0.10" />
        </linearGradient>
      </defs>
      <ellipse cx="110" cy="142" rx="86" ry="6" fill="rgba(15,23,42,0.08)" />
      <rect x="22" y="22" width="176" height="116" rx="14" fill="url(#hmi-body)" stroke="#D5DCE6" />
      <rect x="32" y="32" width="156" height="86" rx="6" fill="#0E1730" />
      <rect x="32" y="32" width="156" height="86" rx="6" fill="url(#hmi-screen)" />
      {/* dashboard elements */}
      <rect x="40" y="40" width="60" height="22" rx="3" fill="rgba(0,110,255,0.25)" />
      <line x1="44" y1="48" x2="74" y2="48" stroke="#2E97FF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="44" y1="54" x2="62" y2="54" stroke="#2E97FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* bar chart */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={108 + i * 12}
          y={66 - (i % 3) * 6}
          width={8}
          height={20 + (i % 3) * 6}
          rx={1}
          fill="#2E97FF"
          opacity={0.4 + i * 0.1}
        />
      ))}
      <polyline
        points="40,98 60,86 80,92 100,78 120,84 140,72 160,80 180,68"
        fill="none"
        stroke="#2E97FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* LED ring */}
      <circle cx="110" cy="128" r="6" fill="#16A34A" />
      <circle cx="110" cy="128" r="10" fill="none" stroke="rgba(22,163,74,0.3)" />
      <text x="110" y="146" textAnchor="middle" fill="#7A6E69" style={{ font: "600 8px Inter" }}>
        HMI · TOUCH
      </text>
    </svg>
  );
}
