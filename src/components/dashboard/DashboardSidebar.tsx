import { 
  Database, Shield, Server, Globe, Leaf, BadgeCheck, 
  Settings, BarChart3, ScrollText, FileText 
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"

const menuItems = [
  { title: "Overview", icon: BarChart3, url: "/dashboard" },
  { title: "Threat Monitoring", icon: Shield, url: "/threat-monitoring" },
  { title: "Ethics Governance", icon: ScrollText, url: "/ethics-governance" },
  { title: "Training Environment", icon: Server, url: "/training-environment" },
  { title: "Environmental Impact", icon: Leaf, url: "/environmental-impact" },
  { title: "Global Governance", icon: Globe, url: "/global-governance" },
  { title: "Certification Progress", icon: BadgeCheck, url: "/certification-progress" },
  { title: "Reports & Logs", icon: FileText, url: "/reports-and-logs" },
  { title: "Settings", icon: Settings, url: "/settings" },
]

export function DashboardSidebar() {
  const navigate = useNavigate()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={() => navigate(item.url)}>
                    <item.icon />
                    <span>{item.title}</span>
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