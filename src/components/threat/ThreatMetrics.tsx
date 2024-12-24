import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle, Activity, Clock } from "lucide-react"

const metrics = [
  {
    title: "Active Threats",
    value: "3",
    description: "2 High, 1 Medium",
    icon: Shield,
    trend: "up",
    detail: "Increased by 2 in last hour",
  },
  {
    title: "Resolved Threats",
    value: "24",
    description: "Past 24 hours",
    icon: CheckCircle,
    trend: "neutral",
    detail: "Normal activity level",
  },
  {
    title: "System Health",
    value: "98%",
    description: "Systems operational",
    icon: Activity,
    trend: "up",
    detail: "2% improvement",
  },
  {
    title: "Response Time",
    value: "4.2m",
    description: "Average resolution time",
    icon: Clock,
    trend: "down",
    detail: "1.3m faster than target",
  },
]

export function ThreatMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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