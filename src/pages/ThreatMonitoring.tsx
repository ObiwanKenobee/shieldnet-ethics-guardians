import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { ThreatMetrics } from "@/components/threat/ThreatMetrics"
import { ThreatMap } from "@/components/threat/ThreatMap"
import { ThreatCharts } from "@/components/threat/ThreatCharts"
import { ThreatLogs } from "@/components/threat/ThreatLogs"

export default function ThreatMonitoring() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <main className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Threat Monitoring</h2>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">System Health: Good</span>
              </div>
            </div>
            <ThreatMetrics />
            <ThreatMap />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <ThreatCharts />
              <ThreatLogs />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}