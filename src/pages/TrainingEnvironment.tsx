import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { TrainingMetrics } from "@/components/training/TrainingMetrics"
import { TrainingCharts } from "@/components/training/TrainingCharts"
import { TrainingLogs } from "@/components/training/TrainingLogs"

export default function TrainingEnvironment() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <main className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Training Environment</h2>
            </div>
            <TrainingMetrics />
            <TrainingCharts />
            <TrainingLogs />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}