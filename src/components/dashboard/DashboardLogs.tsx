import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentAlerts = [
  {
    id: 1,
    type: "Security",
    message: "Unauthorized access attempt detected",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "Ethics",
    message: "Decision alignment check flagged",
    time: "15 minutes ago",
  },
  {
    id: 3,
    type: "System",
    message: "Training environment health check passed",
    time: "1 hour ago",
  },
]

const auditLogs = [
  {
    id: 1,
    action: "System Update",
    details: "Security patches applied successfully",
    time: "Today at 14:30",
  },
  {
    id: 2,
    action: "User Activity",
    details: "New certification request submitted",
    time: "Today at 12:15",
  },
  {
    id: 3,
    action: "Compliance",
    details: "Weekly governance report generated",
    time: "Today at 09:00",
  },
]

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
                <div>
                  <p className="text-sm font-medium">{alert.type}</p>
                  <p className="text-sm text-muted-foreground">
                    {alert.message}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{alert.time}</p>
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
                <div>
                  <p className="text-sm font-medium">{log.action}</p>
                  <p className="text-sm text-muted-foreground">{log.details}</p>
                </div>
                <p className="text-sm text-muted-foreground">{log.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}