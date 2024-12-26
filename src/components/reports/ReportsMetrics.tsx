import { Card } from "@/components/ui/card"
import { FileText, Flag, Clock, BarChart, Download } from "lucide-react"

export function ReportsMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <Card className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <FileText className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium">Total Reports</span>
          </div>
          <div className="text-2xl font-bold">247</div>
          <p className="text-xs text-muted-foreground">+12 from last week</p>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Flag className="h-4 w-4 text-red-600" />
            <span className="text-sm font-medium">Flagged Logs</span>
          </div>
          <div className="text-2xl font-bold">23</div>
          <p className="text-xs text-muted-foreground">5 require attention</p>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium">Pending Reviews</span>
          </div>
          <div className="text-2xl font-bold">15</div>
          <p className="text-xs text-muted-foreground">3 high priority</p>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <BarChart className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">Most Accessed</span>
          </div>
          <div className="text-2xl font-bold">89</div>
          <p className="text-xs text-muted-foreground">Top 5 reports</p>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Download className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium">Export Status</span>
          </div>
          <div className="text-2xl font-bold">98%</div>
          <p className="text-xs text-muted-foreground">Success rate</p>
        </div>
      </Card>
    </div>
  )
}