import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TrainingSettings() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Training Environment</CardTitle>
          <CardDescription>Configure training environment settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Environment Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select environment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sandbox">Sandbox</SelectItem>
                <SelectItem value="staging">Staging</SelectItem>
                <SelectItem value="production">Production</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Integrity</CardTitle>
          <CardDescription>Configure data integrity checks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="validation">Data Validation</Label>
            <Switch id="validation" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="audit">Automated Audits</Label>
            <Switch id="audit" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="monitoring">Real-time Monitoring</Label>
            <Switch id="monitoring" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}