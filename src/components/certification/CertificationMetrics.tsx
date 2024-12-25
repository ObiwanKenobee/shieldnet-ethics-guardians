import {
  BadgeCheck,
  Clock,
  AlertTriangle,
  Percent,
  Calendar,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const metrics = [
  {
    title: "Active Certifications",
    value: "12",
    description: "In progress",
    icon: BadgeCheck,
    trend: "up",
    detail: "3 near completion",
  },
  {
    title: "Compliance Score",
    value: "87.5%",
    description: "Overall alignment",
    icon: Percent,
    trend: "up",
    detail: "2.5% increase",
  },
  {
    title: "Flagged Issues",
    value: "4",
    description: "Requiring attention",
    icon: AlertTriangle,
    trend: "down",
    detail: "2 critical",
  },
  {
    title: "Avg. Completion Time",
    value: "45 days",
    description: "Current average",
    icon: Clock,
    trend: "neutral",
    detail: "On target",
  },
  {
    title: "Upcoming Deadlines",
    value: "7",
    description: "Within 30 days",
    icon: Calendar,
    trend: "up",
    detail: "2 this week",
  },
]

export function CertificationMetrics() {
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