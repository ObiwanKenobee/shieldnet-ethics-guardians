import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const logs = [
  {
    id: 1,
    type: "Intrusion Attempt",
    severity: "high",
    message: "Multiple failed authentication attempts detected",
    time: "2 minutes ago",
    location: "US-East",
  },
  {
    id: 2,
    type: "DDoS Attack",
    severity: "critical",
    message: "Unusual traffic pattern detected on main API endpoint",
    time: "15 minutes ago",
    location: "EU-West",
  },
  {
    id: 3,
    type: "Malware Detection",
    severity: "medium",
    message: "Suspicious file activity in training environment",
    time: "1 hour ago",
    location: "APAC",
  },
  {
    id: 4,
    type: "System Alert",
    severity: "low",
    message: "Routine security scan completed",
    time: "2 hours ago",
    location: "Global",
  },
]

const severityColors = {
  low: "bg-green-500",
  medium: "bg-yellow-500",
  high: "bg-red-500",
  critical: "bg-purple-500",
}

export function ThreatLogs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Threats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {logs.map((log) => (
            <div
              key={log.id}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      severityColors[log.severity as keyof typeof severityColors]
                    }`}
                  />
                  <p className="text-sm font-medium">{log.type}</p>
                  <Badge variant="outline" className="ml-2">
                    {log.location}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{log.message}</p>
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