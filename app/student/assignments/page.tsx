// "use client";

// export default function StudentAssignments() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">My Assignments</h1>

//       <div className="bg-white p-4 rounded shadow">
//         <div className="flex justify-between py-2">
//           <span>Web Project</span>
//           <button className="text-teal-600">Submit</button>
//         </div>
//         <div className="flex justify-between py-2">
//           <span>Python Quiz</span>
//           <button className="text-teal-600">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";

// const assignments = [
//   {
//     title: "Web Development Final Project",
//     due: "20 Feb 2026",
//     status: "Pending",
//     progress: 70,
//   },
//   {
//     title: "Python Quiz",
//     due: "25 Feb 2026",
//     status: "Submitted",
//     progress: 100,
//   },
// ];

// export default function StudentAssignments() {
//   return (
//     <div className="space-y-6">

//       {/* Page Title */}
//       <div>
//         <h1 className="text-3xl font-extrabold text-gray-800">
//           My Assignments
//         </h1>
//         <p className="text-gray-500 mt-1">
//           Track, submit & review your assignments
//         </p>
//       </div>

//       {/* Assignments List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {assignments.map((a, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
//           >
//             {/* Header */}
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <h3 className="font-semibold text-lg text-gray-800">
//                   {a.title}
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   Due: {a.due}
//                 </p>
//               </div>

//               <span
//                 className={`text-xs font-semibold px-3 py-1 rounded-full
//                 ${
//                   a.status === "Submitted"
//                     ? "bg-green-100 text-green-600"
//                     : "bg-yellow-100 text-yellow-600"
//                 }`}
//               >
//                 {a.status}
//               </span>
//             </div>

//             {/* Progress */}
//             <div className="mb-4">
//               <div className="flex justify-between text-xs text-gray-500 mb-1">
//                 <span>Progress</span>
//                 <span>{a.progress}%</span>
//               </div>
//               <div className="w-full bg-gray-200 h-2 rounded">
//                 <div
//                   className="bg-teal-500 h-2 rounded"
//                   style={{ width: `${a.progress}%` }}
//                 />
//               </div>
//             </div>

//             {/* Action */}
//             <div className="flex justify-end gap-3">
//               <button className="text-sm text-gray-600 hover:text-teal-600">
//                 View Details
//               </button>

//               {a.status !== "Submitted" && (
//                 <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm">
//                   Submit Assignment
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }












"use client";
import React, { useRef, useState } from "react";

type Assignment = {
  title: string;
  due: string;
  status: string;
  progress: number;
};

const assignments: Assignment[] = [
  {
    title: "Web Development Final Project",
    due: "20 Feb 2026",
    status: "Pending",
    progress: 70,
  },
  {
    title: "Python Quiz",
    due: "25 Feb 2026",
    status: "Submitted",
    progress: 100,
  },
];

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

export default function StudentAssignments() {
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
        @keyframes barGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .float3d { animation: float3d 6s ease-in-out infinite; }
        .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
        .slide-in { animation: slideIn .8s ease-out both; }
        .bar-grow { transform-origin: left; animation: barGrow 1s ease-out both; }
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

      <div className="relative z-10 space-y-8" style={{ perspective: "1400px" }}>
        {/* Page Title */}
        <div className="slide-in">
          <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
            My <span className="text-purple-400">Assignments</span>
          </h1>
          <p className="text-slate-400 mt-1">Track, submit & review your assignments</p>
        </div>

        {/* Assignments List */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
          style={{ transformStyle: "preserve-3d" }}
        >
          {assignments.map((a, i) => {
            const submitted = a.status === "Submitted";
            return (
              <div key={i} className="slide-in" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="float3d" style={{ animationDelay: `${i * 0.5}s` }}>
                  <TiltCard className="group rounded-[2rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-transparent to-purple-500/70">
                    <div
                      className="relative bg-[#0a1432]/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>

                      {/* Header */}
                      <div className="flex justify-between items-start mb-5 pr-6">
                        <div style={{ transform: "translateZ(30px)" }}>
                          <h3 className="font-bold text-lg text-white neon-text">{a.title}</h3>
                          <p className="text-sm text-slate-400 mt-1">
                            Due: <span className="text-purple-300">{a.due}</span>
                          </p>
                        </div>
                      </div>

                      <div
                        className="absolute top-12 right-5"
                        style={{ transform: "translateZ(40px)" }}
                      >
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                            submitted
                              ? "bg-cyan-400/15 text-cyan-300 border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                              : "bg-purple-500/15 text-purple-300 border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.35)]"
                          }`}
                        >
                          {a.status}
                        </span>
                      </div>

                      {/* Progress */}
                      <div className="mb-5" style={{ transform: "translateZ(22px)" }}>
                        <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                          <span>Progress</span>
                          <span className="text-cyan-300 font-semibold">{a.progress}%</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div
                            className="bar-grow bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                            style={{ width: `${a.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Action */}
                      <div
                        className="flex justify-end items-center gap-3"
                        style={{ transform: "translateZ(40px)" }}
                      >
                        <button className="text-sm text-slate-300 hover:text-cyan-300 transition">
                          View Details
                        </button>

                        {!submitted && (
                          <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-[0_0_18px_rgba(34,211,238,0.5)] hover:shadow-[0_0_28px_rgba(168,85,247,0.8)] hover:scale-105 transition">
                            Submit Assignment
                          </button>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}