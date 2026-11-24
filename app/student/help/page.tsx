// export default function StudentHelp() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Help & Support</h1>

//       <div className="bg-white p-4 rounded shadow space-y-2">
//         <p>📧 Email: support@lms.com</p>
//         <p>📞 Phone: +92 300 1234567</p>
//         <p>💬 Chat with Admin</p>
//       </div>
//     </div>
//   );
// }



// 'use client'

// export default function StudentHelp() {
//   return (
//     <div className="space-y-10">

//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-extrabold text-gray-800">
//           Help & Support
//         </h1>
//         <p className="text-gray-500 mt-1">
//           We’re here to help you anytime
//         </p>
//       </div>

//       {/* Support Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//         {/* Email */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow hover:shadow-lg transition">
//           <div className="text-3xl mb-3">📧</div>
//           <h3 className="font-semibold text-lg text-gray-800">
//             Email Support
//           </h3>
//           <p className="text-sm text-gray-500 mt-1">
//             support@lms.com
//           </p>
//           <button className="mt-4 text-sm font-semibold text-indigo-600 hover:underline">
//             Send Email →
//           </button>
//         </div>

//         {/* Phone */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow hover:shadow-lg transition">
//           <div className="text-3xl mb-3">📞</div>
//           <h3 className="font-semibold text-lg text-gray-800">
//             Phone Support
//           </h3>
//           <p className="text-sm text-gray-500 mt-1">
//             +92 300 1234567
//           </p>
//           <p className="text-xs text-gray-400 mt-2">
//             Mon – Fri, 9AM – 6PM
//           </p>
//         </div>

//         {/* Chat */}
//         <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-white shadow hover:shadow-xl transition">
//           <div className="text-3xl mb-3">💬</div>
//           <h3 className="font-semibold text-lg">
//             Live Chat
//           </h3>
//           <p className="text-sm opacity-90 mt-1">
//             Chat directly with admin
//           </p>
//           <button className="mt-4 bg-white/20 px-4 py-2 rounded-lg text-sm">
//             Start Chat
//           </button>
//         </div>

//       </div>

//       {/* FAQs */}
//       <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-7 shadow">
//         <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
//           Quick FAQs
//         </h2>

//         <div className="space-y-3 text-sm text-gray-600">
//           <p>❓ How do I submit an assignment?</p>
//           <p>❓ Where can I check my results?</p>
//           <p>❓ How to contact my trainer?</p>
//         </div>
//       </div>

//     </div>
//   )
// }


















"use client";
import React, { useRef, useState } from "react";

/* ============ 3D TILT CARD (mouse ke saath ghoomta hai) ============ */
function TiltCard({
  children,
  className = "",
  intensity = 12,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glare, setGlare] = useState({ x: 50, y: 50, o: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setStyle({
      transform: `perspective(1000px) rotateX(${(0.5 - y) * intensity}deg) rotateY(${(x - 0.5) * intensity}deg) translateZ(14px) scale(1.02)`,
    });
    setGlare({ x: x * 100, y: y * 100, o: 1 });
  };

  const onLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)",
    });
    setGlare((g) => ({ ...g, o: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ ...style, transformStyle: "preserve-3d", transition: "transform 0.15s ease-out" }}
      className={`relative ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glare.o,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(34,211,238,0.22), transparent 55%)`,
        }}
      />
    </div>
  );
}

export default function StudentHelp() {
  const faqs = [
    "How do I submit an assignment?",
    "Where can I check my results?",
    "How to contact my trainer?",
  ];

  return (
    <div className="relative w-full min-h-[calc(100vh-88px)] bg-[#050b1f] text-slate-100 p-8 overflow-hidden">
      {/* ===== custom 3D animations ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float3d {
          0%,100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
          50%     { transform: translateY(-10px) rotateX(4deg) rotateY(-4deg); }
        }
        @keyframes spinY { from { transform: rotateY(0deg) rotateX(60deg); } to { transform: rotateY(360deg) rotateX(60deg); } }
        @keyframes spinCube { from { transform: rotateX(0) rotateY(0); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes gridMove { from { background-position: 0 0; } to { background-position: 0 60px; } }
        @keyframes neonPulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(30px) rotateX(-12deg); } to { opacity: 1; transform: translateY(0) rotateX(0); } }
        @keyframes iconBob { 0%,100% { transform: translateZ(45px) translateY(0) rotate(0deg); } 50% { transform: translateZ(45px) translateY(-6px) rotate(6deg); } }
        .float3d { animation: float3d 6s ease-in-out infinite; }
        .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
        .slide-in { animation: slideIn .8s ease-out both; }
        .icon-bob { display: inline-block; animation: iconBob 3.5s ease-in-out infinite; filter: drop-shadow(0 0 12px rgba(34,211,238,.8)); }
        .neon-text { text-shadow: 0 0 12px rgba(34,211,238,.7), 0 0 30px rgba(34,211,238,.35); }
        .cube { width: 40px; height: 40px; position: relative; transform-style: preserve-3d; animation: spinCube 14s linear infinite; }
        .cube span { position: absolute; inset: 0; border: 2px solid #22d3ee; background: rgba(34,211,238,.06); box-shadow: 0 0 12px rgba(34,211,238,.5) inset; }
        .cube span:nth-child(1) { transform: translateZ(20px); }
        .cube span:nth-child(2) { transform: rotateY(180deg) translateZ(20px); }
        .cube span:nth-child(3) { transform: rotateY(90deg) translateZ(20px); border-color:#a855f7; }
        .cube span:nth-child(4) { transform: rotateY(-90deg) translateZ(20px); border-color:#a855f7; }
        .cube span:nth-child(5) { transform: rotateX(90deg) translateZ(20px); }
        .cube span:nth-child(6) { transform: rotateX(-90deg) translateZ(20px); }
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
      <div className="absolute top-14 right-24 hidden lg:block" style={{ perspective: "600px" }}>
        <div className="cube">
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>
      <div
        className="absolute top-52 left-6 w-20 h-20 rounded-full border-2 border-cyan-400/70 hidden lg:block"
        style={{ animation: "spinY 9s linear infinite", boxShadow: "0 0 18px rgba(34,211,238,.6)" }}
      />
      <div
        className="absolute bottom-24 right-12 w-16 h-16 rounded-full border-2 border-purple-500/70 hidden lg:block"
        style={{ animation: "spinY 6s linear infinite reverse", boxShadow: "0 0 18px rgba(168,85,247,.6)" }}
      />

      {/* ✦ Stars */}
      <span className="absolute top-16 left-24 text-cyan-300 text-2xl animate-pulse neon-text">✦</span>
      <span className="absolute top-40 right-32 text-purple-400 text-xl neon-pulse">✧</span>
      <span className="absolute bottom-32 left-1/3 text-cyan-400 text-xl neon-pulse">✦</span>

      <div className="relative z-10 space-y-10" style={{ perspective: "1400px" }}>
        {/* Header */}
        <div className="slide-in">
          <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
            Help & <span className="text-purple-400">Support</span>
          </h1>
          <p className="text-slate-400 mt-1">We’re here to help you anytime</p>
        </div>

        {/* Support Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Email */}
          <div className="slide-in" style={{ animationDelay: "0.1s" }}>
            <div className="float3d">
              <TiltCard className="rounded-[2rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-transparent to-purple-500/70">
                <div
                  className="relative bg-[#0a1432]/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>
                  <div className="text-4xl mb-3 icon-bob">📧</div>
                  <h3
                    className="font-bold text-lg text-white neon-text"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    Email Support
                  </h3>
                  <p className="text-sm text-slate-400 mt-1" style={{ transform: "translateZ(20px)" }}>
                    support@lms.com
                  </p>
                  <button
                    className="mt-4 text-sm font-semibold text-purple-300 hover:text-cyan-300 hover:translate-x-1 transition"
                    style={{ transform: "translateZ(35px)" }}
                  >
                    Send Email →
                  </button>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Phone */}
          <div className="slide-in" style={{ animationDelay: "0.22s" }}>
            <div className="float3d" style={{ animationDelay: "0.5s" }}>
              <TiltCard className="rounded-[2rem] p-[2px] bg-gradient-to-br from-purple-500/70 via-transparent to-cyan-400/70">
                <div
                  className="relative bg-[#0a1432]/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="absolute top-4 right-5 text-purple-300 text-lg neon-pulse">✧</span>
                  <div className="text-4xl mb-3 icon-bob" style={{ animationDelay: "0.6s" }}>
                    📞
                  </div>
                  <h3
                    className="font-bold text-lg text-white neon-text"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    Phone Support
                  </h3>
                  <p className="text-sm text-slate-400 mt-1" style={{ transform: "translateZ(20px)" }}>
                    +92 300 1234567
                  </p>
                  <p className="text-xs text-purple-300/80 mt-2" style={{ transform: "translateZ(15px)" }}>
                    Mon – Fri, 9AM – 6PM
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Chat */}
          <div className="slide-in" style={{ animationDelay: "0.34s" }}>
            <div className="float3d" style={{ animationDelay: "1s" }}>
              <TiltCard className="rounded-[2rem]" intensity={16}>
                <div
                  className="relative rounded-[2rem] p-6 text-white bg-gradient-to-br from-cyan-400 via-sky-500 to-purple-600 border border-white/25 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="absolute top-4 right-5 text-white/80 text-lg neon-pulse">✦</span>
                  <div className="text-4xl mb-3 icon-bob" style={{ animationDelay: "1.2s" }}>
                    💬
                  </div>
                  <h3 className="font-bold text-lg" style={{ transform: "translateZ(30px)" }}>
                    Live Chat
                  </h3>
                  <p className="text-sm opacity-90 mt-1" style={{ transform: "translateZ(20px)" }}>
                    Chat directly with admin
                  </p>
                  <button
                    className="mt-4 bg-white/20 border border-white/40 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    Start Chat
                  </button>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="slide-in" style={{ animationDelay: "0.5s" }}>
          <TiltCard
            intensity={3}
            className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)] p-7"
          >
            <h2 className="text-2xl font-extrabold text-cyan-300 neon-text mb-5">Quick FAQs</h2>

            <div className="space-y-3 text-sm text-slate-300">
              {faqs.map((q, i) => (
                <p
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-cyan-400/15 bg-white/5 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:text-cyan-200 hover:translate-x-2 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)] transition-all cursor-pointer"
                >
                  <span className="text-purple-400 text-lg drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]">❓</span>
                  {q}
                </p>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}