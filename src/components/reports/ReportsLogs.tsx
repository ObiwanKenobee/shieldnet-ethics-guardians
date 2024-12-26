import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentLogs = [
  {
    id: 1,
    type: "Report Generation",
    status: "completed",
    message: "Monthly compliance report generated successfully",
    time: "2 minutes ago",
    user: "System",
  },
  {
    id: 2,
    type: "Security Alert",
    status: "flagged",
    message: "Unusual access pattern detected in logs",
    time: "15 minutes ago",
    user: "Security Monitor",
  },
  {
    id: 3,
    type: "Export",
    status: "completed",
    message: "Audit logs exported to CSV format",
    time: "1 hour ago",
    user: "Admin User",
  },
  {
    id: 4,
    type: "Review",
    status: "pending",
    message: "Quarterly report pending stakeholder review",
    time: "2 hours ago",
    user: "Review Team",
  },
]

const statusColors = {
  completed: "bg-green-500",
  flagged: "bg-red-500",
  pending: "bg-yellow-500",
}

export function ReportsLogs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentLogs.map((log) => (
            <div
              key={log.id}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      statusColors[log.status as keyof typeof statusColors]
                    }`}
                  />
                  <p className="text-sm font-medium">{log.type}</p>
                  <Badge variant="secondary">
                    {log.user}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {log.message}
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
  )
}