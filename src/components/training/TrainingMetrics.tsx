import { Card } from "@/components/ui/card"
import { Server, Database, Zap, Shield, Leaf } from "lucide-react"

export function TrainingMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <Card className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Server className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium">Active Sandboxes</span>
          </div>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">+2 from last hour</p>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Database className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">Data Integrity Score</span>
          </div>
          <div className="text-2xl font-bold">98.5%</div>
          <p className="text-xs text-muted-foreground">+0.5% from last check</p>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium">Training Efficiency</span>
          </div>
          <div className="text-2xl font-bold">94.2%</div>
          <p className="text-xs text-muted-foreground">-1.8% from target</p>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-red-600" />
            <span className="text-sm font-medium">Security Events</span>
          </div>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-muted-foreground">All low severity</p>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Leaf className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">Energy Usage</span>
          </div>
          <div className="text-2xl font-bold">82kW</div>
          <p className="text-xs text-muted-foreground">Within optimal range</p>
        </div>
      </Card>
    </div>
  )
}