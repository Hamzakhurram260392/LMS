// import Sidebar from "../components/Sidebar"
// import Topbar from "../components/Topbar"

// export default function TrainerLayout({ children }) {
//   return (
//     <div className="flex h-screen">
//       <Sidebar role="trainer" />
//       <div className="flex-1">
//         <Topbar title="Trainer Dashboard" />
//         <main className="p-6 bg-gray-100 min-h-screen">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }








import DashboardShell from "../components/DashboardShell"

// Ye file: app/trainer/layout.tsx
export default function TrainerLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell role="trainer" title="Trainer Dashboard">
      {children}
    </DashboardShell>
  )
}