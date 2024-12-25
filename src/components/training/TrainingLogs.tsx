import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Clock } from "lucide-react"

const logs = [
  {
    id: 1,
    message: "Sandbox #3 training completed successfully",
    timestamp: "2 minutes ago",
    type: "success",
  },
  {
    id: 2,
    message: "Data integrity check initiated for Sandbox #5",
    timestamp: "15 minutes ago",
    type: "pending",
  },
  {
    id: 3,
    message: "Low severity security event detected in Sandbox #2",
    timestamp: "1 hour ago",
    type: "warning",
  },
]

export function TrainingLogs() {
  return (
    <Card className="col-span-3">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {logs.map((log) => (
            <div key={log.id} className="flex items-center space-x-4">
              {log.type === "success" && (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              )}
              {log.type === "warning" && (
                <AlertCircle className="h-5 w-5 text-yellow-500" />
              )}
              {log.type === "pending" && (
                <Clock className="h-5 w-5 text-blue-500" />
              )}
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{log.message}</p>
                <p className="text-sm text-muted-foreground">{log.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}