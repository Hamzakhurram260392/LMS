// import Sidebar from "../components/Sidebar"
// import Topbar from "../components/Topbar"

// export default function DashboardShell({
//   role,
//   title,
//   children,
// }: {
//   role: string
//   title: string
//   children: React.ReactNode
// }) {
//   return (
//     <div className="flex min-h-screen bg-[#050b1f]">
//       <Sidebar role={role} />
//       <div className="flex-1 min-w-0 flex flex-col bg-[#050b1f]">
//         <Topbar title={title} />
//         {/* koi padding ya light bg nahi — page khud apna padding rakhta hai */}
//         <div className="flex-1 bg-[#050b1f]">{children}</div>
//       </div>
//     </div>
//   )
// }











"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

/*
  Ye wrapper white/light background aur extra padding ko khatam karta hai.
  Apne layout.tsx mein purane wrapper ki jagah isko use karein:

  <DashboardShell role="admin" title="Admin Dashboard">
    {children}
  </DashboardShell>

  fullPageRoutes: in routes par Sidebar aur Topbar NAHI dikhte,
  sirf page khud poori screen par khulta hai (jaise Kids LMS).

  (Agar Sidebar/Topbar ka path alag hai to upar import theek kar lein.)
*/
export default function DashboardShell({
  role,
  title,
  children,
  fullPageRoutes = ["/admin/kids"],
}: {
  role: string
  title: string
  children: React.ReactNode
  fullPageRoutes?: string[]
}) {
  const pathname = usePathname()

  // Kids LMS jaise pages: koi sidebar/topbar nahi, sirf page
  if (fullPageRoutes.some((r) => pathname === r || pathname.startsWith(r + "/"))) {
    return <div className="min-h-screen bg-[#050b1f]">{children}</div>
  }

  return (
    <div className="flex min-h-screen bg-[#050b1f]">
      <Sidebar role={role} />
      <div className="flex-1 min-w-0 flex flex-col bg-[#050b1f]">
        <Topbar title={title} />
        {/* koi padding ya light bg nahi — page khud apna padding rakhta hai */}
        <div className="flex-1 bg-[#050b1f]">{children}</div>
      </div>
    </div>
  )
}