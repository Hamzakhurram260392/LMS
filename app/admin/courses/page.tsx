// "use client";

// const courses = [
//   "Excel",
//   "Power BI",
//   "IELTS",
//   "Web Development",
//   "WordPress",
//   "Digital Marketing",
//   "Social Media Marketing",
//   "Video Editing",
//   "Game Development",
//   "Chinese Language Course",
// ];

// export default function Courses() {
//   return (
//     <div className="flex min-h-screen">
//       <main className="flex-1 p-6">
   
//         <h1 className="text-2xl font-bold mb-6">Available Courses</h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
//             >

//               <h2 className="font-semibold text-lg">{course}</h2>

//               <p className="text-gray-500 text-sm mt-2">Active Course</p>

//               <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg">
//                 Enroll Now
//               </button>

//             </div>
//           ))}

//         </div>
//       </main>
//     </div>
//   );
// }



// "use client";
// import { useState } from "react";
// import type React from "react";

// const courses = [
//   { name: "Excel", price: "$50" },
//   { name: "Power BI", price: "$70" },
//   { name: "IELTS", price: "$100" },
//   { name: "Web Development", price: "$200" },
//   { name: "WordPress", price: "$150" },
//   { name: "Digital Marketing", price: "$120" },
//   { name: "Social Media Marketing", price: "$110" },
//   { name: "Video Editing", price: "$90" },
//   { name: "Game Development", price: "$250" },
//   { name: "Chinese Language Course", price: "$80" },
// ];

// export default function Courses() {
//   const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
//   const [showModal, setShowModal] = useState(false);

//   // form states
//   const [studentName, setStudentName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [studentEmail, setStudentEmail] = useState("");
//   const [fatherName, setFatherName] = useState("");

//   const openModal = (course) => {
//     setSelectedCourse(course);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setStudentName("");
//     setContactNumber("");
//     setStudentEmail("");
//     setFatherName("");
//   };

//   const handleEnroll = (e: React.FormEvent) => {
//     e.preventDefault();
//     // 👇 replace this with your API call or DB logic
//     console.log("Enrolling:", {
//       studentName,
//       contactNumber,
//       studentEmail,
//       fatherName,
//       course: selectedCourse.name,
//       price: selectedCourse.price,
//     });
//     alert(`Student ${studentName} enrolled in ${selectedCourse.name}!`);
//     closeModal();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#ecfeff] relative overflow-hidden">

//       {/* 🌟 Decorative stars */}
//       <span className="absolute top-16 left-24 text-yellow-400 text-2xl animate-pulse">✦</span>
//       <span className="absolute top-40 right-32 text-pink-400 text-xl">✧</span>
//       <span className="absolute bottom-32 left-1/3 text-indigo-400 text-xl">✦</span>

//       {/* ☁️ Blobs */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
//       <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-pink-300/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl" />

//       <main className="relative z-10 p-8">

//         {/* ================= TITLE ================= */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-extrabold text-gray-800">
//             Available Courses
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage and view all active courses
//           </p>
//         </div>

//         {/* ================= COURSES GRID ================= */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="group relative rounded-[2rem] p-[2px]
//               bg-gradient-to-r from-white/60 to-white/20
//               hover:scale-[1.03] transition-all duration-300"
//             >
//               <div className="relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl">

//                 <span className="absolute top-4 right-5 text-yellow-300 text-lg">✦</span>

//                 <h2 className="text-xl font-bold text-gray-800">
//                   {course.name}
//                 </h2>

//                 <p className="text-sm text-gray-500 mt-2">
//                   Active Course - Price: {course.price}
//                 </p>

//                 <div className="mt-6 flex justify-between items-center">
//                   <span className="text-xs font-semibold bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
//                     LIVE
//                   </span>

//                   <button
//                     onClick={() => openModal(course)}
//                     className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-5 py-2 rounded-full shadow-lg text-sm font-semibold hover:opacity-90 transition"
//                   >
//                     Enroll Now →
//                   </button>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* ================= MODAL ================= */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//           <div className="bg-white rounded-3xl p-8 w-96 relative shadow-2xl">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               Enroll in {selectedCourse.name}
//             </h2>

//             <form onSubmit={handleEnroll} className="flex flex-col gap-4">

//               <input
//                 type="text"
//                 placeholder="Student Name"
//                 value={studentName}
//                 onChange={(e) => setStudentName(e.target.value)}
//                 className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 required
//               />

//               <input
//                 type="text"
//                 placeholder="Contact Number"
//                 value={contactNumber}
//                 onChange={(e) => setContactNumber(e.target.value)}
//                 className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 required
//               />

//               <input
//                 type="email"
//                 placeholder="Student Email"
//                 value={studentEmail}
//                 onChange={(e) => setStudentEmail(e.target.value)}
//                 className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 required
//               />

//               <input
//                 type="text"
//                 placeholder="Father Name"
//                 value={fatherName}
//                 onChange={(e) => setFatherName(e.target.value)}
//                 className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 required
//               />

//               {/* Auto-filled course */}
//               <input
//                 type="text"
//                 value={selectedCourse.name}
//                 readOnly
//                 className="border border-gray-300 rounded-xl p-3 bg-gray-100 cursor-not-allowed"
//               />

//               {/* Auto-filled price */}
//               <input
//                 type="text"
//                 value={selectedCourse.price}
//                 readOnly
//                 className="border border-gray-300 rounded-xl p-3 bg-gray-100 cursor-not-allowed"
//               />

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
//                   className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 transition"
//                 >
//                   Enroll
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

const courses = [
  { name: "Excel", price: "$50" },
  { name: "Power BI", price: "$70" },
  { name: "IELTS", price: "$100" },
  { name: "Web Development", price: "$200" },
  { name: "WordPress", price: "$150" },
  { name: "Digital Marketing", price: "$120" },
  { name: "Social Media Marketing", price: "$110" },
  { name: "Video Editing", price: "$90" },
  { name: "Game Development", price: "$250" },
  { name: "Chinese Language Course", price: "$80" },
];

type Course = (typeof courses)[0];

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
      transform: `perspective(1000px) rotateX(${(0.5 - y) * intensity}deg) rotateY(${(x - 0.5) * intensity}deg) translateZ(14px) scale(1.03)`,
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

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showModal, setShowModal] = useState(false);

  // form states
  const [studentName, setStudentName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [fatherName, setFatherName] = useState("");

  const openModal = (course: Course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setStudentName("");
    setContactNumber("");
    setStudentEmail("");
    setFatherName("");
  };

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;
    // 👇 replace this with your API call or DB logic
    console.log("Enrolling:", {
      studentName,
      contactNumber,
      studentEmail,
      fatherName,
      course: selectedCourse.name,
      price: selectedCourse.price,
    });
    alert(`Student ${studentName} enrolled in ${selectedCourse.name}!`);
    closeModal();
  };

  const inputClass =
    "bg-[#050b1f] border border-cyan-400/30 text-slate-100 placeholder:text-slate-500 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-[0_0_14px_rgba(34,211,238,0.5)] transition";
  const readOnlyClass =
    "bg-white/5 border border-purple-500/30 text-purple-200 rounded-xl p-3 cursor-not-allowed";

  return (
    <div className="min-h-[calc(100vh-88px)] bg-[#050b1f] text-slate-100 relative overflow-hidden">
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
        .float3d { animation: float3d 6s ease-in-out infinite; }
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
      <div className="absolute top-16 right-24 hidden lg:block" style={{ perspective: "600px" }}>
        <div className="cube">
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>
      <div
        className="absolute top-44 left-8 w-20 h-20 rounded-full border-2 border-cyan-400/70 hidden lg:block"
        style={{ animation: "spinY 9s linear infinite", boxShadow: "0 0 18px rgba(34,211,238,.6)" }}
      />
      <div
        className="absolute bottom-24 right-16 w-16 h-16 rounded-full border-2 border-purple-500/70 hidden lg:block"
        style={{ animation: "spinY 6s linear infinite reverse", boxShadow: "0 0 18px rgba(168,85,247,.6)" }}
      />

      {/* ✦ Stars */}
      <span className="absolute top-16 left-24 text-cyan-300 text-2xl animate-pulse neon-text">✦</span>
      <span className="absolute top-40 right-32 text-purple-400 text-xl neon-pulse">✧</span>
      <span className="absolute bottom-32 left-1/3 text-cyan-400 text-xl neon-pulse">✦</span>

      <main className="relative z-10 p-8" style={{ perspective: "1400px" }}>
        {/* ================= TITLE ================= */}
        <div className="mb-8 slide-in">
          <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
            Available <span className="text-purple-400">Courses</span>
          </h1>
          <p className="text-slate-400 mt-1">Manage and view all active courses</p>
        </div>

        {/* ================= COURSES GRID ================= */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7"
          style={{ transformStyle: "preserve-3d" }}
        >
          {courses.map((course, index) => (
            <div key={index} className="slide-in" style={{ animationDelay: `${index * 0.08}s` }}>
              <div className="float3d" style={{ animationDelay: `${(index % 3) * 0.5}s` }}>
                <TiltCard className="group rounded-[2rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-transparent to-purple-500/70">
                  <div
                    className="relative bg-[#0a1432]/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>

                    <h2
                      className="text-xl font-bold text-white neon-text"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {course.name}
                    </h2>

                    <p
                      className="text-sm text-slate-400 mt-2"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      Active Course - Price:{" "}
                      <span className="text-purple-300 font-semibold">{course.price}</span>
                    </p>

                    <div
                      className="mt-6 flex justify-between items-center"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      <span className="text-xs font-semibold bg-cyan-400/15 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.35)]">
                        LIVE
                      </span>

                      <button
                        onClick={() => openModal(course)}
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-5 py-2 rounded-full shadow-[0_0_18px_rgba(34,211,238,0.5)] text-sm font-semibold hover:shadow-[0_0_28px_rgba(168,85,247,0.8)] hover:scale-105 transition"
                      >
                        Enroll Now →
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ================= MODAL ================= */}
      {showModal && selectedCourse && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#02050f]/80 backdrop-blur-sm z-50 p-4">
          <div className="modal-in relative w-full max-w-md rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400 via-transparent to-purple-500 shadow-[0_0_60px_rgba(34,211,238,0.35)]">
            <div className="relative bg-[#0a1432] rounded-3xl p-8">
              <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>
              <span className="absolute bottom-4 left-5 text-purple-400 text-lg neon-pulse">✧</span>

              <h2 className="text-2xl font-extrabold text-cyan-300 neon-text mb-5">
                Enroll in <span className="text-purple-400">{selectedCourse.name}</span>
              </h2>

              <form onSubmit={handleEnroll} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Student Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className={inputClass}
                  required
                />

                <input
                  type="text"
                  placeholder="Contact Number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className={inputClass}
                  required
                />

                <input
                  type="email"
                  placeholder="Student Email"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  className={inputClass}
                  required
                />

                <input
                  type="text"
                  placeholder="Father Name"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  className={inputClass}
                  required
                />

                {/* Auto-filled course */}
                <input type="text" value={selectedCourse.name} readOnly className={readOnlyClass} />

                {/* Auto-filled price */}
                <input type="text" value={selectedCourse.price} readOnly className={readOnlyClass} />

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
                    Enroll
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