// import Sidebar from "../components/Sidebar"
// import Topbar from "../components/Topbar"

// export default function AdminLayout({ children }) {
//   return (
//     <div className="flex h-screen">
//       <Sidebar role="admin" />
//       <div className="flex-1">
//         <Topbar title="Admin Dashboard" />
//         <main className="p-6 bg-gray-100 min-h-screen">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }




import DashboardShell from "../components/DashboardShell"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="admin" title="Admin Dashboard">
      {children}
    </DashboardShell>
  )
}