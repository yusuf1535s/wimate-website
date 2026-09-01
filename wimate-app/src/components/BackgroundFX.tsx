export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft mask-fade-y opacity-60" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-wimate-500/10 blur-3xl" />
      <div className="absolute -bottom-40 right-0 h-[420px] w-[700px] rounded-full bg-sky-500/8 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(0,110,255,0.10),transparent_60%)]" />
    </div>
  );
}
