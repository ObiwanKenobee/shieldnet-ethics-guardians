import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const logs = [
  {
    id: 1,
    type: "success",
    message: "Solar panel efficiency increased by 5%",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "warning",
    message: "Water usage spike detected in Sector B",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    type: "info",
    message: "New recycling program implemented",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    type: "success",
    message: "Carbon emissions reduced by 10%",
    timestamp: "2 days ago",
  },
]

export function EnvironmentalLogs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Environmental Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {logs.map((log) => (
              <div
                key={log.id}
                className="flex items-center space-x-4 rounded-lg border p-4"
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    log.type === "success"
                      ? "bg-green-500"
                      : log.type === "warning"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {log.message}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {log.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}