// "use client";

// import TrainerSidebar from "./TrainerSidebar";
// import TrainerTopbar from "./TrainerTopbar";

// export default function TrainerDashboard() {
//   return (
//     <div className="flex h-screen">
//       <TrainerSidebar />
//       <div className="flex-1">
//         <TrainerTopbar />
//         <main className="p-6">Trainer Content</main>
//       </div>
//     </div>
//   );
// }






// "use client";
// import React from "react";

// export default function Dashboard() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#ecfeff] p-8 overflow-hidden">

//       {/* 🌟 Stars */}
//       <span className="absolute top-16 left-24 text-yellow-400 text-2xl animate-pulse">✦</span>
//       <span className="absolute top-40 right-32 text-pink-400 text-xl">✧</span>
//       <span className="absolute bottom-32 left-1/3 text-indigo-400 text-xl">✦</span>

//       {/* ☁️ Blobs */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
//       <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-pink-300/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl" />

//       <div className="relative z-10 grid grid-cols-1 xl:grid-cols-3 gap-8">

//         {/* ================= MY COURSES ================= */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-7 shadow-xl xl:col-span-2">
//           <h3 className="text-2xl font-extrabold text-gray-800 mb-6">
//             My Courses
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               { title: "Web Development", students: 32, color: "from-indigo-500 to-cyan-500" },
//               { title: "Python for Beginners", students: 26, color: "from-emerald-500 to-teal-500" },
//               { title: "Machine Learning Basics", students: 20, color: "from-pink-500 to-rose-500" },
//             ].map((c, i) => (
//               <div
//                 key={i}
//                 className={`rounded-[1.5rem] p-6 text-white shadow-lg bg-gradient-to-r ${c.color}
//                 hover:scale-105 transition`}
//               >
//                 <p className="font-bold text-lg">{c.title}</p>
//                 <p className="text-sm mt-2 opacity-90">
//                   {c.students} Students
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= NOTIFICATIONS ================= */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-7 shadow-xl">
//           <h3 className="text-2xl font-extrabold text-gray-800 mb-6">
//             Notifications
//           </h3>

//           <div className="space-y-5 text-sm">
//             {[
//               "Database Design Project",
//               "JavaScript Basics Quiz",
//             ].map((n, i) => (
//               <div
//                 key={i}
//                 className="flex justify-between items-center hover:text-indigo-600 transition"
//               >
//                 <span className="font-medium text-gray-700">{n}</span>
//                 <button className="text-indigo-600 font-semibold">
//                   View →
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= STUDENT PROGRESS ================= */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-7 shadow-xl xl:col-span-2">
//           <h3 className="text-2xl font-extrabold text-gray-800 mb-6">
//             Student Progress
//           </h3>

//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="text-gray-500 border-b">
//                 <tr>
//                   <th className="text-left py-3">Student</th>
//                   <th className="text-center">Course</th>
//                   <th className="text-left">Progress</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {[
//                   { name: "Maaz Ali", course: "Web Development", progress: 75 },
//                   { name: "Sara Khan", course: "Python for Beginners", progress: 65 },
//                   { name: "Yasuf Ahmed", course: "ML Basics", progress: 75 },
//                 ].map((s, i) => (
//                   <tr key={i} className="border-b last:border-0">
//                     <td className="py-4 font-medium text-gray-800">
//                       {s.name}
//                     </td>
//                     <td className="text-center text-gray-600">
//                       {s.course}
//                     </td>
//                     <td className="py-4">
//                       <div className="w-full bg-gray-200 h-2 rounded-full">
//                         <div
//                           className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-2 rounded-full"
//                           style={{ width: `${s.progress}%` }}
//                         />
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* ================= ASSIGNMENT ACTIVITY ================= */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-7 shadow-xl">
//           <h3 className="text-2xl font-extrabold text-gray-800 mb-6">
//             Assignment Activity
//           </h3>

//           <div className="space-y-4 text-gray-700">
//             <p>🟢 Assignments Started</p>
//             <p>✅ Assignments Finished</p>
//             <p>🟡 Assignments Pending</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


















"use client";
import React, { useRef, useState } from "react";

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

export default function Dashboard() {
  const courses = [
    { title: "Web Development", students: 32, color: "from-cyan-400 to-sky-500", glow: "shadow-cyan-400/50" },
    { title: "Python for Beginners", students: 26, color: "from-purple-500 to-fuchsia-500", glow: "shadow-purple-500/50" },
    { title: "Machine Learning Basics", students: 20, color: "from-sky-400 to-indigo-500", glow: "shadow-sky-400/50" },
  ];

  const notifications = ["Database Design Project", "JavaScript Basics Quiz"];

  const studentProgress = [
    { name: "Maaz Ali", course: "Web Development", progress: 75 },
    { name: "Sara Khan", course: "Python for Beginners", progress: 65 },
    { name: "Yasuf Ahmed", course: "ML Basics", progress: 75 },
  ];

  const activity = [
    { icon: "🟢", label: "Assignments Started" },
    { icon: "✅", label: "Assignments Finished" },
    { icon: "🟡", label: "Assignments Pending" },
  ];

  return (
    <div className="relative min-h-[calc(100vh-88px)] bg-[#050b1f] text-slate-100 p-8 overflow-hidden">
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
        {/* ================= MY COURSES ================= */}
        <div className="xl:col-span-2 slide-in">
          <TiltCard
            intensity={3}
            className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)] p-7 h-full"
          >
            <h3 className="text-2xl font-extrabold text-cyan-300 neon-text mb-6">My Courses</h3>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              {courses.map((c, i) => (
                <div key={i} className="float3d" style={{ animationDelay: `${i * 0.5}s` }}>
                  <TiltCard intensity={18} className="rounded-[1.5rem]">
                    <div
                      className={`rounded-[1.5rem] p-6 text-white shadow-lg ${c.glow} bg-gradient-to-br ${c.color} border border-white/20`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <p className="font-bold text-lg" style={{ transform: "translateZ(35px)" }}>
                        {c.title}
                      </p>
                      <p
                        className="text-sm mt-2 opacity-90"
                        style={{ transform: "translateZ(22px)" }}
                      >
                        {c.students} Students
                      </p>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* ================= NOTIFICATIONS ================= */}
        <div className="slide-in" style={{ animationDelay: "0.15s" }}>
          <TiltCard
            intensity={8}
            className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.2)] p-7 h-full"
          >
            <h3 className="text-2xl font-extrabold text-purple-400 mb-6">Notifications</h3>

            <div className="space-y-5 text-sm">
              {notifications.map((n, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-slate-300 hover:text-cyan-300 hover:translate-x-1 transition-all"
                >
                  <span className="font-medium">🔔 {n}</span>
                  <button className="text-purple-300 font-semibold hover:text-cyan-300 transition">
                    View →
                  </button>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* ================= STUDENT PROGRESS ================= */}
        <div className="xl:col-span-2 slide-in" style={{ animationDelay: "0.3s" }}>
          <TiltCard
            intensity={2}
            className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)] p-7 h-full"
          >
            <h3 className="text-2xl font-extrabold text-cyan-300 neon-text mb-6">Student Progress</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-cyan-300/80 border-b border-cyan-400/30">
                  <tr>
                    <th className="text-left py-3">Student</th>
                    <th className="text-center">Course</th>
                    <th className="text-left">Progress</th>
                  </tr>
                </thead>

                <tbody>
                  {studentProgress.map((s, i) => (
                    <tr
                      key={i}
                      className="border-b border-cyan-400/10 last:border-0 hover:bg-cyan-400/5 transition"
                    >
                      <td className="py-4 font-medium text-slate-100">{s.name}</td>
                      <td className="text-center text-slate-300">{s.course}</td>
                      <td className="py-4 pr-2">
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div
                            className="bar-grow bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                            style={{ width: `${s.progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{s.progress}%</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TiltCard>
        </div>

        {/* ================= ASSIGNMENT ACTIVITY ================= */}
        <div className="slide-in" style={{ animationDelay: "0.45s" }}>
          <TiltCard
            intensity={8}
            className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.2)] p-7 h-full"
          >
            <h3 className="text-2xl font-extrabold text-purple-400 mb-6">Assignment Activity</h3>

            <div className="space-y-4 text-slate-300">
              {activity.map((a, i) => (
                <p
                  key={i}
                  className="flex items-center gap-3 hover:text-cyan-300 hover:translate-x-1 transition-all"
                >
                  <span className="text-lg drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">{a.icon}</span>
                  {a.label}
                </p>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}