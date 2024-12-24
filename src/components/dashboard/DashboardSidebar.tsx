import { 
  Database, Shield, Server, Globe, Leaf, BadgeCheck, 
  Settings, BarChart3, ScrollText 
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const menuItems = [
  { title: "Overview", icon: BarChart3, url: "/dashboard" },
  { title: "Threat Monitoring", icon: Shield, url: "#threats" },
  { title: "Ethics Governance", icon: ScrollText, url: "#ethics" },
  { title: "Training Environment", icon: Server, url: "#training" },
  { title: "Global Governance", icon: Globe, url: "#global" },
  { title: "Environmental Impact", icon: Leaf, url: "#environment" },
  { title: "Certification Progress", icon: BadgeCheck, url: "#certification" },
  { title: "Reports & Logs", icon: Database, url: "#reports" },
  { title: "Settings", icon: Settings, url: "#settings" },
]

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}