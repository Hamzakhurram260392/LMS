// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-indigo-600 to-teal-500">
//       <main className="text-center">
//         <h1 className="text-6xl font-bold text-white mb-4">
//           Welcome to LMS
//         </h1>
//         <p className="text-2xl text-white mb-8">
//           Learning Management System
//         </p>
//         <div className="flex gap-4 justify-center">
//           <a
//             href="/student"
//             className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg hover:bg-teal-700 text-2xl font-bold"
//           >
//             Student
//           </a>
//           <a
//             href="/trainer"
//             className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:bg-teal-700 text-2xl font-bold"
//           >
//             Trainer
//           </a>
//           <a
//             href="/admin"
//             className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:bg-gray-900 text-2xl font-bold"
//           >
//             Admin
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }















"use client"
import React, { useRef, useState } from "react";

/* ============ 3D TILT BUTTON (mouse ke saath ghoomta hai) ============ */
function TiltLink({
  href,
  label,
  icon,
  gradient,
  glow,
  delay,
}: {
  href: string;
  label: string;
  icon: string;
  gradient: string;
  glow: string;
  delay: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setStyle({
      transform: `perspective(700px) rotateX(${(0.5 - y) * 28}deg) rotateY(${(x - 0.5) * 28}deg) translateZ(20px) scale(1.08)`,
      boxShadow: `0 0 35px ${glow}`,
    });
  };

  const onLeave = () => setStyle({});

  return (
    <div className="slide-in" style={{ animationDelay: delay }}>
      <div className="float3d" style={{ animationDelay: delay }}>
        <a
          ref={ref}
          href={href}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{
            ...style,
            transformStyle: "preserve-3d",
            transition: "transform 0.15s ease-out, box-shadow 0.3s",
            boxShadow: style.boxShadow ?? `0 0 18px ${glow}`,
          }}
          className={`relative flex flex-col items-center gap-2 min-w-[190px] px-10 py-6 rounded-2xl bg-gradient-to-br ${gradient} text-white text-2xl font-bold border border-white/20`}
        >
          <span className="text-4xl" style={{ transform: "translateZ(40px)" }}>
            {icon}
          </span>
          <span style={{ transform: "translateZ(25px)" }} className="tracking-wide">
            {label}
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#050b1f] overflow-hidden">
      {/* ===== custom 3D animations ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float3d {
          0%,100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
          50%     { transform: translateY(-12px) rotateX(5deg) rotateY(-5deg); }
        }
        @keyframes spinY { from { transform: rotateY(0deg) rotateX(60deg); } to { transform: rotateY(360deg) rotateX(60deg); } }
        @keyframes spinCube { from { transform: rotateX(0) rotateY(0); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes gridMove { from { background-position: 0 0; } to { background-position: 0 60px; } }
        @keyframes neonPulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(40px) rotateX(-15deg); } to { opacity: 1; transform: translateY(0) rotateX(0); } }
        @keyframes titleFlicker { 0%,100% { text-shadow: 0 0 14px rgba(34,211,238,.8), 0 0 40px rgba(34,211,238,.4); } 50% { text-shadow: 0 0 22px rgba(168,85,247,.8), 0 0 55px rgba(168,85,247,.45); } }
        .float3d { animation: float3d 6s ease-in-out infinite; }
        .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
        .slide-in { animation: slideIn .9s ease-out both; }
        .title-glow { animation: titleFlicker 4s ease-in-out infinite; }
        .cube { width: 50px; height: 50px; position: relative; transform-style: preserve-3d; animation: spinCube 14s linear infinite; }
        .cube span { position: absolute; inset: 0; border: 2px solid #22d3ee; background: rgba(34,211,238,.06); box-shadow: 0 0 14px rgba(34,211,238,.5) inset; }
        .cube span:nth-child(1) { transform: translateZ(25px); }
        .cube span:nth-child(2) { transform: rotateY(180deg) translateZ(25px); }
        .cube span:nth-child(3) { transform: rotateY(90deg) translateZ(25px); border-color:#a855f7; }
        .cube span:nth-child(4) { transform: rotateY(-90deg) translateZ(25px); border-color:#a855f7; }
        .cube span:nth-child(5) { transform: rotateX(90deg) translateZ(25px); }
        .cube span:nth-child(6) { transform: rotateX(-90deg) translateZ(25px); }
      `,
        }}
      />

      {/* ===== 3D Grid Floor ===== */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: "perspective(900px) rotateX(65deg)",
          transformOrigin: "bottom",
          animation: "gridMove 4s linear infinite",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      {/* ===== Neon Glow Blobs ===== */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl neon-pulse" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-purple-500/25 rounded-full blur-3xl neon-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl neon-pulse" />

      {/* ===== Floating 3D Objects ===== */}
      <div className="absolute top-20 right-28 hidden md:block" style={{ perspective: "600px" }}>
        <div className="cube">
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>
      <div className="absolute bottom-28 left-24 hidden md:block" style={{ perspective: "600px" }}>
        <div className="cube" style={{ animationDuration: "20s", animationDirection: "reverse" }}>
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>
      <div
        className="absolute top-24 left-16 w-28 h-28 rounded-full border-2 border-cyan-400/70 hidden md:block"
        style={{ animation: "spinY 9s linear infinite", boxShadow: "0 0 20px rgba(34,211,238,.6)" }}
      />
      <div
        className="absolute bottom-24 right-20 w-20 h-20 rounded-full border-2 border-purple-500/70 hidden md:block"
        style={{ animation: "spinY 6s linear infinite reverse", boxShadow: "0 0 20px rgba(168,85,247,.6)" }}
      />

      {/* ✦ Stars */}
      <span className="absolute top-16 left-1/3 text-cyan-300 text-2xl animate-pulse">✦</span>
      <span className="absolute top-1/3 right-1/4 text-purple-400 text-xl neon-pulse">✧</span>
      <span className="absolute bottom-1/3 left-20 text-cyan-400 text-xl neon-pulse">✦</span>

      {/* ================== MAIN ================== */}
      <main className="relative z-10 text-center px-4" style={{ perspective: "1200px" }}>
        <div className="slide-in">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 title-glow">
            Welcome to <span className="text-cyan-300">LMS</span>
          </h1>
          <p className="text-2xl text-purple-300 mb-12 tracking-wide neon-pulse">
            Learning Management System
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center" style={{ transformStyle: "preserve-3d" }}>
          <TiltLink
            href="/student"
            label="Student"
            icon="🎓"
            gradient="from-cyan-500/80 to-sky-600/80"
            glow="rgba(34,211,238,0.55)"
            delay="0.2s"
          />
          <TiltLink
            href="/trainer"
            label="Trainer"
            icon="👨‍🏫"
            gradient="from-sky-500/80 to-indigo-600/80"
            glow="rgba(56,189,248,0.55)"
            delay="0.4s"
          />
          <TiltLink
            href="/admin"
            label="Admin"
            icon="🛡️"
            gradient="from-purple-500/80 to-fuchsia-600/80"
            glow="rgba(168,85,247,0.55)"
            delay="0.6s"
          />
        </div>
      </main>
    </div>
  );
}