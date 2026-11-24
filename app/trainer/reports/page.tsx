// 'use client'
// import { BarChart, Bar, XAxis, YAxis } from "recharts"

// const data = [
//   { name: "Course A", students: 40 },
//   { name: "Course B", students: 25 },
// ]

// export default function Reports() {
//   return (
//     <BarChart width={500} height={300} data={data}>
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Bar dataKey="students" />
//     </BarChart>
//   )
// }







// "use client";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const courseData = [
//   { name: "Web Dev", students: 40 },
//   { name: "Python", students: 25 },
//   { name: "ML Basics", students: 18 },
// ];

// const assignmentData = [
//   { name: "Submitted", value: 65 },
//   { name: "Pending", value: 20 },
//   { name: "Late", value: 10 },
// ];

// export default function TrainerReports() {
//   return (
//     <div className="relative w-full min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#ecfeff] p-8 overflow-x-hidden flex flex-col">

//       {/* 🌟 Stars */}
//       <span className="absolute top-16 left-24 text-yellow-400 text-2xl animate-pulse">✦</span>
//       <span className="absolute top-40 right-32 text-pink-400 text-xl">✧</span>
//       <span className="absolute bottom-32 left-1/3 text-indigo-400 text-xl">✦</span>

//       {/* ☁️ Blobs */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
//       <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-pink-300/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl" />

//       {/* ===== CONTENT ===== */}
//       <div className="relative z-10 w-full flex-1 flex flex-col gap-8">

//         {/* Page Heading */}
//         <div>
//           <h1 className="text-4xl font-extrabold text-gray-800">Trainer Reports</h1>
//           <p className="text-gray-500 mt-1">Visualize course stats, attendance & assignments</p>
//         </div>

//         {/* Top Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
//           <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl hover:scale-[1.02] transition">
//             <p className="text-sm text-gray-500">Total Students</p>
//             <h3 className="text-3xl font-extrabold text-teal-600">83</h3>
//           </div>
//           <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl hover:scale-[1.02] transition">
//             <p className="text-sm text-gray-500">Active Courses</p>
//             <h3 className="text-3xl font-extrabold text-teal-600">3</h3>
//           </div>
//           <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl hover:scale-[1.02] transition">
//             <p className="text-sm text-gray-500">Avg Attendance</p>
//             <h3 className="text-3xl font-extrabold text-teal-600">78%</h3>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full flex-1">

//           {/* Students Per Course */}
//           <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl hover:scale-[1.02] transition flex flex-col h-full">
//             <h3 className="font-semibold mb-4 text-gray-800">Students per Course</h3>
//             <div className="flex-1 min-h-[400px]">
//               <ResponsiveContainer width="100%" height="80%">
//                 <BarChart data={courseData}>
//                   <XAxis dataKey="name" stroke="#374151" />
//                   <YAxis stroke="#374151" />
//                   <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "1rem", border: "none" }} />
//                   <Bar dataKey="students" fill="#14b8a6" radius={[6,6,0,0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Assignment Status */}
//           <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl hover:scale-[1.02] transition flex flex-col h-full">
//             <h3 className="font-semibold mb-4 text-gray-800">Assignment Status</h3>
//             <div className="flex-1 min-h-[400px]">
//               <ResponsiveContainer width="100%" height="80%">
//                 <BarChart data={assignmentData}>
//                   <XAxis dataKey="name" stroke="#374151" />
//                   <YAxis stroke="#374151" />
//                   <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "1rem", border: "none" }} />
//                   <Bar dataKey="value" fill="#0d9488" radius={[6,6,0,0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }















"use client";
import React, { useRef, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const courseData = [
  { name: "Web Dev", students: 40 },
  { name: "Python", students: 25 },
  { name: "ML Basics", students: 18 },
];

const assignmentData = [
  { name: "Submitted", value: 65 },
  { name: "Pending", value: 20 },
  { name: "Late", value: 10 },
];

const tooltipStyle = {
  background: "#0a1432",
  border: "1px solid #22d3ee",
  borderRadius: 12,
  color: "#e0f2fe",
  boxShadow: "0 0 18px rgba(34,211,238,0.5)",
};

/* ============ 3D TILT CARD (mouse ke saath ghoomta hai) ============ */
function TiltCard({
  children,
  className = "",
  intensity = 10,
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

export default function TrainerReports() {
  const stats = [
    { title: "Total Students", value: "83", icon: "🎓", color: "from-cyan-400 to-sky-500", glow: "shadow-cyan-400/40" },
    { title: "Active Courses", value: "3", icon: "📚", color: "from-purple-500 to-fuchsia-500", glow: "shadow-purple-500/40" },
    { title: "Avg Attendance", value: "78%", icon: "✅", color: "from-sky-400 to-indigo-500", glow: "shadow-sky-400/40" },
  ];

  return (
    <div className="relative w-full min-h-[calc(100vh-88px)] bg-[#050b1f] text-slate-100 p-8 overflow-x-hidden flex flex-col">
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
        .float3d { animation: float3d 6s ease-in-out infinite; }
        .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
        .slide-in { animation: slideIn .8s ease-out both; }
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

      {/* ===== CONTENT ===== */}
      <div
        className="relative z-10 w-full flex-1 flex flex-col gap-8"
        style={{ perspective: "1400px" }}
      >
        {/* Page Heading */}
        <div className="slide-in">
          <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
            Trainer <span className="text-purple-400">Reports</span>
          </h1>
          <p className="text-slate-400 mt-1">Visualize course stats, attendance & assignments</p>
        </div>

        {/* Top Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {stats.map((item, i) => (
            <div key={i} className="slide-in" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="float3d" style={{ animationDelay: `${i * 0.4}s` }}>
                <TiltCard
                  intensity={14}
                  className="rounded-[2rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-transparent to-purple-500/70"
                >
                  <div
                    className={`relative bg-[#0a1432]/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl ${item.glow}`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="absolute top-4 right-5 text-cyan-300 text-sm neon-pulse">✦</span>
                    <div className="flex items-center justify-between">
                      <div style={{ transform: "translateZ(25px)" }}>
                        <p className="text-sm text-slate-400">{item.title}</p>
                        <h3 className="text-4xl font-extrabold text-white neon-text mt-1">
                          {item.value}
                        </h3>
                      </div>
                      <div
                        className={`bg-gradient-to-r ${item.color} text-2xl p-3 rounded-full shadow-lg ${item.glow}`}
                        style={{ transform: "translateZ(45px)" }}
                      >
                        {item.icon}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full flex-1">
          {/* Students Per Course */}
          <div className="slide-in h-full" style={{ animationDelay: "0.5s" }}>
            <TiltCard
              intensity={4}
              className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)] p-6 flex flex-col h-full"
            >
              <h3 className="font-bold text-xl text-cyan-300 neon-text mb-4">Students per Course</h3>
              <div className="flex-1 min-h-[400px]">
                <ResponsiveContainer width="100%" height="80%">
                  <BarChart data={courseData}>
                    <defs>
                      <linearGradient id="barCyan" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(34,211,238,0.15)" />
                    <XAxis dataKey="name" stroke="#7dd3fc" />
                    <YAxis stroke="#7dd3fc" />
                    <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(34,211,238,0.08)" }} />
                    <Bar
                      dataKey="students"
                      fill="url(#barCyan)"
                      radius={[8, 8, 0, 0]}
                      style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.6))" }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TiltCard>
          </div>

          {/* Assignment Status */}
          <div className="slide-in h-full" style={{ animationDelay: "0.65s" }}>
            <TiltCard
              intensity={4}
              className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.2)] p-6 flex flex-col h-full"
            >
              <h3 className="font-bold text-xl text-purple-400 mb-4">Assignment Status</h3>
              <div className="flex-1 min-h-[400px]">
                <ResponsiveContainer width="100%" height="80%">
                  <BarChart data={assignmentData}>
                    <defs>
                      <linearGradient id="barPurple" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(168,85,247,0.2)" />
                    <XAxis dataKey="name" stroke="#c4b5fd" />
                    <YAxis stroke="#c4b5fd" />
                    <Tooltip
                      contentStyle={{ ...tooltipStyle, border: "1px solid #a855f7", boxShadow: "0 0 18px rgba(168,85,247,0.5)" }}
                      cursor={{ fill: "rgba(168,85,247,0.08)" }}
                    />
                    <Bar
                      dataKey="value"
                      fill="url(#barPurple)"
                      radius={[8, 8, 0, 0]}
                      style={{ filter: "drop-shadow(0 0 8px rgba(168,85,247,0.6))" }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </div>
  );
}