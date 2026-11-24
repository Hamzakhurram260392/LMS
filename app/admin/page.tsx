// import StatCard from "../components/StatCard"

// import React from "react";
// import {
//   FiUsers,
//   FiBook,
//   FiBell,
//   FiSettings,
//   FiLogOut,
// } from "react-icons/fi";


// export default function AdminDashboard() {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <main className="flex-1 p-6">

//         {/* ========== TOP BAR ========== */}

//        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

//   {/* Card 1 */}
//   <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">

//     <div className="flex items-center gap-4">
//       <img className="h-12 w-12" src="/stu.png" alt="" />

//       <div>
//         <p className="text-gray-500 text-xl">Total Students</p>
//         <h1 className="text-2xl font-bold text-black">275</h1>
//       </div>
//     </div>

//     <div className="bg-green-100 p-1 rounded-full">
//       <img src="/star.png" className="h-10 w-10" />
//     </div>

//   </div>

//   {/* Card 2 */}
//   <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">

//     <div className="flex items-center gap-4">
//       <img className="h-12 w-12" src="/teacher.png" alt="" />

//       <div>
//         <p className="text-gray-500 text-xl">Total Trainers</p>
//         <h1 className="text-2xl font-bold text-black">32</h1>
//       </div>
//     </div>

//     <div className="bg-blue-100 p-1 rounded-full">
//       <img src="/star.png" className="h-10 w-10" />
//     </div>

//   </div>

//   {/* Card 3 */}
//   <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">

//     <div className="flex items-center gap-4">
//       <img className="h-12 w-12" src="/Courses.png" alt="" />

//       <div>
//         <p className="text-gray-500 text-xl">Total Courses</p>
//         <h1 className="text-2xl font-bold text-black">18</h1>
//       </div>
//     </div>

//     <div className="bg-green-100 p-1 rounded-full">
//       <img src="/star.png" className="h-10 w-10" />
//     </div>

//   </div>

//   {/* Card 4 */}
//   <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">

//     <div className="flex items-center gap-4">
//       <img className="h-12 w-12" src="/approval.png" alt="" />

//       <div>
//         <p className="text-gray-500 text-xl">Pending Approvals</p>
//         <h1 className="text-2xl font-bold text-black">5</h1>
//       </div>
//     </div>

//     <div className="bg-orange-100 p-1 rounded-full">
//       <img src="/star.png" className="h-10 w-10" />
//     </div>

//   </div>

// </div>

//         {/* ========== LOWER SECTION ========== */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

//           {/* Recent Activities */}
//       <div className="bg-white rounded-xl shadow p-5 lg:col-span-2">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold text-black">Recent Activities</h2>
//           <button className="text-sm text-emerald-600 font-medium">
//             New All →
//           </button>
//         </div>

//         <div className="space-y-5">
//           {/* Item */}
//           <div className="flex items-center gap-4">
//             <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
//               ▶
//             </div>
//             <div className="flex-1">
//               <p className="font-medium text-black">
//                 New IOPS students “Advanced Python Programming”
//               </p>
//               <p className="text-sm text-gray-500">
//                 New 5 course students on platform
//               </p>
//             </div>
//             <span className="text-sm text-gray-400">
//               Progress • 23%
//             </span>
//           </div>

//           {/* Item */}
//           <div className="flex items-center gap-4">
//             <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
//               👤
//             </div>
//             <div className="flex-1">
//               <p className="font-medium text-black">Student Maaz Ali has registered</p>
//               <p className="text-sm text-gray-500">
//                 Web development foundation course
//               </p>
//             </div>
//             <span className="text-sm text-gray-400">
//               Progress • 27%
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Pending Approvals */}
//       <div className="bg-white rounded-xl shadow p-5">
//         <h2 className="text-lg font-semibold mb-4 text-black">Pending Approvals</h2>

//         <div className="space-y-5">
//           <div>
//             <p className="font-medium text-sm mb-2 text-black">
//               Advanced Python Progress
//             </p>
//             <div className="w-full bg-gray-200 h-2 rounded-full">
//               <div className="bg-emerald-500 h-2 rounded-full w-[70%]" />
//             </div>
//           </div>

//           <div>
//             <p className="font-medium text-sm mb-2 text-black">
//               Basic Science Fundamentals
//             </p>
//             <div className="w-full bg-gray-200 h-2 rounded-full">
//               <div className="bg-emerald-500 h-2 rounded-full w-[50%]" />
//             </div>
//           </div>

//           <div className="flex gap-3">
//             <button className="bg-emerald-500 text-white px-4 py-2 rounded-md text-sm">
//               Update All
//             </button>
//             <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm">
//               Decline
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* System Notifications */}
//       <div className="bg-white rounded-xl shadow p-5">
//         <h2 className="text-lg font-semibold mb-4 text-black">System Notifications</h2>

//         <div className="space-y-4 text-sm">
//           <div className="flex justify-between text-black">
//             <p>📌 Upcoming Assignments</p>
//             <span className="text-gray-400">3:17</span>
//           </div>

//           <div className="flex justify-between text-black">
//             <p>📄 Course approvals details</p>
//             <span className="text-gray-400">5 min</span>
//           </div>

//           <div className="flex justify-between text-black">
//             <p>🔔 Additions to the Machine Tools</p>
//             <span className="text-gray-400">10 sec</span>
//           </div>
//         </div>
//       </div>

//         </div>

//       </main>
//     </div>
//   );
// }







// "use client"
// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// export default function AdminDashboard() {
//   // ===== DATA FOR GRAPH =====
//   const chartData = [
//     { name: "Mon", students: 40 },
//     { name: "Tue", students: 65 },
//     { name: "Wed", students: 50 },
//     { name: "Thu", students: 80 },
//     { name: "Fri", students: 70 },
//     { name: "Sat", students: 95 },
//     { name: "Sun", students: 60 },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#ecfeff]">
//       <main className="flex-1 p-8 relative overflow-hidden">

//         {/* 🌟 Stars */}
//         <span className="absolute top-14 left-24 text-yellow-400 text-2xl animate-pulse">✦</span>
//         <span className="absolute top-40 right-32 text-pink-400 text-xl">✧</span>
//         <span className="absolute bottom-32 left-1/3 text-indigo-400 text-xl">✦</span>

//         {/* ☁️ Blobs */}
//         <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
//         <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-pink-300/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl" />

//         {/* ================== STATS ================== */}
//         <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             { title: "Total Students", value: 275, img: "/stu.png", color: "from-emerald-400 to-cyan-400" },
//             { title: "Total Trainers", value: 32, img: "/teacher.png", color: "from-indigo-400 to-purple-400" },
//             { title: "Total Courses", value: 18, img: "/Courses.png", color: "from-pink-400 to-rose-400" },
//             { title: "Pending Approvals", value: 5, img: "/approval.png", color: "from-orange-400 to-amber-400" },
//           ].map((card, i) => (
//             <div
//               key={i}
//               className="relative group rounded-[2rem] p-[2px]
//               bg-gradient-to-r from-white/60 to-white/20
//               hover:scale-[1.03] transition-all duration-300 animate-float"
//             >
//               <div className="relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl">
//                 <span className="absolute top-4 right-5 text-yellow-300 text-lg">✦</span>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <img src={card.img} className="h-16 w-16 drop-shadow-lg" />
//                     <div>
//                       <p className="text-gray-600 text-lg font-medium">{card.title}</p>
//                       <h1 className="text-4xl font-extrabold text-gray-800">{card.value}</h1>
//                     </div>
//                   </div>
//                   <div className={`bg-gradient-to-r ${card.color} text-white p-4 rounded-full shadow-lg`}>
//                     ⭐
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ================== LOWER ================== */}
//         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
//           {/* Activities */}
//           <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-xl p-7 lg:col-span-2">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-extrabold text-gray-800">Recent Activities</h2>
//               <button className="text-sm text-indigo-600 font-semibold">View All →</button>
//             </div>
//             {["New students joined Advanced Python","Student Maaz Ali registered"].map((t, i) => (
//               <div key={i} className="flex items-center gap-4 mb-6 hover:translate-x-1 transition">
//                 <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-white flex items-center justify-center shadow-lg">▶</div>
//                 <div className="flex-1">
//                   <p className="font-semibold text-gray-800">{t}</p>
//                   <p className="text-sm text-gray-500">Activity update</p>
//                 </div>
//                 <span className="text-sm text-gray-400">Now</span>
//               </div>
//             ))}
//           </div>

//           {/* Notifications */}
//           <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-xl p-7">
//             <h2 className="text-2xl font-extrabold mb-6 text-gray-800">Notifications</h2>
//             {["Assignments","Approvals","New Tools"].map((n,i) => (
//               <div key={i} className="flex justify-between mb-4 text-gray-700 hover:text-indigo-600 transition">
//                 <p>🔔 {n}</p>
//                 <span className="text-gray-400">Now</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================== GRAPH ================== */}
//         <div className="relative z-10 mt-12">
//           <span className="absolute -top-6 left-20 text-yellow-400 text-2xl animate-pulse">✦</span>

//           <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-3xl font-extrabold text-gray-800">Student Growth Analytics</h2>
//               <span className="text-sm bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full font-semibold">Weekly Report</span>
//             </div>
//             <div className="h-[320px]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={chartData}>
//                   <defs>
//                     <linearGradient id="lineColor" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
//                       <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.4} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="students" stroke="url(#lineColor)" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 9 }} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//       </main>
//     </div>
//   );
// }

















"use client"
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

/* ============ 3D TILT CARD (mouse ke saath ghoomta hai) ============ */
function TiltCard({
  children,
  className = "",
  intensity = 14,
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
      {/* glare / chamak */}
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

export default function AdminDashboard() {
  // ===== DATA FOR GRAPH =====
  const chartData = [
    { name: "Mon", students: 40 },
    { name: "Tue", students: 65 },
    { name: "Wed", students: 50 },
    { name: "Thu", students: 80 },
    { name: "Fri", students: 70 },
    { name: "Sat", students: 95 },
    { name: "Sun", students: 60 },
  ];

  const stats = [
    { title: "Total Students", value: 275, img: "/stu.png", color: "from-cyan-400 to-sky-500", glow: "shadow-cyan-400/40" },
    { title: "Total Trainers", value: 32, img: "/teacher.png", color: "from-purple-500 to-fuchsia-500", glow: "shadow-purple-500/40" },
    { title: "Total Courses", value: 18, img: "/Courses.png", color: "from-sky-400 to-indigo-500", glow: "shadow-sky-400/40" },
    { title: "Pending Approvals", value: 5, img: "/approval.png", color: "from-fuchsia-500 to-purple-500", glow: "shadow-fuchsia-500/40" },
  ];

  return (
    <div className="flex w-full min-h-full bg-transparent text-slate-100">
      {/* ===== custom 3D animations ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float3d {
          0%,100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
          50%     { transform: translateY(-12px) rotateX(4deg) rotateY(-4deg); }
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

      <main className="flex-1 min-h-[calc(100vh-88px)] p-8 relative overflow-hidden bg-[#050b1f]" style={{ perspective: "1400px" }}>
        {/* ===== 3D Grid Floor ===== */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%] opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            transform: "rotateX(65deg)",
            transformOrigin: "bottom",
            animation: "gridMove 4s linear infinite",
            maskImage: "linear-gradient(to top, black, transparent)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          }}
        />

        {/* ===== Neon Glow Blobs (logo colors) ===== */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl neon-pulse" />
        <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-purple-500/25 rounded-full blur-3xl neon-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl neon-pulse" />

        {/* ===== Floating 3D Objects ===== */}
        <div className="absolute top-16 right-24 hidden lg:block" style={{ perspective: "600px" }}>
          <div className="cube">
            <span /><span /><span /><span /><span /><span />
          </div>
        </div>
        <div
          className="absolute top-40 left-10 w-24 h-24 rounded-full border-2 border-cyan-400/70 hidden lg:block"
          style={{ animation: "spinY 9s linear infinite", boxShadow: "0 0 18px rgba(34,211,238,.6)" }}
        />
        <div
          className="absolute bottom-24 right-16 w-16 h-16 rounded-full border-2 border-purple-500/70 hidden lg:block"
          style={{ animation: "spinY 6s linear infinite reverse", boxShadow: "0 0 18px rgba(168,85,247,.6)" }}
        />

        {/* ✦ Stars (neon) */}
        <span className="absolute top-14 left-24 text-cyan-300 text-2xl animate-pulse neon-text">✦</span>
        <span className="absolute top-40 right-32 text-purple-400 text-xl neon-pulse">✧</span>
        <span className="absolute bottom-32 left-1/3 text-cyan-400 text-xl neon-pulse">✦</span>

        {/* ================== HEADER ================== */}
        <div className="relative z-10 mb-8 slide-in">
          <h1 className="text-4xl font-extrabold tracking-wide text-cyan-300 neon-text">
            HA1505 <span className="text-purple-400">Admin</span>
          </h1>
          <p className="text-slate-400 mt-1">Welcome back — yahan aapka poora overview hai</p>
        </div>

        {/* ================== STATS ================== */}
        <div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ transformStyle: "preserve-3d" }}
        >
          {stats.map((card, i) => (
            <div key={i} className="slide-in" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="float3d" style={{ animationDelay: `${i * 0.4}s` }}>
                <TiltCard className="group rounded-[2rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-transparent to-purple-500/70">
                  <div
                    className={`relative bg-[#0a1432]/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl ${card.glow}`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={card.img}
                          alt={card.title}
                          className="h-16 w-16 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                          style={{ transform: "translateZ(40px)" }}
                        />
                        <div style={{ transform: "translateZ(25px)" }}>
                          <p className="text-slate-400 text-lg font-medium">{card.title}</p>
                          <h1 className="text-4xl font-extrabold text-white neon-text">{card.value}</h1>
                        </div>
                      </div>
                      <div
                        className={`bg-gradient-to-r ${card.color} text-white p-4 rounded-full shadow-lg ${card.glow}`}
                        style={{ transform: "translateZ(50px)" }}
                      >
                        ⭐
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          ))}
        </div>

        {/* ================== LOWER ================== */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Activities */}
          <div className="lg:col-span-2 slide-in" style={{ animationDelay: "0.5s" }}>
            <TiltCard
              intensity={6}
              className="rounded-[2rem] bg-[#0a1432]/80 backdrop-blur-xl border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.15)] p-7"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-extrabold text-cyan-300 neon-text">Recent Activities</h2>
                <button className="text-sm text-purple-400 font-semibold hover:text-purple-300 transition">
                  View All →
                </button>
              </div>
              {["New students joined Advanced Python", "Student Maaz Ali registered"].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 mb-6 hover:translate-x-2 hover:scale-[1.01] transition-transform duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-white flex items-center justify-center shadow-[0_0_18px_rgba(34,211,238,0.7)]">
                    ▶
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-100">{t}</p>
                    <p className="text-sm text-slate-400">Activity update</p>
                  </div>
                  <span className="text-sm text-cyan-300/70">Now</span>
                </div>
              ))}
            </TiltCard>
          </div>

          {/* Notifications */}
          <div className="slide-in" style={{ animationDelay: "0.65s" }}>
            <TiltCard
              intensity={8}
              className="rounded-[2rem] bg-[#0a1432]/80 backdrop-blur-xl border border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.2)] p-7 h-full"
            >
              <h2 className="text-2xl font-extrabold mb-6 text-purple-400">Notifications</h2>
              {["Assignments", "Approvals", "New Tools"].map((n, i) => (
                <div
                  key={i}
                  className="flex justify-between mb-4 text-slate-300 hover:text-cyan-300 hover:translate-x-1 transition-all"
                >
                  <p>🔔 {n}</p>
                  <span className="text-slate-500">Now</span>
                </div>
              ))}
            </TiltCard>
          </div>
        </div>

        {/* ================== GRAPH ================== */}
        <div className="relative z-10 mt-12 slide-in" style={{ animationDelay: "0.8s" }}>
          <span className="absolute -top-6 left-20 text-cyan-300 text-2xl animate-pulse neon-text">✦</span>

          <TiltCard
            intensity={3}
            className="rounded-[2.5rem] bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_50px_rgba(34,211,238,0.2)] p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-extrabold text-cyan-300 neon-text">Student Growth Analytics</h2>
              <span className="text-sm bg-purple-500/20 text-purple-300 border border-purple-400/40 px-4 py-1 rounded-full font-semibold shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                Weekly Report
              </span>
            </div>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.55} />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity={0.05} />
                    </linearGradient>
                    <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(34,211,238,0.15)" />
                  <XAxis dataKey="name" stroke="#7dd3fc" />
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
                    dataKey="students"
                    stroke="url(#lineColor)"
                    strokeWidth={4}
                    fill="url(#areaFill)"
                    dot={{ r: 6, fill: "#22d3ee", stroke: "#a855f7", strokeWidth: 2 }}
                    activeDot={{ r: 10, fill: "#a855f7", stroke: "#22d3ee", strokeWidth: 3 }}
                    style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.8))" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TiltCard>
        </div>
      </main>
    </div>
  );
}