// "use client";

// export default function AdminReports() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Reports</h1>
//       <p className="text-gray-600">Reports content coming soon...</p>
//     </div>
//   );
// }




// "use client";
// import React from "react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const studentGrowth = [
//   { month: "Jan", students: 120 },
//   { month: "Feb", students: 160 },
//   { month: "Mar", students: 200 },
//   { month: "Apr", students: 240 },
//   { month: "May", students: 275 },
// ];

// const courseStudents = [
//   { name: "Web Dev", value: 80 },
//   { name: "WordPress", value: 55 },
//   { name: "Digital Marketing", value: 45 },
//   { name: "Excel", value: 35 },
//   { name: "IELTS", value: 60 },
// ];

// const completionData = [
//   { name: "Completed", value: 60 },
//   { name: "In Progress", value: 30 },
//   { name: "Dropped", value: 10 },
// ];

// const COLORS = ["#34d399", "#60a5fa", "#f87171"];

// export default function AdminReports() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#ecfeff] p-8">

//       {/* ================= TITLE ================= */}
//       <div className="mb-10">
//         <h1 className="text-4xl font-extrabold text-gray-800">
//           Reports & Analytics
//         </h1>
//         <p className="text-gray-500 mt-1">
//           Track performance, growth & insights
//         </p>
//       </div>

//       {/* ================= STATS ================= */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//         {[
//           { title: "Total Students", value: "275" },
//           { title: "Total Courses", value: "18" },
//           { title: "Monthly Revenue", value: "$4,200" },
//           { title: "Completion Rate", value: "72%" },
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6"
//           >
//             <p className="text-gray-500 text-sm">{item.title}</p>
//             <h2 className="text-3xl font-extrabold text-gray-800 mt-1">
//               {item.value}
//             </h2>
//           </div>
//         ))}
//       </div>

//       {/* ================= GRAPHS ================= */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//         {/* Student Growth */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6 lg:col-span-2">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">
//             Student Growth
//           </h2>
//           <ResponsiveContainer width="100%" height={280}>
//             <LineChart data={studentGrowth}>
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="students"
//                 stroke="#6366f1"
//                 strokeWidth={3}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Completion Status */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">
//             Course Status
//           </h2>
//           <ResponsiveContainer width="100%" height={280}>
//             <PieChart>
//               <Pie
//                 data={completionData}
//                 dataKey="value"
//                 innerRadius={60}
//                 outerRadius={100}
//                 paddingAngle={5}
//               >
//                 {completionData.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Course-wise Students */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6 lg:col-span-3">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">
//             Course-wise Students
//           </h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={courseStudents}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="value" fill="#34d399" radius={[8, 8, 0, 0]} />
//             </BarChart>
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
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const studentGrowth = [
  { month: "Jan", students: 120 },
  { month: "Feb", students: 160 },
  { month: "Mar", students: 200 },
  { month: "Apr", students: 240 },
  { month: "May", students: 275 },
];

const courseStudents = [
  { name: "Web Dev", value: 80 },
  { name: "WordPress", value: 55 },
  { name: "Digital Marketing", value: 45 },
  { name: "Excel", value: 35 },
  { name: "IELTS", value: 60 },
];

const completionData = [
  { name: "Completed", value: 60 },
  { name: "In Progress", value: 30 },
  { name: "Dropped", value: 10 },
];

// logo ke neon colors: cyan, purple, pink
const COLORS = ["#22d3ee", "#a855f7", "#f472b6"];

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

export default function AdminReports() {
  const stats = [
    { title: "Total Students", value: "275", icon: "🎓", color: "from-cyan-400 to-sky-500", glow: "shadow-cyan-400/40" },
    { title: "Total Courses", value: "18", icon: "📚", color: "from-purple-500 to-fuchsia-500", glow: "shadow-purple-500/40" },
    { title: "Monthly Revenue", value: "$4,200", icon: "💰", color: "from-sky-400 to-indigo-500", glow: "shadow-sky-400/40" },
    { title: "Completion Rate", value: "72%", icon: "✅", color: "from-fuchsia-500 to-purple-500", glow: "shadow-fuchsia-500/40" },
  ];

  return (
    <div className="min-h-[calc(100vh-88px)] bg-[#050b1f] text-slate-100 p-8 relative overflow-hidden">
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
        className="absolute top-44 left-6 w-20 h-20 rounded-full border-2 border-cyan-400/70 hidden lg:block"
        style={{ animation: "spinY 9s linear infinite", boxShadow: "0 0 18px rgba(34,211,238,.6)" }}
      />
      <div
        className="absolute bottom-24 right-12 w-16 h-16 rounded-full border-2 border-purple-500/70 hidden lg:block"
        style={{ animation: "spinY 6s linear infinite reverse", boxShadow: "0 0 18px rgba(168,85,247,.6)" }}
      />

      {/* ✦ Stars */}
      <span className="absolute top-14 left-24 text-cyan-300 text-2xl animate-pulse neon-text">✦</span>
      <span className="absolute top-40 right-32 text-purple-400 text-xl neon-pulse">✧</span>
      <span className="absolute bottom-32 left-1/3 text-cyan-400 text-xl neon-pulse">✦</span>

      <div className="relative z-10" style={{ perspective: "1400px" }}>
        {/* ================= TITLE ================= */}
        <div className="mb-10 slide-in">
          <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
            Reports & <span className="text-purple-400">Analytics</span>
          </h1>
          <p className="text-slate-400 mt-1">Track performance, growth & insights</p>
        </div>

        {/* ================= STATS ================= */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {stats.map((item, i) => (
            <div key={i} className="slide-in" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="float3d" style={{ animationDelay: `${i * 0.4}s` }}>
                <TiltCard
                  intensity={14}
                  className="rounded-2xl p-[2px] bg-gradient-to-br from-cyan-400/70 via-transparent to-purple-500/70"
                >
                  <div
                    className={`relative bg-[#0a1432]/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl ${item.glow}`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="absolute top-3 right-4 text-cyan-300 text-sm neon-pulse">✦</span>
                    <div className="flex items-center justify-between">
                      <div style={{ transform: "translateZ(25px)" }}>
                        <p className="text-slate-400 text-sm">{item.title}</p>
                        <h2 className="text-3xl font-extrabold text-white neon-text mt-1">
                          {item.value}
                        </h2>
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

        {/* ================= GRAPHS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student Growth */}
          <div className="lg:col-span-2 slide-in" style={{ animationDelay: "0.5s" }}>
            <TiltCard
              intensity={4}
              className="rounded-2xl bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)] p-6"
            >
              <h2 className="text-xl font-bold text-cyan-300 neon-text mb-4">Student Growth</h2>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={studentGrowth}>
                  <defs>
                    <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.55} />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity={0.05} />
                    </linearGradient>
                    <linearGradient id="growthLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(34,211,238,0.15)" />
                  <XAxis dataKey="month" stroke="#7dd3fc" />
                  <YAxis stroke="#7dd3fc" />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area
                    type="monotone"
                    dataKey="students"
                    stroke="url(#growthLine)"
                    strokeWidth={4}
                    fill="url(#growthFill)"
                    dot={{ r: 5, fill: "#22d3ee", stroke: "#a855f7", strokeWidth: 2 }}
                    activeDot={{ r: 9, fill: "#a855f7", stroke: "#22d3ee", strokeWidth: 3 }}
                    style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.8))" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </TiltCard>
          </div>

          {/* Completion Status */}
          <div className="slide-in" style={{ animationDelay: "0.65s" }}>
            <TiltCard
              intensity={8}
              className="rounded-2xl bg-[#0a1432]/85 backdrop-blur-xl border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.2)] p-6 h-full"
            >
              <h2 className="text-xl font-bold text-purple-400 mb-4">Course Status</h2>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={completionData}
                    dataKey="value"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    stroke="#050b1f"
                    strokeWidth={3}
                    style={{ filter: "drop-shadow(0 0 10px rgba(34,211,238,0.5))" }}
                  >
                    {completionData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                </PieChart>
              </ResponsiveContainer>
              {/* legend */}
              <div className="flex flex-wrap justify-center gap-4 mt-2 text-xs text-slate-300">
                {completionData.map((d, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ background: COLORS[i], boxShadow: `0 0 8px ${COLORS[i]}` }}
                    />
                    {d.name}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>

          {/* Course-wise Students */}
          <div className="lg:col-span-3 slide-in" style={{ animationDelay: "0.8s" }}>
            <TiltCard
              intensity={3}
              className="rounded-2xl bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)] p-6"
            >
              <h2 className="text-xl font-bold text-cyan-300 neon-text mb-4">Course-wise Students</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={courseStudents}>
                  <defs>
                    <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(34,211,238,0.15)" />
                  <XAxis dataKey="name" stroke="#7dd3fc" />
                  <YAxis stroke="#7dd3fc" />
                  <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(34,211,238,0.08)" }} />
                  <Bar
                    dataKey="value"
                    fill="url(#barFill)"
                    radius={[8, 8, 0, 0]}
                    style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.6))" }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </TiltCard>
          </div>
        </div>
      </div>
    </div>
  );
}