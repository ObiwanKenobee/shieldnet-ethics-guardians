import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export function PerformanceSettings() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Resource Allocation</CardTitle>
          <CardDescription>Configure system resource usage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>CPU Usage</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          <div className="space-y-2">
            <Label>Memory Usage</Label>
            <Slider defaultValue={[60]} max={100} step={1} />
          </div>
          <div className="space-y-2">
            <Label>GPU Allocation</Label>
            <Slider defaultValue={[70]} max={100} step={1} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Optimization Settings</CardTitle>
          <CardDescription>Configure performance optimization features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="caching">Enable Caching</Label>
            <Switch id="caching" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="compression">Data Compression</Label>
            <Switch id="compression" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="prefetch">Prefetch Resources</Label>
            <Switch id="prefetch" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}