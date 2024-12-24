import { AlertOctagon, Percent, Database, Leaf, BadgeCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const metrics = [
  {
    title: "Real-Time Threats",
    value: "2",
    description: "Active alerts",
    icon: AlertOctagon,
    trend: "up",
  },
  {
    title: "Governance Compliance",
    value: "98.5%",
    description: "Current compliance rate",
    icon: Percent,
    trend: "up",
  },
  {
    title: "Training Health",
    value: "Good",
    description: "Systems operating normally",
    icon: Database,
    trend: "neutral",
  },
  {
    title: "Carbon Impact",
    value: "-12%",
    description: "Below monthly average",
    icon: Leaf,
    trend: "down",
  },
  {
    title: "Certifications",
    value: "3",
    description: "Pending approvals",
    icon: BadgeCheck,
    trend: "up",
  },
]

export function DashboardMetrics() {
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
          </CardContent>
        </Card>
      ))}
    </div>
  )
}