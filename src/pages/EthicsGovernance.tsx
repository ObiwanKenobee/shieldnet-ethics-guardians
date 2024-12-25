import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { EthicsMetrics } from "@/components/ethics/EthicsMetrics"
import { EthicsCharts } from "@/components/ethics/EthicsCharts"
import { EthicsLogs } from "@/components/ethics/EthicsLogs"

export default function EthicsGovernance() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <main className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Ethics Governance</h2>
            </div>
            <EthicsMetrics />
            <EthicsCharts />
            <EthicsLogs />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}