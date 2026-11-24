// import Sidebar from "../components/Sidebar"
// import Topbar from "../components/Topbar"

// export default function StudentLayout({ children }) {
//   return (
//     <div className="flex h-screen">
//       <Sidebar role="student" />
//       <div className="flex-1">
//         <Topbar title="Student Dashboard" />
//         <main className="p-6 bg-gray-100 min-h-screen">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }













import React from "react"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

// Ye file: app/student/layout.tsx (purani layout ki jagah)
export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#050b1f]">
      <Sidebar role="student" />
      <div className="flex-1 min-w-0 flex flex-col bg-[#050b1f]">
        <Topbar title="Student Dashboard" />
        {/* purana bg-gray-100 aur p-6 hata diya: yahi safed patti thi */}
        <main className="flex-1 bg-[#050b1f]">{children}</main>
      </div>
    </div>
  )
}