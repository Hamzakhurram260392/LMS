// import StatCard from "../components/StatCard"

// export default function StudentDashboard() {
//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

//       {/* Active Courses */}
//       <div className="bg-white rounded-xl p-5 shadow xl:col-span-2">
//         <h3 className="font-semibold mb-4">Active Courses</h3>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[
//             { title: "Web Development", students: 32 },
//             { title: "Python for Beginners", students: 20 },
//             { title: "Machine Learning Basics", students: 20 },
//           ].map((c, i) => (
//             <div key={i} className="bg-teal-600 text-white rounded-lg p-4">
//               <p className="font-medium">{c.title}</p>
//               <p className="text-sm mt-2">{c.students} Students</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Upcoming Assignments */}
//       <div className="bg-white rounded-xl p-5 shadow">
//         <h3 className="font-semibold mb-4">Upcoming Assignments</h3>

//         <div className="space-y-4 text-sm">
//           <div className="flex justify-between">
//             <span>Database Design Project</span>
//             <button className="text-teal-600">View</button>
//           </div>
//           <div className="flex justify-between">
//             <span>JavaScript Basics Quiz</span>
//             <button className="text-teal-600">View</button>
//           </div>
//         </div>
//       </div>

//       {/* Completed Assignments */}
//       <div className="bg-white rounded-xl p-5 shadow xl:col-span-2">
//         <h3 className="font-semibold mb-4">Completed Assignments</h3>

//         <div className="space-y-4 text-sm">
//           <div className="flex justify-between items-center">
//             <span>Web Development Final Project</span>
//             <button className="bg-teal-500 text-white px-3 py-1 rounded text-xs">
//               Start Course
//             </button>
//           </div>

//           <div className="flex justify-between items-center">
//             <span>Python Conditional Statements</span>
//             <button className="bg-teal-500 text-white px-3 py-1 rounded text-xs">
//               Start Course
//             </button>
//           </div>
//         </div>

//         <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded text-sm">
//           Submit Assignments
//         </button>
//       </div>

//       {/* Progress Tracker */}
//       <div className="bg-white rounded-xl p-5 shadow">
//         <h3 className="font-semibold mb-4">Progress Tracker</h3>

//         <div className="flex flex-col items-center">
//           <div className="w-32 h-32 rounded-full border-12 border-teal-500 flex items-center justify-center">
//             <span className="text-xl font-bold">65%</span>
//           </div>
//           <p className="text-sm mt-2 text-gray-500">Completion</p>
//         </div>

//         <div className="mt-6">
//           <p className="text-sm font-medium mb-2">Quiz Scores</p>
//           <div className="flex gap-2 items-end h-24">
//             {[40, 60, 80, 70, 90].map((h, i) => (
//               <div
//                 key={i}
//                 className="bg-teal-400 w-4 rounded"
//                 style={{ height: `${h}%` }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }






// "use client";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const progressData = [
//   { week: "W1", progress: 20 },
//   { week: "W2", progress: 35 },
//   { week: "W3", progress: 50 },
//   { week: "W4", progress: 65 },
// ];

// export default function StudentDashboard() {
//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

//       {/* Active Courses */}
//       <div className="bg-white rounded-xl p-5 shadow xl:col-span-2">
//         <h3 className="font-semibold mb-4">Active Courses</h3>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[
//             { title: "Web Development", progress: 70 },
//             { title: "Python for Beginners", progress: 60 },
//             { title: "Machine Learning Basics", progress: 45 },
//           ].map((c, i) => (
//             <div
//               key={i}
//               className="bg-gradient-to-br from-blue-400 to-emerald-700 text-white rounded-xl p-4 shadow"
//             >
//               <p className="font-medium">{c.title}</p>
//               <p className="text-sm mt-2">{c.progress}% Completed</p>

//               <div className="mt-3 bg-white/30 h-2 rounded">
//                 <div
//                   className="bg-white h-2 rounded"
//                   style={{ width: `${c.progress}%` }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Upcoming Assignments */}
//       <div className="bg-white rounded-xl p-5 shadow">
//         <h3 className="font-semibold mb-4">Upcoming Assignments</h3>

//         <div className="space-y-4 text-sm">
//           {[
//             { title: "Database Design Project", due: "20 Feb" },
//             { title: "JavaScript Basics Quiz", due: "24 Feb" },
//           ].map((a, i) => (
//             <div key={i} className="flex justify-between items-center">
//               <div>
//                 <p className="font-medium">{a.title}</p>
//                 <p className="text-xs text-gray-500">Due: {a.due}</p>
//               </div>
//               <button className="text-teal-600 font-medium">
//                 View →
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Completed Assignments */}
//       <div className="bg-white rounded-xl p-5 shadow xl:col-span-2">
//         <h3 className="font-semibold mb-4">Completed Assignments</h3>

//         <div className="space-y-4 text-sm">
//           {[
//             "Web Development Final Project",
//             "Python Conditional Statements",
//           ].map((t, i) => (
//             <div key={i} className="flex justify-between items-center">
//               <span>{t}</span>
//               <span className="text-green-800 font-medium">
//                 ✓ Completed
//               </span>
//             </div>
//           ))}
//         </div>

//         <button className="mt-5 bg-indigo-700 rounded-2xl text-white px-4 py-2 rounded text-sm">
//           Submit New Assignment
//         </button>
//       </div>

//       {/* Progress + Chart */}
//       <div className="bg-white rounded-xl p-5 shadow">
//         <h3 className="font-semibold mb-4">Overall Progress</h3>

//         {/* Circular Progress */}
//         <div className="flex flex-col items-center mb-6">
//           <div className="relative w-32 h-32">
//             <svg className="w-full h-full rotate-[-90deg]">
//               <circle
//                 cx="64"
//                 cy="64"
//                 r="54"
//                 stroke="#e5e7eb"
//                 strokeWidth="10"
//                 fill="none"
//               />
//               <circle
//                 cx="64"
//                 cy="64"
//                 r="54"
//                 stroke="#14b8a6"
//                 strokeWidth="10"
//                 fill="none"
//                 strokeDasharray="339"
//                 strokeDashoffset="118"
//               />
//             </svg>
//             <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
//               65%
//             </span>
//           </div>
//           <p className="text-sm mt-2 text-gray-500">Course Completion</p>
//         </div>

//         {/* Progress Chart */}
//         <div className="h-32">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={progressData}>
//               <XAxis dataKey="week" />
//               <YAxis hide />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="progress"
//                 stroke="#14b8a6"
//                 strokeWidth={3}
//                 dot={{ r: 4 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//     </div>
//   );
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
} from "recharts";

const progressData = [
  { week: "W1", progress: 20 },
  { week: "W2", progress: 35 },
  { week: "W3", progress: 50 },
  { week: "W4", progress: 65 },
];

const activeCourses = [
  { title: "Web Development", progress: 70, color: "from-cyan-400 to-sky-500", glow: "shadow-cyan-400/50" },
  { title: "Python for Beginners", progress: 60, color: "from-purple-500 to-fuchsia-500", glow: "shadow-purple-500/50" },
  { title: "Machine Learning Basics", progress: 45, color: "from-sky-400 to-indigo-500", glow: "shadow-sky-400/50" },
];

const upcoming = [
  { title: "Database Design Project", due: "20 Feb" },
  { title: "JavaScript Basics Quiz", due: "24 Feb" },
];

const completed = ["Web Development Final Project", "Python Conditional Statements"];

const RADIUS = 54;
const CIRCUMFERENCE = 339;
const OFFSET = 118; // 65%

/* ============ 3D TILT CARD (mouse ke saath ghoomta hai) ============ */
function TiltCard({
  children,
  className = "",
  intensity = 6,
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
      transform: `perspective(1000px) rotateX(${(0.5 - y) * intensity}deg) rotateY(${(x - 0.5) * intensity}deg) translateZ(12px) scale(1.01)`,
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

export default function StudentDashboard() {
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
        @keyframes ringDraw { from { stroke-dashoffset: ${CIRCUMFERENCE}; } to { stroke-dashoffset: ${OFFSET}; } }
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
      <div className="absolute top-10 right-1/3 hidden xl:block" style={{ perspective: "600px" }}>
        <div className="cube">
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>
      <div
        className="absolute top-52 left-4 w-20 h-20 rounded-full border-2 border-cyan-400/70 hidden lg:block"
        style={{ animation: "spinY 9s linear infinite", boxShadow: "0 0 18px rgba(34,211,238,.6)" }}
      />
      <div
        className="absolute bottom-24 right-10 w-16 h-16 rounded-full border-2 border-purple-500/70 hidden lg:block"
        style={{ animation: "spinY 6s linear infinite reverse", boxShadow: "0 0 18px rgba(168,85,247,.6)" }}
      />

      {/* ✦ Stars */}
      <span className="absolute top-16 left-24 text-cyan-300 text-2xl animate-pulse neon-text">✦</span>
      <span className="absolute top-40 right-32 text-purple-400 text-xl neon-pulse">✧</span>
      <span className="absolute bottom-32 left-1/3 text-cyan-400 text-xl neon-pulse">✦</span>

      <div
        className="relative z-10 grid grid-cols-1 xl:grid-cols-3 gap-8"
        style={{ perspective: "1400px" }}
      >
        {/* ================= ACTIVE COURSES ================= */}
        <div className="xl:col-span-2 slide-in">
          <TiltCard
            intensity={3}
            className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)] p-7 h-full"
          >
            <h3 className="text-2xl font-extrabold text-cyan-300 neon-text mb-6">Active Courses</h3>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
              style={{ transformStyle: "preserve-3d" }}
            >
              {activeCourses.map((c, i) => (
                <div key={i} className="float3d" style={{ animationDelay: `${i * 0.5}s` }}>
                  <TiltCard intensity={18} className="rounded-[1.5rem]">
                    <div
                      className={`rounded-[1.5rem] p-5 text-white shadow-lg ${c.glow} bg-gradient-to-br ${c.color} border border-white/20`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <p className="font-bold" style={{ transform: "translateZ(35px)" }}>
                        {c.title}
                      </p>
                      <p className="text-sm mt-2 opacity-90" style={{ transform: "translateZ(22px)" }}>
                        {c.progress}% Completed
                      </p>

                      <div
                        className="mt-3 bg-white/25 h-2 rounded-full overflow-hidden"
                        style={{ transform: "translateZ(18px)" }}
                      >
                        <div
                          className="bar-grow bg-white h-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                          style={{ width: `${c.progress}%` }}
                        />
                      </div>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* ================= UPCOMING ASSIGNMENTS ================= */}
        <div className="slide-in" style={{ animationDelay: "0.15s" }}>
          <TiltCard
            intensity={8}
            className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.2)] p-7 h-full"
          >
            <h3 className="text-2xl font-extrabold text-purple-400 mb-6">Upcoming Assignments</h3>

            <div className="space-y-5 text-sm">
              {upcoming.map((a, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center hover:translate-x-1 transition-all"
                >
                  <div>
                    <p className="font-medium text-slate-100">{a.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Due: <span className="text-purple-300">{a.due}</span>
                    </p>
                  </div>
                  <button className="text-purple-300 font-semibold hover:text-cyan-300 transition">
                    View →
                  </button>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* ================= COMPLETED ASSIGNMENTS ================= */}
        <div className="xl:col-span-2 slide-in" style={{ animationDelay: "0.3s" }}>
          <TiltCard
            intensity={3}
            className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)] p-7 h-full"
          >
            <h3 className="text-2xl font-extrabold text-cyan-300 neon-text mb-6">
              Completed Assignments
            </h3>

            <div className="space-y-4 text-sm">
              {completed.map((t, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-4 py-3 rounded-xl border border-cyan-400/15 bg-white/5 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:translate-x-1 transition-all"
                >
                  <span className="text-slate-100">{t}</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-400/15 text-cyan-300 border border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.35)]">
                    ✓ Completed
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-5 py-2.5 rounded-2xl text-sm font-semibold shadow-[0_0_18px_rgba(34,211,238,0.5)] hover:shadow-[0_0_28px_rgba(168,85,247,0.8)] hover:scale-105 transition">
              Submit New Assignment
            </button>
          </TiltCard>
        </div>

        {/* ================= OVERALL PROGRESS ================= */}
        <div className="slide-in" style={{ animationDelay: "0.45s" }}>
          <TiltCard
            intensity={8}
            className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.2)] p-7 h-full"
          >
            <h3 className="text-2xl font-extrabold text-purple-400 mb-6">Overall Progress</h3>

            {/* Circular Progress */}
            <div className="flex flex-col items-center mb-6" style={{ transformStyle: "preserve-3d" }}>
              <div
                className="relative w-40 h-40 flex items-center justify-center"
                style={{ transform: "translateZ(35px)" }}
              >
                <div className="ring-orbit absolute inset-0 rounded-full border-2 border-dashed border-purple-400/50" />
                <svg
                  viewBox="0 0 128 128"
                  className="w-32 h-32 rotate-[-90deg]"
                  style={{ filter: "drop-shadow(0 0 10px rgba(34,211,238,0.8))" }}
                >
                  <defs>
                    <linearGradient id="dashRing" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="64"
                    cy="64"
                    r={RADIUS}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r={RADIUS}
                    stroke="url(#dashRing)"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={OFFSET}
                    className="ring-draw"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-white neon-text">
                  65%
                </span>
              </div>
              <p className="text-sm mt-3 text-slate-400">Course Completion</p>
            </div>

            {/* Progress Chart */}
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={progressData}>
                  <defs>
                    <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.55} />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity={0.05} />
                    </linearGradient>
                    <linearGradient id="dashLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="week" stroke="#7dd3fc" />
                  <YAxis hide />
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
                    dataKey="progress"
                    stroke="url(#dashLine)"
                    strokeWidth={3}
                    fill="url(#dashFill)"
                    dot={{ r: 4, fill: "#22d3ee", stroke: "#a855f7", strokeWidth: 2 }}
                    style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,0.8))" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}