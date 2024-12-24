import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { DashboardMetrics } from "@/components/dashboard/DashboardMetrics"
import { DashboardCharts } from "@/components/dashboard/DashboardCharts"
import { DashboardLogs } from "@/components/dashboard/DashboardLogs"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <main className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <DashboardMetrics />
            <DashboardCharts />
            <DashboardLogs />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}