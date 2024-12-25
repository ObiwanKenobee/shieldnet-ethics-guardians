import { Card } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { time: "00:00", sandbox1: 65, sandbox2: 78, sandbox3: 82 },
  { time: "04:00", sandbox1: 72, sandbox2: 75, sandbox3: 85 },
  { time: "08:00", sandbox1: 85, sandbox2: 82, sandbox3: 88 },
  { time: "12:00", sandbox1: 78, sandbox2: 88, sandbox3: 90 },
  { time: "16:00", sandbox1: 82, sandbox2: 85, sandbox3: 87 },
  { time: "20:00", sandbox1: 88, sandbox2: 90, sandbox3: 92 },
]

const config = {
  sandbox1: {
    label: "Sandbox 1",
    color: "#3B82F6",
  },
  sandbox2: {
    label: "Sandbox 2",
    color: "#10B981",
  },
  sandbox3: {
    label: "Sandbox 3",
    color: "#6366F1",
  },
}

export function TrainingCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <div className="p-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Sandbox Performance</h3>
            <p className="text-sm text-muted-foreground">
              Real-time performance metrics for active training environments
            </p>
          </div>
          <div className="h-[300px] mt-4">
            <ChartContainer config={config}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <ChartTooltip />
                  <Line
                    type="monotone"
                    dataKey="sandbox1"
                    stroke={config.sandbox1.color}
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="sandbox2"
                    stroke={config.sandbox2.color}
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="sandbox3"
                    stroke={config.sandbox3.color}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </Card>
    </div>
  )
}