// "use client";
// import React, { useState } from "react";

// export default function TrainerCoursesPage() {
//   const [courses, setCourses] = useState([
//     { title: "Web Development", students: 32, progress: 75, status: "Active" },
//     { title: "Python for Data Science", students: 28, progress: 100, status: "Completed" },
//   ]);

//   const [showModal, setShowModal] = useState(false);

//   // Form states
//   const [title, setTitle] = useState("");
//   const [students, setStudents] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [status, setStatus] = useState("Active");

//   const openModal = () => {
//     setTitle("");
//     setStudents(0);
//     setProgress(0);
//     setStatus("Active");
//     setShowModal(true);
//   };

//   const closeModal = () => setShowModal(false);

//   const handleCreate = (e) => {
//     e.preventDefault();
//     setCourses([...courses, { title, students, progress, status }]);
//     setShowModal(false);
//   };

//   return (
//     <div className="p-8 relative min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#ecfeff]">

//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Trainer Courses</h1>
//         <button
//           onClick={openModal}
//           className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
//         >
//           + Create Course
//         </button>
//       </div>

//       {/* Courses */}
//       <div className="grid md:grid-cols-2 gap-6">
//         {courses.map((course, i) => (
//           <div
//             key={i}
//             className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
//           >
//             <h2 className="text-lg font-semibold">{course.title}</h2>

//             <p className="text-sm text-gray-500 mt-1">
//               Students: {course.students}
//             </p>

//             {/* Progress */}
//             <div className="mt-3">
//               <div className="flex justify-between text-sm mb-1">
//                 <span>Progress</span>
//                 <span>{course.progress}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div
//                   className="bg-teal-600 h-2 rounded-full"
//                   style={{ width: `${course.progress}%` }}
//                 />
//               </div>
//             </div>

//             {/* Status + Actions */}
//             <div className="flex justify-between items-center mt-4">
//               <span
//                 className={`text-sm font-medium ${
//                   course.status === "Active" ? "text-green-600" : "text-gray-500"
//                 }`}
//               >
//                 {course.status}
//               </span>

//               <button className="text-teal-600 text-sm font-semibold">
//                 View Details →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ================= CREATE COURSE MODAL ================= */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//           <div className="bg-white rounded-3xl p-8 w-96 relative shadow-2xl">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Create New Course</h2>
//             <form onSubmit={handleCreate} className="flex flex-col gap-4">

//               {/* Course Title */}
//               <input
//                 type="text"
//                 placeholder="Course Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 required
//               />

//               {/* Students */}
//               <input
//                 type="number"
//                 placeholder="Number of Students"
//                 value={students}
//                 onChange={(e) => setStudents(parseInt(e.target.value))}
//                 className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 required
//               />

//               {/* Progress */}
//               <input
//                 type="number"
//                 placeholder="Progress (%)"
//                 value={progress}
//                 onChange={(e) => setProgress(parseInt(e.target.value))}
//                 min={0}
//                 max={100}
//                 className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                 required
//               />

//               {/* Status */}
//               <select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
//               >
//                 <option value="Active">Active</option>
//                 <option value="Completed">Completed</option>
//               </select>

//               {/* Buttons */}
//               <div className="flex justify-end gap-3 mt-4">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-5 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:opacity-90 transition"
//                 >
//                   Create
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }














"use client";
import React, { useRef, useState } from "react";

type Course = {
  title: string;
  students: number;
  progress: number;
  status: string;
};

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

export default function TrainerCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([
    { title: "Web Development", students: 32, progress: 75, status: "Active" },
    { title: "Python for Data Science", students: 28, progress: 100, status: "Completed" },
  ]);

  const [showModal, setShowModal] = useState(false);

  // Form states
  const [title, setTitle] = useState("");
  const [students, setStudents] = useState(0);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Active");

  const openModal = () => {
    setTitle("");
    setStudents(0);
    setProgress(0);
    setStatus("Active");
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    setCourses([...courses, { title, students, progress, status }]);
    setShowModal(false);
  };

  const inputClass =
    "bg-[#050b1f] border border-cyan-400/30 text-slate-100 placeholder:text-slate-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-[0_0_14px_rgba(34,211,238,0.5)] transition";

  return (
    <div className="p-8 relative min-h-[calc(100vh-88px)] bg-[#050b1f] text-slate-100 overflow-hidden">
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
        @keyframes modalIn { from { opacity: 0; transform: perspective(900px) translateY(40px) rotateX(-18deg) scale(.92); } to { opacity: 1; transform: perspective(900px) translateY(0) rotateX(0) scale(1); } }
        @keyframes barGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .float3d { animation: float3d 6s ease-in-out infinite; }
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

      <div className="relative z-10" style={{ perspective: "1400px" }}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8 slide-in">
          <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
            Trainer <span className="text-purple-400">Courses</span>
          </h1>
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-5 py-2.5 rounded-xl font-bold shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_32px_rgba(168,85,247,0.8)] hover:scale-105 transition"
          >
            + Create Course
          </button>
        </div>

        {/* Courses */}
        <div className="grid md:grid-cols-2 gap-7" style={{ transformStyle: "preserve-3d" }}>
          {courses.map((course, i) => {
            const active = course.status === "Active";
            return (
              <div key={i} className="slide-in" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="float3d" style={{ animationDelay: `${(i % 2) * 0.5}s` }}>
                  <TiltCard className="group rounded-[1.75rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-transparent to-purple-500/70">
                    <div
                      className="relative bg-[#0a1432]/90 backdrop-blur-xl rounded-[1.75rem] p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>

                      <h2
                        className="text-xl font-bold text-white neon-text"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        {course.title}
                      </h2>

                      <p
                        className="text-sm text-slate-400 mt-1"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        Students: <span className="text-purple-300 font-semibold">{course.students}</span>
                      </p>

                      {/* Progress */}
                      <div className="mt-4" style={{ transform: "translateZ(25px)" }}>
                        <div className="flex justify-between text-sm mb-1.5 text-slate-300">
                          <span>Progress</span>
                          <span className="text-cyan-300 font-semibold">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <div
                            className="bar-grow bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Status + Actions */}
                      <div
                        className="flex justify-between items-center mt-5"
                        style={{ transform: "translateZ(40px)" }}
                      >
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                            active
                              ? "bg-cyan-400/15 text-cyan-300 border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                              : "bg-purple-500/15 text-purple-300 border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.35)]"
                          }`}
                        >
                          {course.status}
                        </span>

                        <button className="text-purple-300 text-sm font-semibold hover:text-cyan-300 hover:translate-x-1 transition">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= CREATE COURSE MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#02050f]/80 backdrop-blur-sm z-50 p-4">
          <div className="modal-in relative w-full max-w-md rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400 via-transparent to-purple-500 shadow-[0_0_60px_rgba(34,211,238,0.35)]">
            <div className="relative bg-[#0a1432] rounded-3xl p-8">
              <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>
              <span className="absolute bottom-4 left-5 text-purple-400 text-lg neon-pulse">✧</span>

              <h2 className="text-2xl font-extrabold text-cyan-300 neon-text mb-5">
                Create New <span className="text-purple-400">Course</span>
              </h2>

              <form onSubmit={handleCreate} className="flex flex-col gap-4">
                {/* Course Title */}
                <input
                  type="text"
                  placeholder="Course Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={inputClass}
                  required
                />

                {/* Students */}
                <input
                  type="number"
                  placeholder="Number of Students"
                  value={students}
                  onChange={(e) => setStudents(parseInt(e.target.value) || 0)}
                  className={inputClass}
                  required
                />

                {/* Progress */}
                <input
                  type="number"
                  placeholder="Progress (%)"
                  value={progress}
                  onChange={(e) => setProgress(parseInt(e.target.value) || 0)}
                  min={0}
                  max={100}
                  className={inputClass}
                  required
                />

                {/* Status */}
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className={inputClass}
                >
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                </select>

                {/* Buttons */}
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-5 py-2 rounded-full bg-white/10 text-slate-300 border border-white/20 hover:bg-white/20 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold shadow-[0_0_18px_rgba(34,211,238,0.5)] hover:shadow-[0_0_28px_rgba(168,85,247,0.8)] hover:scale-105 transition"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



