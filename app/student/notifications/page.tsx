// export default function StudentNotifications() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Notifications</h1>

//       <div className="bg-white p-4 rounded shadow space-y-3">
//         <p>📢 New Assignment Uploaded</p>
//         <p>📢 Result Published</p>
//         <p>📢 Class Scheduled Tomorrow</p>
//       </div>
//     </div>
//   );
// }



// 'use client'

// export default function StudentNotifications() {
//   const notifications = [
//     {
//       title: 'New Assignment Uploaded',
//       desc: 'Web Development Final Project has been added',
//       time: '2 min ago',
//       type: 'info',
//       unread: true,
//     },
//     {
//       title: 'Result Published',
//       desc: 'Python Quiz results are now available',
//       time: '1 hour ago',
//       type: 'success',
//     },
//     {
//       title: 'Class Scheduled',
//       desc: 'Machine Learning class scheduled for tomorrow',
//       time: 'Yesterday',
//       type: 'warning',
//     },
//   ]

//   const badge = {
//     info: 'from-indigo-500 to-purple-500',
//     success: 'from-emerald-500 to-cyan-500',
//     warning: 'from-orange-500 to-amber-500',
//   }

//   return (
//     <div className="space-y-8">

//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-extrabold text-gray-800">
//           Notifications
//         </h1>
//         <p className="text-gray-500 mt-1">
//           Stay updated with latest activities
//         </p>
//       </div>

//       {/* Actions */}
//       <div className="flex justify-between items-center">
//         <p className="text-sm text-gray-500">
//           3 Notifications
//         </p>
//         <button className="text-sm font-semibold text-indigo-600 hover:underline">
//           Mark all as read
//         </button>
//       </div>

//       {/* Notifications List */}
//       <div className="space-y-4">
//         {notifications.map((n, i) => (
//           <div
//             key={i}
//             className={`flex gap-4 p-5 rounded-2xl shadow
//             backdrop-blur-xl bg-white/70
//             ${n.unread ? 'ring-2 ring-indigo-400/40' : ''}`}
//           >

//             {/* Icon */}
//             <div
//               className={`w-12 h-12 rounded-full flex items-center justify-center
//               bg-gradient-to-r ${badge[n.type]} text-white text-xl shadow`}
//             >
//               🔔
//             </div>

//             {/* Content */}
//             <div className="flex-1">
//               <p className="font-semibold text-gray-800">
//                 {n.title}
//               </p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {n.desc}
//               </p>
//             </div>

//             {/* Time */}
//             <span className="text-xs text-gray-400 whitespace-nowrap">
//               {n.time}
//             </span>
//           </div>
//         ))}
//       </div>

//     </div>
//   )
// }



















"use client";
import React, { useRef, useState } from "react";

type Kind = "info" | "success" | "warning";

type Notification = {
  title: string;
  desc: string;
  time: string;
  type: Kind;
  unread?: boolean;
};

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

export default function StudentNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      title: "New Assignment Uploaded",
      desc: "Web Development Final Project has been added",
      time: "2 min ago",
      type: "info",
      unread: true,
    },
    {
      title: "Result Published",
      desc: "Python Quiz results are now available",
      time: "1 hour ago",
      type: "success",
    },
    {
      title: "Class Scheduled",
      desc: "Machine Learning class scheduled for tomorrow",
      time: "Yesterday",
      type: "warning",
    },
  ]);

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));

  // logo ke neon colors: cyan, purple, pink
  const badge: Record<Kind, { gradient: string; glow: string }> = {
    info: { gradient: "from-cyan-400 to-sky-500", glow: "shadow-[0_0_18px_rgba(34,211,238,0.7)]" },
    success: { gradient: "from-purple-500 to-fuchsia-500", glow: "shadow-[0_0_18px_rgba(168,85,247,0.7)]" },
    warning: { gradient: "from-orange-400 to-pink-500", glow: "shadow-[0_0_18px_rgba(244,114,182,0.7)]" },
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="relative w-full min-h-[calc(100vh-88px)] bg-[#050b1f] text-slate-100 p-8 overflow-hidden">
      {/* ===== custom 3D animations ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float3d {
          0%,100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
          50%     { transform: translateY(-6px) rotateX(2deg) rotateY(-2deg); }
        }
        @keyframes spinY { from { transform: rotateY(0deg) rotateX(60deg); } to { transform: rotateY(360deg) rotateX(60deg); } }
        @keyframes spinCube { from { transform: rotateX(0) rotateY(0); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes gridMove { from { background-position: 0 0; } to { background-position: 0 60px; } }
        @keyframes neonPulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(30px) rotateX(-12deg); } to { opacity: 1; transform: translateY(0) rotateX(0); } }
        @keyframes rowIn { from { opacity: 0; transform: translateX(-40px) rotateY(20deg); } to { opacity: 1; transform: translateX(0) rotateY(0); } }
        @keyframes bellRing { 0%,100% { transform: translateZ(40px) rotate(0deg); } 20% { transform: translateZ(40px) rotate(14deg); } 40% { transform: translateZ(40px) rotate(-12deg); } 60% { transform: translateZ(40px) rotate(8deg); } 80% { transform: translateZ(40px) rotate(-6deg); } }
        @keyframes unreadGlow { 0%,100% { box-shadow: 0 0 14px rgba(34,211,238,.35); } 50% { box-shadow: 0 0 30px rgba(34,211,238,.75); } }
        .float3d { animation: float3d 7s ease-in-out infinite; }
        .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
        .slide-in { animation: slideIn .8s ease-out both; }
        .row-in { animation: rowIn .6s ease-out both; }
        .bell-ring { animation: bellRing 2.2s ease-in-out infinite; }
        .unread-glow { animation: unreadGlow 2.2s ease-in-out infinite; }
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

      <div className="relative z-10 space-y-8 max-w-4xl" style={{ perspective: "1400px" }}>
        {/* Header */}
        <div className="slide-in">
          <h1 className="text-4xl font-extrabold text-cyan-300 neon-text">
            <span className="text-purple-400">Notifi</span>cations
          </h1>
          <p className="text-slate-400 mt-1">Stay updated with latest activities</p>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center slide-in" style={{ animationDelay: "0.1s" }}>
          <p className="text-sm text-slate-400">
            {notifications.length} Notifications
            {unreadCount > 0 && (
              <span className="ml-3 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-400/15 text-cyan-300 border border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.35)]">
                {unreadCount} new
              </span>
            )}
          </p>
          <button
            onClick={markAllRead}
            className="text-sm font-semibold text-purple-300 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition"
          >
            Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-5" style={{ transformStyle: "preserve-3d" }}>
          {notifications.map((n, i) => (
            <div key={i} className="row-in" style={{ animationDelay: `${i * 0.12 + 0.2}s` }}>
              <div className="float3d" style={{ animationDelay: `${i * 0.6}s` }}>
                <TiltCard
                  className={`rounded-[1.5rem] p-[2px] bg-gradient-to-br from-cyan-400/60 via-transparent to-purple-500/60 ${
                    n.unread ? "unread-glow" : ""
                  }`}
                >
                  <div
                    className="relative flex gap-4 items-center p-5 rounded-[1.5rem] bg-[#0a1432]/90 backdrop-blur-xl"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* unread dot */}
                    {n.unread && (
                      <span className="absolute top-3 left-3 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,1)] neon-pulse" />
                    )}

                    {/* Icon */}
                    <div
                      className={`bell-ring w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-gradient-to-r ${badge[n.type].gradient} ${badge[n.type].glow} text-white text-xl`}
                    >
                      🔔
                    </div>

                    {/* Content */}
                    <div className="flex-1" style={{ transform: "translateZ(25px)" }}>
                      <p className="font-semibold text-white">{n.title}</p>
                      <p className="text-sm text-slate-400 mt-1">{n.desc}</p>
                    </div>

                    {/* Time */}
                    <span
                      className="text-xs text-cyan-300/70 whitespace-nowrap"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {n.time}
                    </span>
                  </div>
                </TiltCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}