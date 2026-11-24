// 'use client'
// import { supabase } from '../../lib/supabase'
// import { useEffect, useState } from 'react'

// export default function Assignments() {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     supabase.from('assignments').select('*').then(res => {
//       setData(res.data || [])
//     })
//   }, [])

//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-4">Assignments</h1>
//       {data.map(a => (
//         <div key={a.id} className="bg-white p-4 mb-2 rounded shadow">
//           {a.title}
//         </div>
//       ))}
//     </div>
//   )
// }




// "use client";
// import React, { useState } from "react";

// export default function TrainerAssignments() {
//   const [assignments, setAssignments] = useState([
//     { title: "Web Final Project", due: "2026-02-20", submissions: 18, course: "Web Development" },
//     { title: "Python Quiz", due: "2026-02-25", submissions: 22, course: "Python for Data Science" },
//   ]);

//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showViewModal, setShowViewModal] = useState(false);
//   const [currentAssignment, setCurrentAssignment] = useState(null);

//   const [title, setTitle] = useState("");
//   const [due, setDue] = useState("");
//   const [submissions, setSubmissions] = useState(0);
//   const [course, setCourse] = useState("");

//   const openCreateModal = () => {
//     setTitle("");
//     setDue("");
//     setSubmissions(0);
//     setCourse("");
//     setShowCreateModal(true);
//   };

//   const openEditModal = (assignment, index) => {
//     setCurrentAssignment({ ...assignment, index });
//     setTitle(assignment.title);
//     setDue(assignment.due);
//     setSubmissions(assignment.submissions);
//     setCourse(assignment.course);
//     setShowEditModal(true);
//   };

//   const openViewModal = (assignment) => {
//     setCurrentAssignment(assignment);
//     setShowViewModal(true);
//   };

//   const closeModals = () => {
//     setShowCreateModal(false);
//     setShowEditModal(false);
//     setShowViewModal(false);
//     setCurrentAssignment(null);
//   };

//   const handleCreate = (e) => {
//     e.preventDefault();
//     setAssignments([...assignments, { title, due, submissions, course }]);
//     closeModals();
//   };

//   const handleEdit = (e) => {
//     e.preventDefault();
//     const updated = [...assignments];
//     updated[currentAssignment.index] = { title, due, submissions, course };
//     setAssignments(updated);
//     closeModals();
//   };

//   return (
//     <div className="relative w-full min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#ecfeff] overflow-x-hidden">

//       {/* 🌟 Stars */}
//       <span className="absolute top-16 left-24 text-yellow-400 text-2xl animate-pulse">✦</span>
//       <span className="absolute top-40 right-32 text-pink-400 text-xl">✧</span>
//       <span className="absolute bottom-32 left-1/3 text-indigo-400 text-xl">✦</span>

//       {/* ☁️ Blobs */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
//       <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-pink-300/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-300/30 rounded-3xl blur-3xl" />

//       {/* ===== CONTENT ===== */}
//       <div className="relative z-10 w-full max-w-6xl mx-auto py-8 px-4">

//         {/* HEADER */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
//           <div>
//             <h1 className="text-4xl font-extrabold text-gray-800">Assignments</h1>
//             <p className="text-gray-500 mt-1">Track assignment submissions and deadlines</p>
//           </div>

//           <button
//             onClick={openCreateModal}
//             className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
//           >
//             + Create Assignment
//           </button>
//         </div>

//         {/* ASSIGNMENTS LIST */}
//         <div className="space-y-6">
//           {assignments.map((a, i) => (
//             <div
//               key={i}
//               className="group bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl hover:scale-[1.02] transition"
//             >
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800">{a.title}</h3>
//                   <p className="text-sm text-gray-500 mt-1">
//                     Course: {a.course} | Due Date: {a.due}
//                   </p>
//                 </div>
//                 <div className="text-right mt-4 sm:mt-0">
//                   <span className="block text-sm text-gray-500 mb-1">Submissions</span>
//                   <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold shadow-lg">
//                     {a.submissions}
//                   </span>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="mt-6 flex flex-wrap gap-4">
//                 <button
//                   onClick={() => openViewModal(a)}
//                   className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-2 rounded-xl font-semibold shadow hover:scale-105 transition"
//                 >
//                   View Submissions →
//                 </button>
//                 <button
//                   onClick={() => openEditModal(a, i)}
//                   className="bg-gray-100 text-gray-700 px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
//                 >
//                   Edit Assignment
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= MODALS ================= */}
//       {(showCreateModal || showEditModal || showViewModal) && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4 overflow-auto">
//           <div className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl">
//             {showCreateModal && (
//               <>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Assignment</h2>
//                 <form onSubmit={handleCreate} className="flex flex-col gap-4">
//                   <input type="text" placeholder="Assignment Title" value={title} onChange={(e)=>setTitle(e.target.value)} className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" required/>
//                   <input type="date" value={due} onChange={(e)=>setDue(e.target.value)} className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" required/>
//                   <input type="number" placeholder="Submissions" value={submissions} onChange={(e)=>setSubmissions(e.target.value)} className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
//                   <select value={course} onChange={(e)=>setCourse(e.target.value)} className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" required>
//                     <option value="">Select Course</option>
//                     {["Excel","Power BI","IELTS","Web Development","WordPress","Digital Marketing","Social Media Marketing","Video Editing","Game Development","Chinese Language Course"].map((c,i)=><option key={i} value={c}>{c}</option>)}
//                   </select>
//                   <div className="flex justify-end gap-3 mt-4">
//                     <button type="button" onClick={closeModals} className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">Cancel</button>
//                     <button type="submit" className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 transition">Create</button>
//                   </div>
//                 </form>
//               </>
//             )}

//             {showEditModal && (
//               <>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Assignment</h2>
//                 <form onSubmit={handleEdit} className="flex flex-col gap-4">
//                   <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" required/>
//                   <input type="date" value={due} onChange={(e)=>setDue(e.target.value)} className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" required/>
//                   <input type="number" value={submissions} onChange={(e)=>setSubmissions(e.target.value)} className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" required/>
//                   <select value={course} onChange={(e)=>setCourse(e.target.value)} className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" required>
//                     <option value="">Select Course</option>
//                     {["Excel","Power BI","IELTS","Web Development","WordPress","Digital Marketing","Social Media Marketing","Video Editing","Game Development","Chinese Language Course"].map((c,i)=><option key={i} value={c}>{c}</option>)}
//                   </select>
//                   <div className="flex justify-end gap-3 mt-4">
//                     <button type="button" onClick={closeModals} className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">Cancel</button>
//                     <button type="submit" className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 transition">Save</button>
//                   </div>
//                 </form>
//               </>
//             )}

//             {showViewModal && (
//               <>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">Submissions for {currentAssignment?.title}</h2>
//                 <p className="text-gray-500 mb-6">Total Submissions: {currentAssignment?.submissions}</p>
//                 <button onClick={closeModals} className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 transition">Close</button>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }














"use client";
import React, { useRef, useState } from "react";

type Assignment = {
  title: string;
  due: string;
  submissions: number;
  course: string;
};

type CurrentAssignment = Assignment & { index?: number };

const COURSE_OPTIONS = [
  "Excel",
  "Power BI",
  "IELTS",
  "Web Development",
  "WordPress",
  "Digital Marketing",
  "Social Media Marketing",
  "Video Editing",
  "Game Development",
  "Chinese Language Course",
];

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

export default function TrainerAssignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    { title: "Web Final Project", due: "2026-02-20", submissions: 18, course: "Web Development" },
    { title: "Python Quiz", due: "2026-02-25", submissions: 22, course: "Python for Data Science" },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState<CurrentAssignment | null>(null);

  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [submissions, setSubmissions] = useState(0);
  const [course, setCourse] = useState("");

  const openCreateModal = () => {
    setTitle("");
    setDue("");
    setSubmissions(0);
    setCourse("");
    setShowCreateModal(true);
  };

  const openEditModal = (assignment: Assignment, index: number) => {
    setCurrentAssignment({ ...assignment, index });
    setTitle(assignment.title);
    setDue(assignment.due);
    setSubmissions(assignment.submissions);
    setCourse(assignment.course);
    setShowEditModal(true);
  };

  const openViewModal = (assignment: Assignment) => {
    setCurrentAssignment(assignment);
    setShowViewModal(true);
  };

  const closeModals = () => {
    setShowCreateModal(false);
    setShowEditModal(false);
    setShowViewModal(false);
    setCurrentAssignment(null);
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    setAssignments([...assignments, { title, due, submissions, course }]);
    closeModals();
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAssignment?.index === undefined) return;
    const updated = [...assignments];
    updated[currentAssignment.index] = { title, due, submissions, course };
    setAssignments(updated);
    closeModals();
  };

  const inputClass =
    "bg-[#050b1f] border border-cyan-400/30 text-slate-100 placeholder:text-slate-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-[0_0_14px_rgba(34,211,238,0.5)] transition [color-scheme:dark]";
  const cancelBtn =
    "px-5 py-2 rounded-full bg-white/10 text-slate-300 border border-white/20 hover:bg-white/20 transition";
  const primaryBtn =
    "px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold shadow-[0_0_18px_rgba(34,211,238,0.5)] hover:shadow-[0_0_28px_rgba(168,85,247,0.8)] hover:scale-105 transition";

  const courseSelect = (
    <select
      value={course}
      onChange={(e) => setCourse(e.target.value)}
      className={inputClass}
      required
    >
      <option value="">Select Course</option>
      {COURSE_OPTIONS.map((c, i) => (
        <option key={i} value={c}>
          {c}
        </option>
      ))}
    </select>
  );

  return (
    <div className="relative w-full min-h-[calc(100vh-88px)] bg-[#050b1f] text-slate-100 overflow-hidden">
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
        .float3d { animation: float3d 7s ease-in-out infinite; }
        .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
        .slide-in { animation: slideIn .8s ease-out both; }
        .modal-in { animation: modalIn .45s ease-out both; }
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
      <div className="absolute top-16 right-16 hidden lg:block" style={{ perspective: "600px" }}>
        <div className="cube">
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>
      <div
        className="absolute top-52 left-6 w-20 h-20 rounded-full border-2 border-cyan-400/70 hidden lg:block"
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

      {/* ===== CONTENT ===== */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto py-8 px-4"
        style={{ perspective: "1400px" }}
      >
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 slide-in">
          <div>
            <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
              <span className="text-purple-400">Assign</span>ments
            </h1>
            <p className="text-slate-400 mt-1">Track assignment submissions and deadlines</p>
          </div>

          <button
            onClick={openCreateModal}
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-2xl font-bold shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_32px_rgba(168,85,247,0.8)] hover:scale-105 transition"
          >
            + Create Assignment
          </button>
        </div>

        {/* ASSIGNMENTS LIST */}
        <div className="space-y-6" style={{ transformStyle: "preserve-3d" }}>
          {assignments.map((a, i) => (
            <div key={i} className="slide-in" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="float3d" style={{ animationDelay: `${i * 0.5}s` }}>
                <TiltCard className="group rounded-[2rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-transparent to-purple-500/70">
                  <div
                    className="relative bg-[#0a1432]/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div style={{ transform: "translateZ(25px)" }}>
                        <h3 className="text-xl font-bold text-white neon-text">{a.title}</h3>
                        <p className="text-sm text-slate-400 mt-1">
                          Course: <span className="text-cyan-300">{a.course}</span> | Due Date:{" "}
                          <span className="text-purple-300">{a.due}</span>
                        </p>
                      </div>
                      <div
                        className="text-right mt-4 sm:mt-0 sm:mr-8"
                        style={{ transform: "translateZ(40px)" }}
                      >
                        <span className="block text-sm text-slate-400 mb-1">Submissions</span>
                        <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold shadow-[0_0_18px_rgba(34,211,238,0.7)]">
                          {a.submissions}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div
                      className="mt-6 flex flex-wrap gap-4"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <button
                        onClick={() => openViewModal(a)}
                        className="bg-gradient-to-r from-cyan-400 to-sky-500 text-white px-5 py-2 rounded-xl font-semibold shadow-[0_0_16px_rgba(34,211,238,0.5)] hover:shadow-[0_0_26px_rgba(34,211,238,0.9)] hover:scale-105 transition"
                      >
                        View Submissions →
                      </button>
                      <button
                        onClick={() => openEditModal(a, i)}
                        className="bg-white/10 text-slate-200 border border-purple-400/40 px-5 py-2 rounded-xl font-semibold hover:bg-purple-500/20 hover:shadow-[0_0_16px_rgba(168,85,247,0.5)] transition"
                      >
                        Edit Assignment
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODALS ================= */}
      {(showCreateModal || showEditModal || showViewModal) && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#02050f]/80 backdrop-blur-sm z-50 p-4 overflow-auto">
          <div className="modal-in relative w-full max-w-md rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400 via-transparent to-purple-500 shadow-[0_0_60px_rgba(34,211,238,0.35)]">
            <div className="relative bg-[#0a1432] rounded-3xl p-8">
              <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>
              <span className="absolute bottom-4 left-5 text-purple-400 text-lg neon-pulse">✧</span>

              {showCreateModal && (
                <>
                  <h2 className="text-2xl font-extrabold text-cyan-300 neon-text mb-5">
                    Create <span className="text-purple-400">Assignment</span>
                  </h2>
                  <form onSubmit={handleCreate} className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Assignment Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className={inputClass}
                      required
                    />
                    <input
                      type="date"
                      value={due}
                      onChange={(e) => setDue(e.target.value)}
                      className={inputClass}
                      required
                    />
                    <input
                      type="number"
                      placeholder="Submissions"
                      value={submissions}
                      onChange={(e) => setSubmissions(Number(e.target.value))}
                      className={inputClass}
                    />
                    {courseSelect}
                    <div className="flex justify-end gap-3 mt-4">
                      <button type="button" onClick={closeModals} className={cancelBtn}>
                        Cancel
                      </button>
                      <button type="submit" className={primaryBtn}>
                        Create
                      </button>
                    </div>
                  </form>
                </>
              )}

              {showEditModal && (
                <>
                  <h2 className="text-2xl font-extrabold text-cyan-300 neon-text mb-5">
                    Edit <span className="text-purple-400">Assignment</span>
                  </h2>
                  <form onSubmit={handleEdit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className={inputClass}
                      required
                    />
                    <input
                      type="date"
                      value={due}
                      onChange={(e) => setDue(e.target.value)}
                      className={inputClass}
                      required
                    />
                    <input
                      type="number"
                      value={submissions}
                      onChange={(e) => setSubmissions(Number(e.target.value))}
                      className={inputClass}
                      required
                    />
                    {courseSelect}
                    <div className="flex justify-end gap-3 mt-4">
                      <button type="button" onClick={closeModals} className={cancelBtn}>
                        Cancel
                      </button>
                      <button type="submit" className={primaryBtn}>
                        Save
                      </button>
                    </div>
                  </form>
                </>
              )}

              {showViewModal && (
                <>
                  <h2 className="text-2xl font-extrabold text-cyan-300 neon-text mb-4">
                    Submissions for{" "}
                    <span className="text-purple-400">{currentAssignment?.title}</span>
                  </h2>
                  <p className="text-slate-400 mb-6">
                    Total Submissions:{" "}
                    <span className="text-cyan-300 font-bold">{currentAssignment?.submissions}</span>
                  </p>
                  <button onClick={closeModals} className={primaryBtn}>
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}