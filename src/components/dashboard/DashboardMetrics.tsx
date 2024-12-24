import {
  AlertOctagon,
  Percent,
  Database,
  Leaf,
  BadgeCheck,
  Shield,
  Users,
  Globe,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const metrics = [
  {
    title: "Real-Time Threats",
    value: "2",
    description: "Active alerts",
    icon: AlertOctagon,
    trend: "up",
    detail: "2 critical, 0 moderate",
  },
  {
    title: "Governance Compliance",
    value: "98.5%",
    description: "Current compliance rate",
    icon: Percent,
    trend: "up",
    detail: "3% increase this month",
  },
  {
    title: "Training Health",
    value: "Good",
    description: "Systems operating normally",
    icon: Database,
    trend: "neutral",
    detail: "All systems green",
  },
  {
    title: "Carbon Impact",
    value: "-12%",
    description: "Below monthly average",
    icon: Leaf,
    trend: "down",
    detail: "Saving 45 kWh/day",
  },
  {
    title: "Certifications",
    value: "3",
    description: "Pending approvals",
    icon: BadgeCheck,
    trend: "up",
    detail: "5 completed this month",
  },
  {
    title: "Security Score",
    value: "94",
    description: "Overall security rating",
    icon: Shield,
    trend: "up",
    detail: "Top 10% percentile",
  },
  {
    title: "Active Users",
    value: "247",
    description: "Currently online",
    icon: Users,
    trend: "up",
    detail: "Peak hours activity",
  },
  {
    title: "Global Network",
    value: "28",
    description: "Connected regions",
    icon: Globe,
    trend: "up",
    detail: "3 new this week",
  },
]

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="overflow-hidden">
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