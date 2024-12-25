import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Users, AlertTriangle, Shield, Activity } from "lucide-react"

const metrics = [
  {
    title: "Global Compliance Score",
    value: "87%",
    description: "Nations adhering to agreements",
    icon: Globe,
    trend: "up",
    detail: "3% increase this month",
  },
  {
    title: "Active Collaborations",
    value: "142",
    description: "Ongoing projects and partnerships",
    icon: Users,
    trend: "up",
    detail: "12 new this quarter",
  },
  {
    title: "Stakeholder Participation",
    value: "92%",
    description: "Active contribution rate",
    icon: Activity,
    trend: "neutral",
    detail: "Stable engagement",
  },
  {
    title: "Non-Compliance Issues",
    value: "7",
    description: "Flagged governance gaps",
    icon: AlertTriangle,
    trend: "down",
    detail: "Down from 12 last month",
  },
  {
    title: "Risk Index",
    value: "Low",
    description: "Current vulnerability level",
    icon: Shield,
    trend: "down",
    detail: "Improved security measures",
  },
]

export function GlobalGovernanceMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.description}
            </p>
            <div className="mt-2 text-xs font-medium text-muted-foreground">
              {metric.detail}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}