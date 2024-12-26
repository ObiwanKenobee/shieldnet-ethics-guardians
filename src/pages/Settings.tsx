import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { SettingsHeader } from "@/components/settings/SettingsHeader"
import { SettingsContent } from "@/components/settings/SettingsContent"

export default function Settings() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <main className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <div className="flex-1 space-y-4 p-8 pt-6">
            <SettingsHeader />
            <SettingsContent />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}