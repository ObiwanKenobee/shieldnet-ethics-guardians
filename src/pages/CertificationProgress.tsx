import { SidebarProvider } from "@/components/ui/sidebar"
import { CertificationHeader } from "@/components/certification/CertificationHeader"
import { CertificationMetrics } from "@/components/certification/CertificationMetrics"
import { CertificationCharts } from "@/components/certification/CertificationCharts"
import { CertificationLogs } from "@/components/certification/CertificationLogs"

export default function CertificationProgress() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <main className="flex-1 flex flex-col min-w-0">
          <CertificationHeader />
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Certification Progress</h2>
            </div>
            <CertificationMetrics />
            <CertificationCharts />
            <CertificationLogs />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}