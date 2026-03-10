export function MeshBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 pointer-events-none">
      {/* Top Left: Strong Primary Glow */}
      <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-[110px]" />

      {/* Bottom Right: Deep Secondary Anchor */}
      <div className="absolute -bottom-[15%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-secondary/60 via-secondary/30 to-transparent blur-[130px]" />

      {/* Center Right: The "Pop" of color */}
      <div className="absolute top-[20%] -right-[5%] w-[45%] h-[50%] rounded-full bg-logo-red/20 blur-[100px]" />

      {/* Middle Left: Balancing Blue */}
      <div className="absolute top-[40%] -left-[5%] w-[40%] h-[40%] rounded-full bg-header-blue/30 blur-[90px]" />

      {/* Subtle Overlay to keep text readable */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[40px]" />
    </div>
  );
}
