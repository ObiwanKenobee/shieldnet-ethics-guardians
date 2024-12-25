import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { EnvironmentalMetrics } from "@/components/environmental/EnvironmentalMetrics"
import { EnvironmentalCharts } from "@/components/environmental/EnvironmentalCharts"
import { EnvironmentalLogs } from "@/components/environmental/EnvironmentalLogs"

export default function EnvironmentalImpact() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <main className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Environmental Impact</h2>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">Environmental Health: Good</span>
              </div>
            </div>
            <EnvironmentalMetrics />
            <EnvironmentalCharts />
            <EnvironmentalLogs />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}