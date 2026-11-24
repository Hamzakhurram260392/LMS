// 'use client'
// import { LineChart, Line, XAxis, YAxis } from 'recharts'

// const progress = [
//   { week: 'W1', score: 60 },
//   { week: 'W2', score: 75 },
//   { week: 'W3', score: 85 },
// ]

// export default function Progress() {
//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-4">My Progress</h1>
//       <LineChart width={500} height={300} data={progress}>
//         <XAxis dataKey="week" />
//         <YAxis />
//         <Line dataKey="score" />
//       </LineChart>
//     </div>
//   )
// }




// 'use client'

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts'

// const progress = [
//   { week: 'W1', score: 60 },
//   { week: 'W2', score: 75 },
//   { week: 'W3', score: 85 },
//   { week: 'W4', score: 90 },
// ]

// export default function Progress() {
//   return (
//     <div className="space-y-8">

//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-extrabold text-gray-800">
//           My Progress
//         </h1>
//         <p className="text-gray-500 mt-1">
//           Track your learning journey & performance
//         </p>
//       </div>

//       {/* Top Summary */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//         {/* Completion */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow p-6 flex flex-col items-center justify-center">
//           <div className="relative w-32 h-32 rounded-full border-[10px] border-teal-500 flex items-center justify-center">
//             <span className="text-2xl font-extrabold text-gray-800">
//               78%
//             </span>
//           </div>
//           <p className="mt-3 text-sm text-gray-500">
//             Overall Completion
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow p-6 md:col-span-2">
//           <h3 className="font-semibold text-lg text-gray-800 mb-4">
//             Weekly Performance
//           </h3>

//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={progress}>
//                 <XAxis dataKey="week" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line
//                   type="monotone"
//                   dataKey="score"
//                   strokeWidth={3}
//                   stroke="#14b8a6"
//                   dot={{ r: 6 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Skill Progress */}
//       <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow p-6">
//         <h3 className="font-semibold text-lg text-gray-800 mb-6">
//           Skills Progress
//         </h3>

//         {[
//           { skill: 'Web Development', value: 85 },
//           { skill: 'Python', value: 70 },
//           { skill: 'Problem Solving', value: 65 },
//           { skill: 'Databases', value: 60 },
//         ].map((s, i) => (
//           <div key={i} className="mb-4">
//             <div className="flex justify-between text-sm text-gray-600 mb-1">
//               <span>{s.skill}</span>
//               <span>{s.value}%</span>
//             </div>
//             <div className="w-full bg-gray-200 h-2 rounded">
//               <div
//                 className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded"
//                 style={{ width: `${s.value}%` }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   )
// }











"use client";
import React, { useRef, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const progress = [
  { week: "W1", score: 60 },
  { week: "W2", score: 75 },
  { week: "W3", score: 85 },
  { week: "W4", score: 90 },
];

const skills = [
  { skill: "Web Development", value: 85 },
  { skill: "Python", value: 70 },
  { skill: "Problem Solving", value: 65 },
  { skill: "Databases", value: 60 },
];

const COMPLETION = 78;
const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/* ============ 3D TILT CARD (mouse ke saath ghoomta hai) ============ */
function TiltCard({
  children,
  className = "",
  intensity = 8,
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
      transform: `perspective(1000px) rotateX(${(0.5 - y) * intensity}deg) rotateY(${(x - 0.5) * intensity}deg) translateZ(12px) scale(1.02)`,
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
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(34,211,238,0.2), transparent 55%)`,
        }}
      />
    </div>
  );
}

export default function Progress() {
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
        @keyframes ringDraw { from { stroke-dashoffset: ${CIRCUMFERENCE}; } to { stroke-dashoffset: ${CIRCUMFERENCE * (1 - COMPLETION / 100)}; } }
        @keyframes ringSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .float3d { animation: float3d 6s ease-in-out infinite; }
        .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
        .slide-in { animation: slideIn .8s ease-out both; }
        .bar-grow { transform-origin: left; animation: barGrow 1s ease-out both; }
        .ring-draw { animation: ringDraw 1.6s ease-out both; }
        .ring-orbit { animation: ringSpin 8s linear infinite; }
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
        {/* Header */}
        <div className="slide-in">
          <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
            My <span className="text-purple-400">Progress</span>
          </h1>
          <p className="text-slate-400 mt-1">Track your learning journey & performance</p>
        </div>

        {/* Top Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Completion */}
          <div className="slide-in" style={{ animationDelay: "0.15s" }}>
            <div className="float3d">
              <TiltCard
                intensity={14}
                className="rounded-[2rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-transparent to-purple-500/70 h-full"
              >
                <div
                  className="relative bg-[#0a1432]/90 backdrop-blur-xl rounded-[2rem] shadow-[0_0_40px_rgba(34,211,238,0.2)] p-6 flex flex-col items-center justify-center h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>

                  <div
                    className="relative w-40 h-40 flex items-center justify-center"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    {/* orbiting ring */}
                    <div
                      className="ring-orbit absolute inset-0 rounded-full border-2 border-dashed border-purple-400/50"
                    />
                    <svg
                      viewBox="0 0 120 120"
                      className="w-32 h-32 -rotate-90"
                      style={{ filter: "drop-shadow(0 0 10px rgba(34,211,238,0.8))" }}
                    >
                      <defs>
                        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="60"
                        cy="60"
                        r={RADIUS}
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="10"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r={RADIUS}
                        fill="none"
                        stroke="url(#ringGrad)"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={CIRCUMFERENCE * (1 - COMPLETION / 100)}
                        className="ring-draw"
                      />
                    </svg>
                    <span className="absolute text-3xl font-extrabold text-white neon-text">
                      {COMPLETION}%
                    </span>
                  </div>

                  <p
                    className="mt-4 text-sm text-slate-400"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    Overall Completion
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Weekly Performance */}
          <div className="md:col-span-2 slide-in" style={{ animationDelay: "0.3s" }}>
            <TiltCard
              intensity={3}
              className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)] p-6 h-full"
            >
              <h3 className="font-bold text-xl text-cyan-300 neon-text mb-4">Weekly Performance</h3>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={progress}>
                    <defs>
                      <linearGradient id="scoreFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.55} />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity={0.05} />
                      </linearGradient>
                      <linearGradient id="scoreLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(34,211,238,0.15)" />
                    <XAxis dataKey="week" stroke="#7dd3fc" />
                    <YAxis stroke="#7dd3fc" />
                    <Tooltip
                      contentStyle={{
                        background: "#0a1432",
                        border: "1px solid #22d3ee",
                        borderRadius: 12,
                        color: "#e0f2fe",
                        boxShadow: "0 0 18px rgba(34,211,238,0.5)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="url(#scoreLine)"
                      strokeWidth={4}
                      fill="url(#scoreFill)"
                      dot={{ r: 6, fill: "#22d3ee", stroke: "#a855f7", strokeWidth: 2 }}
                      activeDot={{ r: 10, fill: "#a855f7", stroke: "#22d3ee", strokeWidth: 3 }}
                      style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.8))" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Skill Progress */}
        <div className="slide-in" style={{ animationDelay: "0.45s" }}>
          <TiltCard
            intensity={2}
            className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.2)] p-6"
          >
            <h3 className="font-bold text-xl text-purple-400 mb-6">Skills Progress</h3>

            {skills.map((s, i) => (
              <div key={i} className="mb-5 last:mb-0">
                <div className="flex justify-between text-sm text-slate-300 mb-1.5">
                  <span>{s.skill}</span>
                  <span className="text-cyan-300 font-semibold">{s.value}%</span>
                </div>
                <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bar-grow bg-gradient-to-r from-cyan-400 to-purple-500 h-2.5 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    style={{ width: `${s.value}%`, animationDelay: `${i * 0.15}s` }}
                  />
                </div>
              </div>
            ))}
          </TiltCard>
        </div>
      </div>
    </div>
  );
}