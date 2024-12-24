import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

const threatData = [
  { name: "Jan", value: 12 },
  { name: "Feb", value: 8 },
  { name: "Mar", value: 15 },
  { name: "Apr", value: 10 },
  { name: "May", value: 5 },
  { name: "Jun", value: 7 },
]

const ethicsData = [
  { name: "Fairness", value: 85 },
  { name: "Transparency", value: 92 },
  { name: "Accountability", value: 88 },
  { name: "Privacy", value: 95 },
]

const energyData = [
  { name: "Week 1", value: 120 },
  { name: "Week 2", value: 110 },
  { name: "Week 3", value: 105 },
  { name: "Week 4", value: 95 },
]

export function DashboardCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Threat Detection</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ line: { color: "#ef4444" } }}>
            <LineChart data={threatData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--color-line)"
                strokeWidth={2}
              />
              <Tooltip content={<ChartTooltipContent />} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ethics Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ bar: { color: "#3b82f6" } }}>
            <BarChart data={ethicsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="value"
                fill="var(--color-bar)"
                radius={[4, 4, 0, 0]}
              />
              <Tooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Energy Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ area: { color: "#22c55e" } }}>
            <AreaChart data={energyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Area
                type="monotone"
                dataKey="value"
                stroke="var(--color-area)"
                fill="var(--color-area)"
                fillOpacity={0.2}
              />
              <Tooltip content={<ChartTooltipContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}