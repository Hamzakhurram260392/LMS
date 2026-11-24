// "use client";

// export default function TrainerAttendance() {
//   const students = [
//     { name: "Ali", present: 18, total: 20 },
//     { name: "Sara", present: 16, total: 20 },
//   ];

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Attendance</h1>

//       <div className="bg-white p-4 rounded-lg shadow">
//         {students.map((s, i) => (
//           <div key={i} className="flex justify-between py-2">
//             <span>{s.name}</span>
//             <span className="font-medium">
//               {s.present}/{s.total}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// "use client";
// import React, { useState } from "react";

// export default function TrainerAttendance() {
//   const initialStudents = [
//     { name: "Ali", present: 18, total: 20 },
//     { name: "Sara", present: 16, total: 20 },
//   ];

//   const [students, setStudents] = useState(initialStudents);
//   const [totalClasses, setTotalClasses] = useState(20);
//   const [showModal, setShowModal] = useState(false);

//   // Modal state for marking attendance
//   const [attendance, setAttendance] = useState(
//     students.map((s) => ({ ...s, marked: null }))
//   );

//   const openModal = () => {
//     setAttendance(students.map((s) => ({ ...s, marked: null })));
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const handleToggle = (index, value) => {
//     const updated = [...attendance];
//     updated[index].marked = value;
//     setAttendance(updated);
//   };

//   const handleSave = () => {
//     const updatedStudents = [...students];
//     const newClasses = totalClasses + 1; // New class added

//     attendance.forEach((s, i) => {
//       if (s.marked === "present") updatedStudents[i].present += 1;
//       updatedStudents[i].total = newClasses;
//     });

//     setStudents(updatedStudents);
//     setTotalClasses(newClasses);
//     setShowModal(false);
//   };

//   return (
//     <div className="relative w-full min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#ecfeff] p-8 overflow-x-hidden overflow-y-auto">

//       {/* 🌟 Decorative stars */}
//       <span className="absolute top-16 left-24 text-yellow-400 text-2xl animate-pulse">✦</span>
//       <span className="absolute top-40 right-32 text-pink-400 text-xl">✧</span>
//       <span className="absolute bottom-32 left-1/3 text-indigo-400 text-xl">✦</span>

//       {/* ☁️ Blobs */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
//       <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-pink-300/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-300/30 rounded-3xl blur-3xl" />

//       <div className="relative z-10 w-full max-w-full">

//         {/* ===== Header ===== */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
//           <div>
//             <h1 className="text-4xl font-extrabold text-gray-800">Attendance</h1>
//             <p className="text-gray-500 mt-1">Track student attendance performance</p>
//           </div>

//           <button
//             onClick={openModal}
//             className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
//           >
//             Mark Attendance
//           </button>
//         </div>

//         {/* ===== Summary ===== */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl mb-8 w-full">
//           <p className="text-gray-600 text-sm mb-2">Total Classes Conducted</p>
//           <h2 className="text-3xl font-extrabold text-gray-800">{totalClasses}</h2>
//         </div>

//         {/* ===== Student Attendance List ===== */}
//         <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-xl overflow-x-auto w-full">
//           <div className="min-w-[700px]">
//             <div className="grid grid-cols-3 font-semibold text-gray-600 px-6 py-4 border-b">
//               <span>Student</span>
//               <span className="text-center">Attendance</span>
//               <span className="text-right">Status</span>
//             </div>

//             {students.map((s, i) => {
//               const percentage = Math.round((s.present / s.total) * 100);
//               return (
//                 <div
//                   key={i}
//                   className="grid grid-cols-3 items-center px-6 py-5 border-b last:border-0 hover:bg-white/50 transition"
//                 >
//                   <span className="font-medium text-gray-800">{s.name}</span>

//                   {/* Progress */}
//                   <div className="text-center">
//                     <div className="w-full bg-gray-200 h-2 rounded-full">
//                       <div
//                         className={`h-2 rounded-full ${
//                           percentage >= 75
//                             ? "bg-gradient-to-r from-emerald-500 to-cyan-500"
//                             : "bg-gradient-to-r from-orange-400 to-red-500"
//                         }`}
//                         style={{ width: `${percentage}%` }}
//                       />
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">{s.present}/{s.total} ({percentage}%)</p>
//                   </div>

//                   {/* Status */}
//                   <div className="text-right">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                         percentage >= 75
//                           ? "bg-emerald-100 text-emerald-600"
//                           : "bg-red-100 text-red-600"
//                       }`}
//                     >
//                       {percentage >= 75 ? "Good" : "Low"}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ================= MODAL ================= */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4 overflow-auto">
//           <div className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Mark Attendance</h2>
//             <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
//               {attendance.map((s, i) => (
//                 <div key={i} className="flex justify-between items-center">
//                   <span className="font-medium text-gray-800">{s.name}</span>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handleToggle(i, "present")}
//                       className={`px-3 py-1 rounded-full font-semibold ${
//                         s.marked === "present"
//                           ? "bg-emerald-500 text-white"
//                           : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                       }`}
//                     >
//                       Present
//                     </button>
//                     <button
//                       onClick={() => handleToggle(i, "absent")}
//                       className={`px-3 py-1 rounded-full font-semibold ${
//                         s.marked === "absent"
//                           ? "bg-red-500 text-white"
//                           : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                       }`}
//                     >
//                       Absent
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 onClick={closeModal}
//                 className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSave}
//                 className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 transition"
//               >
//                 Save Attendance
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

















"use client";
import React, { useRef, useState } from "react";

type Student = { name: string; present: number; total: number };
type Mark = "present" | "absent" | null;
type AttendanceRow = Student & { marked: Mark };

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
      transform: `perspective(1200px) rotateX(${(0.5 - y) * intensity}deg) rotateY(${(x - 0.5) * intensity}deg) translateZ(12px) scale(1.01)`,
    });
    setGlare({ x: x * 100, y: y * 100, o: 1 });
  };

  const onLeave = () => {
    setStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)",
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

export default function TrainerAttendance() {
  const initialStudents: Student[] = [
    { name: "Ali", present: 18, total: 20 },
    { name: "Sara", present: 16, total: 20 },
  ];

  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [totalClasses, setTotalClasses] = useState(20);
  const [showModal, setShowModal] = useState(false);

  // Modal state for marking attendance
  const [attendance, setAttendance] = useState<AttendanceRow[]>(
    students.map((s) => ({ ...s, marked: null }))
  );

  const openModal = () => {
    setAttendance(students.map((s) => ({ ...s, marked: null })));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleToggle = (index: number, value: Mark) => {
    setAttendance((prev) =>
      prev.map((row, i) => (i === index ? { ...row, marked: value } : row))
    );
  };

  const handleSave = () => {
    const newClasses = totalClasses + 1; // New class added

    const updatedStudents = students.map((s, i) => ({
      ...s,
      present: attendance[i]?.marked === "present" ? s.present + 1 : s.present,
      total: newClasses,
    }));

    setStudents(updatedStudents);
    setTotalClasses(newClasses);
    setShowModal(false);
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-88px)] bg-[#050b1f] text-slate-100 p-8 overflow-x-hidden overflow-y-auto">
      {/* ===== custom 3D animations ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float3d {
          0%,100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
          50%     { transform: translateY(-8px) rotateX(2deg) rotateY(-2deg); }
        }
        @keyframes spinY { from { transform: rotateY(0deg) rotateX(60deg); } to { transform: rotateY(360deg) rotateX(60deg); } }
        @keyframes spinCube { from { transform: rotateX(0) rotateY(0); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes gridMove { from { background-position: 0 0; } to { background-position: 0 60px; } }
        @keyframes neonPulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(30px) rotateX(-12deg); } to { opacity: 1; transform: translateY(0) rotateX(0); } }
        @keyframes modalIn { from { opacity: 0; transform: perspective(900px) translateY(40px) rotateX(-18deg) scale(.92); } to { opacity: 1; transform: perspective(900px) translateY(0) rotateX(0) scale(1); } }
        @keyframes barGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .float3d { animation: float3d 7s ease-in-out infinite; }
        .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
        .slide-in { animation: slideIn .8s ease-out both; }
        .modal-in { animation: modalIn .45s ease-out both; }
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
      <div className="absolute top-16 right-24 hidden lg:block" style={{ perspective: "600px" }}>
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

      <div className="relative z-10 w-full max-w-full" style={{ perspective: "1400px" }}>
        {/* ===== Header ===== */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 slide-in">
          <div>
            <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
              Atten<span className="text-purple-400">dance</span>
            </h1>
            <p className="text-slate-400 mt-1">Track student attendance performance</p>
          </div>

          <button
            onClick={openModal}
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-2xl font-bold shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_32px_rgba(168,85,247,0.8)] hover:scale-105 transition"
          >
            Mark Attendance
          </button>
        </div>

        {/* ===== Summary ===== */}
        <div className="slide-in mb-8" style={{ animationDelay: "0.15s" }}>
          <div className="float3d">
            <TiltCard
              intensity={8}
              className="rounded-[2rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-transparent to-purple-500/70 w-full"
            >
              <div
                className="relative bg-[#0a1432]/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>
                <div style={{ transform: "translateZ(30px)" }}>
                  <p className="text-slate-400 text-sm mb-2">Total Classes Conducted</p>
                  <h2 className="text-4xl font-extrabold text-white neon-text">{totalClasses}</h2>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* ===== Student Attendance List ===== */}
        <div className="slide-in" style={{ animationDelay: "0.3s" }}>
          <TiltCard
            intensity={2}
            className="rounded-[2rem] bg-[#0a1432]/85 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)] overflow-x-auto w-full"
          >
            <div className="min-w-[700px]">
              <div className="grid grid-cols-3 font-semibold text-cyan-300 px-6 py-4 border-b border-cyan-400/30">
                <span>Student</span>
                <span className="text-center">Attendance</span>
                <span className="text-right">Status</span>
              </div>

              {students.map((s, i) => {
                const percentage = Math.round((s.present / s.total) * 100);
                const good = percentage >= 75;
                return (
                  <div
                    key={i}
                    className="grid grid-cols-3 items-center px-6 py-5 border-b border-cyan-400/10 last:border-0 hover:bg-cyan-400/5 hover:shadow-[inset_0_0_30px_rgba(34,211,238,0.08)] transition"
                  >
                    <span className="font-medium text-slate-100">{s.name}</span>

                    {/* Progress */}
                    <div className="text-center">
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div
                          className={`bar-grow h-2 rounded-full ${
                            good
                              ? "bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                              : "bg-gradient-to-r from-orange-400 to-pink-500 shadow-[0_0_10px_rgba(244,114,182,0.8)]"
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {s.present}/{s.total} ({percentage}%)
                      </p>
                    </div>

                    {/* Status */}
                    <div className="text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          good
                            ? "bg-cyan-400/15 text-cyan-300 border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                            : "bg-pink-500/15 text-pink-300 border-pink-400/40 shadow-[0_0_10px_rgba(244,114,182,0.35)]"
                        }`}
                      >
                        {good ? "Good" : "Low"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </TiltCard>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#02050f]/80 backdrop-blur-sm z-50 p-4 overflow-auto">
          <div className="modal-in relative w-full max-w-md rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400 via-transparent to-purple-500 shadow-[0_0_60px_rgba(34,211,238,0.35)]">
            <div className="relative bg-[#0a1432] rounded-3xl p-8">
              <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>
              <span className="absolute bottom-4 left-5 text-purple-400 text-lg neon-pulse">✧</span>

              <h2 className="text-2xl font-extrabold text-cyan-300 neon-text mb-5">
                Mark <span className="text-purple-400">Attendance</span>
              </h2>

              <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-1">
                {attendance.map((s, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="font-medium text-slate-100">{s.name}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleToggle(i, "present")}
                        className={`px-3 py-1 rounded-full font-semibold border transition ${
                          s.marked === "present"
                            ? "bg-gradient-to-r from-cyan-400 to-sky-500 text-white border-transparent shadow-[0_0_16px_rgba(34,211,238,0.8)] scale-105"
                            : "bg-white/10 text-slate-300 border-white/20 hover:bg-cyan-400/20"
                        }`}
                      >
                        Present
                      </button>
                      <button
                        onClick={() => handleToggle(i, "absent")}
                        className={`px-3 py-1 rounded-full font-semibold border transition ${
                          s.marked === "absent"
                            ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-transparent shadow-[0_0_16px_rgba(244,114,182,0.8)] scale-105"
                            : "bg-white/10 text-slate-300 border-white/20 hover:bg-pink-500/20"
                        }`}
                      >
                        Absent
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={closeModal}
                  className="px-5 py-2 rounded-full bg-white/10 text-slate-300 border border-white/20 hover:bg-white/20 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold shadow-[0_0_18px_rgba(34,211,238,0.5)] hover:shadow-[0_0_28px_rgba(168,85,247,0.8)] hover:scale-105 transition"
                >
                  Save Attendance
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
