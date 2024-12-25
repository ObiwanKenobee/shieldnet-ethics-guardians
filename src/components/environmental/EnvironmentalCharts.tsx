import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

const emissionsData = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 95 },
  { name: "Mar", value: 90 },
  { name: "Apr", value: 85 },
  { name: "May", value: 80 },
  { name: "Jun", value: 75 },
]

const energyData = [
  { name: "Solar", value: 45 },
  { name: "Wind", value: 30 },
  { name: "Hydro", value: 15 },
  { name: "Other", value: 10 },
]

const waterData = [
  { name: "Week 1", value: 120 },
  { name: "Week 2", value: 110 },
  { name: "Week 3", value: 105 },
  { name: "Week 4", value: 95 },
]

const COLORS = ["#22c55e", "#3b82f6", "#eab308", "#ef4444"]

export function EnvironmentalCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Carbon Emissions</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ line: { color: "#22c55e" } }}>
            <LineChart data={emissionsData}>
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
          <CardTitle>Energy Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ pie: { color: "#3b82f6" } }}>
            <PieChart>
              <Pie
                data={energyData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {energyData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
          <div className="mt-4 flex justify-center gap-4">
            {energyData.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-sm text-muted-foreground">
                  {entry.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Water Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ area: { color: "#3b82f6" } }}>
            <AreaChart data={waterData}>
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