// "use client";


// export default function Settings() {
//   return (
//     <div className="flex min-h-screen">

//       <main className="flex-1 p-6">

//         <div className="max-w-xl">
//           <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>

//           <div className="bg-white p-6 rounded-xl shadow">

//             {/* Profile Pic */}
//             <div className="flex items-center gap-4 mb-6">

//               <img src="0" className="rounded-full" />

//               <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
//                 Change Photo
//               </button>

//             </div>

//             {/* Form */}
//             <div className="space-y-4">

//               <div>
//                 <label className="text-sm text-gray-500">Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="John Smith"
//                   className="w-full border p-2 rounded-lg"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-500">Contact Number</label>
//                 <input
//                   type="text"
//                   placeholder="+92 300 0000000"
//                   className="w-full border p-2 rounded-lg"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-500">Email</label>
//                 <input
//                   type="email"
//                   placeholder="admin@gmail.com"
//                   className="w-full border p-2 rounded-lg"
//                 />
//               </div>

//               <button className="bg-green-600 text-white w-full py-2 rounded-lg mt-3">
//                 Save Changes
//               </button>

//             </div>

//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }






// "use client";

// export default function Settings() {
//   return (
//     <div className="flex min-h-screen bg-gradient-to-br  from-[#eef2ff] via-[#fdf4ff] to-[#ecfeff]">
//       <main className="flex-1 p-8 ">

//         {/* ===== Title ===== */}
//         <div className="mb-8 ">
//           <h1 className="text-4xl font-extrabold text-gray-800">
//             Profile Settings
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage your personal information
//           </p>
//         </div>

//         {/* ===== Card ===== */}
//         <div className="max-w-2xl bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-xl p-8">

//           {/* Profile Picture */}
//           <div className="flex items-center gap-6 mb-8">
//             <div className="relative">
//               <img
//                 src="/avatar.png"
//                 alt="profile"
//                 className="h-24 w-24 rounded-full border-4 border-white shadow-lg"
//               />
//               <span className="absolute bottom-1 right-1 bg-green-500 h-4 w-4 rounded-full border-2 border-white" />
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-gray-800">
//                 Admin User
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Administrator Account
//               </p>

//               <button className="mt-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-xl shadow hover:scale-105 transition">
//                 Change Photo
//               </button>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="grid grid-cols-1 gap-5">

//             <div>
//               <label className="text-sm font-medium text-gray-600">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="John Smith"
//                 className="mt-1 w-full rounded-xl border border-gray-200 bg-white/80 p-3 focus:ring-2 focus:ring-indigo-400 outline-none transition"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-600">
//                 Contact Number
//               </label>
//               <input
//                 type="text"
//                 placeholder="+92 300 0000000"
//                 className="mt-1 w-full rounded-xl border border-gray-200 bg-white/80 p-3 focus:ring-2 focus:ring-indigo-400 outline-none transition"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-600">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="admin@gmail.com"
//                 className="mt-1 w-full rounded-xl border border-gray-200 bg-white/80 p-3 focus:ring-2 focus:ring-indigo-400 outline-none transition"
//               />
//             </div>

//             {/* Actions */}
//             <div className="flex gap-4 mt-4">
//               <button className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
//                 Save Changes
//               </button>

//               <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
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
      transform: `perspective(1200px) rotateX(${(0.5 - y) * intensity}deg) rotateY(${(x - 0.5) * intensity}deg) translateZ(10px)`,
    });
    setGlare({ x: x * 100, y: y * 100, o: 1 });
  };

  const onLeave = () => {
    setStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
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
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(34,211,238,0.18), transparent 55%)`,
        }}
      />
    </div>
  );
}

export default function Settings() {
  const inputClass =
    "mt-1 w-full rounded-xl border border-cyan-400/30 bg-[#050b1f] text-slate-100 placeholder:text-slate-500 p-3 outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-[0_0_14px_rgba(34,211,238,0.5)] transition";

  return (
    <div className="min-h-[calc(100vh-88px)] bg-[#050b1f] text-slate-100 relative overflow-hidden">
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
        @keyframes ringSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .float3d { animation: float3d 7s ease-in-out infinite; }
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
        .avatar-ring { background: conic-gradient(from 0deg, #22d3ee, #a855f7, #22d3ee); animation: ringSpin 4s linear infinite; }
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
        className="absolute top-52 right-10 w-20 h-20 rounded-full border-2 border-cyan-400/70 hidden lg:block"
        style={{ animation: "spinY 9s linear infinite", boxShadow: "0 0 18px rgba(34,211,238,.6)" }}
      />
      <div
        className="absolute bottom-24 right-40 w-16 h-16 rounded-full border-2 border-purple-500/70 hidden lg:block"
        style={{ animation: "spinY 6s linear infinite reverse", boxShadow: "0 0 18px rgba(168,85,247,.6)" }}
      />

      {/* ✦ Stars */}
      <span className="absolute top-14 left-24 text-cyan-300 text-2xl animate-pulse neon-text">✦</span>
      <span className="absolute top-40 right-1/3 text-purple-400 text-xl neon-pulse">✧</span>
      <span className="absolute bottom-32 left-1/3 text-cyan-400 text-xl neon-pulse">✦</span>

      <main className="relative z-10 p-8" style={{ perspective: "1400px" }}>
        {/* ===== Title ===== */}
        <div className="mb-8 slide-in">
          <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
            Profile <span className="text-purple-400">Settings</span>
          </h1>
          <p className="text-slate-400 mt-1">Manage your personal information</p>
        </div>

        {/* ===== Card ===== */}
        <div className="max-w-2xl slide-in" style={{ animationDelay: "0.2s" }}>
          <div className="float3d">
            <TiltCard className="rounded-[2rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-transparent to-purple-500/70">
              <div
                className="relative bg-[#0a1432]/90 backdrop-blur-xl rounded-[2rem] shadow-[0_0_40px_rgba(34,211,238,0.2)] p-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="absolute top-4 right-5 text-cyan-300 text-lg neon-pulse">✦</span>
                <span className="absolute bottom-4 left-5 text-purple-400 text-lg neon-pulse">✧</span>

                {/* Profile Picture */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative" style={{ transform: "translateZ(40px)" }}>
                    {/* spinning neon ring */}
                    <div className="avatar-ring absolute -inset-1 rounded-full blur-[2px]" />
                    <img
                      src="/avatar.png"
                      alt="profile"
                      className="relative h-24 w-24 rounded-full border-4 border-[#0a1432] object-cover shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                    />
                    <span className="absolute bottom-1 right-1 bg-cyan-400 h-4 w-4 rounded-full border-2 border-[#0a1432] shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                  </div>

                  <div style={{ transform: "translateZ(25px)" }}>
                    <h3 className="text-xl font-bold text-white neon-text">Admin User</h3>
                    <p className="text-sm text-slate-400">Administrator Account</p>

                    <button className="mt-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-5 py-2 rounded-xl shadow-[0_0_18px_rgba(34,211,238,0.5)] hover:shadow-[0_0_28px_rgba(168,85,247,0.8)] hover:scale-105 transition">
                      Change Photo
                    </button>
                  </div>
                </div>

                {/* Form */}
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label className="text-sm font-medium text-cyan-200">Full Name</label>
                    <input type="text" placeholder="John Smith" className={inputClass} />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-cyan-200">Contact Number</label>
                    <input type="text" placeholder="+92 300 0000000" className={inputClass} />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-cyan-200">Email Address</label>
                    <input type="email" placeholder="admin@gmail.com" className={inputClass} />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 mt-4" style={{ transform: "translateZ(30px)" }}>
                    <button className="flex-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-white py-3 rounded-xl font-semibold shadow-[0_0_18px_rgba(34,211,238,0.5)] hover:shadow-[0_0_28px_rgba(168,85,247,0.8)] hover:scale-105 transition">
                      Save Changes
                    </button>

                    <button className="flex-1 bg-white/10 text-slate-300 border border-white/20 py-3 rounded-xl font-semibold hover:bg-white/20 transition">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </main>
    </div>
  );
}