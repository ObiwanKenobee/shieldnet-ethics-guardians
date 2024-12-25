import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentDecisions = [
  {
    id: 1,
    type: "Resource Allocation",
    status: "approved",
    decision: "Fair distribution algorithm implemented",
    time: "2 minutes ago",
    reviewer: "Ethics Board",
  },
  {
    id: 2,
    type: "Data Privacy",
    status: "flagged",
    decision: "Personal data access request",
    time: "15 minutes ago",
    reviewer: "Privacy Team",
  },
  {
    id: 3,
    type: "Bias Detection",
    status: "approved",
    decision: "Model output validated for fairness",
    time: "1 hour ago",
    reviewer: "AI Safety Team",
  },
  {
    id: 4,
    type: "Stakeholder Impact",
    status: "under-review",
    decision: "Community impact assessment",
    time: "2 hours ago",
    reviewer: "Community Board",
  },
]

const statusColors = {
  approved: "bg-green-500",
  flagged: "bg-red-500",
  "under-review": "bg-yellow-500",
}

export function EthicsLogs() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Recent Decisions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDecisions.map((decision) => (
              <div
                key={decision.id}
                className="flex items-center justify-between space-x-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        statusColors[decision.status as keyof typeof statusColors]
                      }`}
                    />
                    <p className="text-sm font-medium">{decision.type}</p>
                    <Badge variant="outline" className="ml-2">
                      {decision.reviewer}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {decision.decision}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">
                  {decision.time}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}