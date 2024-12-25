import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentAlerts = [
  {
    id: 1,
    type: "Compliance",
    severity: "high",
    message: "Region A falls below compliance threshold",
    time: "2 minutes ago",
    location: "Region A",
  },
  {
    id: 2,
    type: "Collaboration",
    severity: "medium",
    message: "New partnership initiative launched",
    time: "15 minutes ago",
    location: "Global",
  },
  {
    id: 3,
    type: "Stakeholder",
    severity: "low",
    message: "Increased participation in Sector B",
    time: "1 hour ago",
    location: "Sector B",
  },
]

const activityLogs = [
  {
    id: 1,
    action: "Agreement Update",
    details: "Framework revision approved",
    time: "Today at 14:30",
    user: "Policy Team",
    status: "completed",
  },
  {
    id: 2,
    action: "Stakeholder Meeting",
    details: "Quarterly review session",
    time: "Today at 12:15",
    user: "Governance Board",
    status: "in-progress",
  },
  {
    id: 3,
    action: "Compliance Check",
    details: "Automated system audit",
    time: "Today at 09:00",
    user: "System",
    status: "completed",
  },
]

const severityColors = {
  low: "bg-green-500",
  medium: "bg-yellow-500",
  high: "bg-red-500",
}

const statusColors = {
  completed: "bg-green-500",
  "in-progress": "bg-blue-500",
  pending: "bg-yellow-500",
}

export function GlobalGovernanceLogs() {
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