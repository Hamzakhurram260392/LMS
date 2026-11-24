// "use client";

// import React, { useState } from "react";

// export default function TrainerStudentsPage() {
//   const [students, setStudents] = useState([
//     { name: "Ali Khan", course: "Web Development", attendance: 90, progress: 75, status: "Active" },
//     { name: "Sara Ahmed", course: "Python for Beginners", attendance: 80, progress: 65, status: "Active" },
//     { name: "Usman Raza", course: "Machine Learning Basics", attendance: 60, progress: 45, status: "Inactive" },
//   ]);

//   const [search, setSearch] = useState("");

//   const filteredStudents = students.filter((s) =>
//     s.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="relative min-h-screen w-full bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#ecfeff] p-8 overflow-x-hidden">

//       {/* 🌟 Decorative stars */}
//       <span className="absolute top-16 left-24 text-yellow-400 text-2xl animate-pulse">✦</span>
//       <span className="absolute top-40 right-32 text-pink-400 text-xl">✧</span>
//       <span className="absolute bottom-32 left-1/3 text-indigo-400 text-xl">✦</span>

//       {/* ☁️ Blobs */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
//       <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-pink-300/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl" />

//       <div className="relative z-10 w-full">

//         {/* ===== Header ===== */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//           <h1 className="text-3xl font-extrabold text-gray-800">Students</h1>

//           <input
//             type="text"
//             placeholder="Search student..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border border-gray-300 px-4 py-2 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-64"
//           />
//         </div>

//         {/* ===== Students List ===== */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-xl overflow-x-auto">
//           <div className="min-w-[800px]">
//             <div className="grid grid-cols-6 text-gray-600 font-semibold px-6 py-4 border-b">
//               <span className="col-span-1 text-left">Student</span>
//               <span className="col-span-1 text-center">Course</span>
//               <span className="col-span-1 text-center">Attendance</span>
//               <span className="col-span-2 text-center">Progress</span>
//               <span className="col-span-1 text-center">Status</span>
//               <span className="col-span-1"></span>
//             </div>

//             {filteredStudents.map((s, i) => (
//               <div
//                 key={i}
//                 className="grid grid-cols-6 items-center px-6 py-4 border-b last:border-0 hover:bg-white/50 transition"
//               >
//                 <span className="col-span-1 font-medium text-gray-800">{s.name}</span>
//                 <span className="col-span-1 text-center text-gray-700">{s.course}</span>
//                 <span className="col-span-1 text-center text-gray-700">{s.attendance}%</span>

//                 {/* Progress Bar */}
//                 <div className="col-span-2">
//                   <div className="w-full bg-gray-200 h-2 rounded-full">
//                     <div
//                       className={`h-2 rounded-full ${
//                         s.progress >= 75
//                           ? "bg-gradient-to-r from-emerald-500 to-cyan-500"
//                           : "bg-gradient-to-r from-orange-400 to-red-500"
//                       }`}
//                       style={{ width: `${s.progress}%` }}
//                     />
//                   </div>
//                 </div>

//                 {/* Status */}
//                 <span className="col-span-1 text-center">
//                   <span
//                     className={`text-xs font-semibold px-2 py-1 rounded-full ${
//                       s.status === "Active"
//                         ? "bg-emerald-100 text-emerald-600"
//                         : "bg-gray-100 text-gray-600"
//                     }`}
//                   >
//                     {s.status}
//                   </span>
//                 </span>

//                 {/* Action */}
//                 <span className="col-span-1 text-right">
//                   {/* <button className="text-indigo-600 font-medium hover:underline transition">
//                     View
//                   </button> */}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




















"use client";
import React, { useRef, useState } from "react";

type Student = {
  name: string;
  course: string;
  attendance: number;
  progress: number;
  status: string;
};

/* ============ 3D TILT CARD (mouse ke saath ghoomta hai) ============ */
function TiltCard({
  children,
  className = "",
  intensity = 2,
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
      transform: `perspective(1400px) rotateX(${(0.5 - y) * intensity}deg) rotateY(${(x - 0.5) * intensity}deg) translateZ(8px)`,
    });
    setGlare({ x: x * 100, y: y * 100, o: 1 });
  };

  const onLeave = () => {
    setStyle({
      transform: "perspective(1400px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
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
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(34,211,238,0.14), transparent 55%)`,
        }}
      />
    </div>
  );
}

export default function TrainerStudentsPage() {
  const [students] = useState<Student[]>([
    { name: "Ali Khan", course: "Web Development", attendance: 90, progress: 75, status: "Active" },
    { name: "Sara Ahmed", course: "Python for Beginners", attendance: 80, progress: 65, status: "Active" },
    { name: "Usman Raza", course: "Machine Learning Basics", attendance: 60, progress: 45, status: "Inactive" },
  ]);

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-[calc(100vh-88px)] w-full bg-[#050b1f] text-slate-100 p-8 overflow-x-hidden">
      {/* ===== custom 3D animations ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes spinY { from { transform: rotateY(0deg) rotateX(60deg); } to { transform: rotateY(360deg) rotateX(60deg); } }
        @keyframes spinCube { from { transform: rotateX(0) rotateY(0); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes gridMove { from { background-position: 0 0; } to { background-position: 0 60px; } }
        @keyframes neonPulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(30px) rotateX(-12deg); } to { opacity: 1; transform: translateY(0) rotateX(0); } }
        @keyframes rowIn { from { opacity: 0; transform: translateX(-30px) rotateY(20deg); } to { opacity: 1; transform: translateX(0) rotateY(0); } }
        @keyframes barGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
        .slide-in { animation: slideIn .8s ease-out both; }
        .row-in { animation: rowIn .6s ease-out both; }
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

      <div className="relative z-10 w-full" style={{ perspective: "1400px" }}>
        {/* ===== Header ===== */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 slide-in">
          <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
            <span className="text-purple-400">Stud</span>ents
          </h1>

          <input
            type="text"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#0a1432] border border-cyan-400/40 text-slate-100 placeholder:text-slate-500 px-4 py-2 rounded-2xl text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-[0_0_16px_rgba(34,211,238,0.5)] transition"
          />
        </div>

        {/* ===== Students List ===== */}
        <div className="slide-in" style={{ animationDelay: "0.2s" }}>
          <TiltCard className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)] overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-7 text-cyan-300 font-semibold px-6 py-4 border-b border-cyan-400/30">
                <span className="col-span-1 text-left">Student</span>
                <span className="col-span-1 text-center">Course</span>
                <span className="col-span-1 text-center">Attendance</span>
                <span className="col-span-2 text-center">Progress</span>
                <span className="col-span-1 text-center">Status</span>
                <span className="col-span-1"></span>
              </div>

              {filteredStudents.length === 0 && (
                <p className="px-6 py-8 text-center text-slate-400">No students found</p>
              )}

              {filteredStudents.map((s, i) => {
                const goodProgress = s.progress >= 75;
                const active = s.status === "Active";
                return (
                  <div
                    key={i}
                    className="row-in grid grid-cols-7 items-center px-6 py-4 border-b border-cyan-400/10 last:border-0 hover:bg-cyan-400/5 hover:shadow-[inset_0_0_30px_rgba(34,211,238,0.08)] transition"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <span className="col-span-1 font-medium text-slate-100">{s.name}</span>
                    <span className="col-span-1 text-center text-slate-300">{s.course}</span>
                    <span className="col-span-1 text-center text-cyan-300 font-semibold">
                      {s.attendance}%
                    </span>

                    {/* Progress Bar */}
                    <div className="col-span-2 px-4">
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div
                          className={`bar-grow h-2 rounded-full ${
                            goodProgress
                              ? "bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                              : "bg-gradient-to-r from-orange-400 to-pink-500 shadow-[0_0_10px_rgba(244,114,182,0.8)]"
                          }`}
                          style={{ width: `${s.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-400 mt-1 text-center">{s.progress}%</p>
                    </div>

                    {/* Status */}
                    <span className="col-span-1 text-center">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                          active
                            ? "bg-cyan-400/15 text-cyan-300 border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                            : "bg-purple-500/15 text-purple-300 border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.35)]"
                        }`}
                      >
                        {s.status}
                      </span>
                    </span>

                    {/* Action */}
                    <span className="col-span-1 text-right">
                      {/* <button className="text-purple-300 font-medium hover:text-cyan-300 transition">
                        View
                      </button> */}
                    </span>
                  </div>
                );
              })}
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}