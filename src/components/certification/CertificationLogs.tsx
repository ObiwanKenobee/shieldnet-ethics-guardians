import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentAlerts = [
  {
    id: 1,
    type: "Documentation",
    severity: "high",
    message: "Missing compliance report for ISO 27001",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "Review",
    severity: "medium",
    message: "Stakeholder feedback pending for security audit",
    time: "4 hours ago",
  },
  {
    id: 3,
    type: "Deadline",
    severity: "low",
    message: "SOC 2 certification renewal approaching",
    time: "1 day ago",
  },
]

const activityLogs = [
  {
    id: 1,
    action: "Document Upload",
    details: "Security policy documentation submitted",
    time: "Today at 14:30",
    user: "Sarah Chen",
  },
  {
    id: 2,
    action: "Review Complete",
    details: "Initial assessment passed for ISO 27001",
    time: "Today at 12:15",
    user: "John Smith",
  },
  {
    id: 3,
    action: "Status Update",
    details: "GDPR compliance verification in progress",
    time: "Today at 09:00",
    user: "Maria Garcia",
  },
]

const severityColors = {
  low: "bg-green-500",
  medium: "bg-yellow-500",
  high: "bg-red-500",
}

export function CertificationLogs() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center justify-between space-x-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        severityColors[alert.severity as keyof typeof severityColors]
                      }`}
                    />
                    <p className="text-sm font-medium">{alert.type}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {alert.message}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">
                  {alert.time}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Activity Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activityLogs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between space-x-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{log.action}</p>
                    <Badge variant="secondary">
                      {log.user}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {log.details}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">
                  {log.time}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}