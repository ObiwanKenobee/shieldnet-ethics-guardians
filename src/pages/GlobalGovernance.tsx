import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { GlobalGovernanceMetrics } from "@/components/governance/GlobalGovernanceMetrics"
import { GlobalGovernanceMap } from "@/components/governance/GlobalGovernanceMap"
import { GlobalGovernanceLogs } from "@/components/governance/GlobalGovernanceLogs"

export default function GlobalGovernance() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <main className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Global Governance</h2>
            </div>
            <GlobalGovernanceMetrics />
            <GlobalGovernanceMap />
            <GlobalGovernanceLogs />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}