import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentAlerts = [
  {
    id: 1,
    type: "Security",
    severity: "high",
    message: "Unauthorized access attempt detected",
    time: "2 minutes ago",
    location: "US-West",
  },
  {
    id: 2,
    type: "Ethics",
    severity: "medium",
    message: "Decision alignment check flagged",
    time: "15 minutes ago",
    location: "EU-Central",
  },
  {
    id: 3,
    type: "System",
    severity: "low",
    message: "Training environment health check passed",
    time: "1 hour ago",
    location: "APAC",
  },
  {
    id: 4,
    type: "Security",
    severity: "high",
    message: "Multiple failed authentication attempts",
    time: "2 hours ago",
    location: "US-East",
  },
]

const auditLogs = [
  {
    id: 1,
    action: "System Update",
    details: "Security patches applied successfully",
    time: "Today at 14:30",
    user: "System Admin",
    status: "completed",
  },
  {
    id: 2,
    action: "User Activity",
    details: "New certification request submitted",
    time: "Today at 12:15",
    user: "Sarah Chen",
    status: "pending",
  },
  {
    id: 3,
    action: "Compliance",
    details: "Weekly governance report generated",
    time: "Today at 09:00",
    user: "Automated Task",
    status: "completed",
  },
  {
    id: 4,
    action: "Training",
    details: "New model validation initiated",
    time: "Yesterday at 18:45",
    user: "AI Training Team",
    status: "in-progress",
  },
]

const severityColors = {
  low: "bg-green-500",
  medium: "bg-yellow-500",
  high: "bg-red-500",
}

const statusColors = {
  completed: "bg-green-500",
  pending: "bg-yellow-500",
  "in-progress": "bg-blue-500",
}

export function DashboardLogs() {
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
                    <Badge variant="outline" className="ml-2">
                      {alert.location}
                    </Badge>
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
          <CardTitle>Audit Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {auditLogs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between space-x-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{log.action}</p>
                    <Badge
                      variant="secondary"
                      className={`${
                        statusColors[log.status as keyof typeof statusColors]
                      } text-white`}
                    >
                      {log.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {log.details}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    By {log.user}
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