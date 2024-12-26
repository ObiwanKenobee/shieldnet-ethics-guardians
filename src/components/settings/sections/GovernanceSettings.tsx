import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function GovernanceSettings() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Compliance Settings</CardTitle>
          <CardDescription>Configure compliance frameworks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Compliance Framework</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gdpr">GDPR</SelectItem>
                <SelectItem value="hipaa">HIPAA</SelectItem>
                <SelectItem value="sox">SOX</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Governance Controls</CardTitle>
          <CardDescription>Configure governance settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="audit">Audit Logging</Label>
            <Switch id="audit" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="reporting">Automated Reporting</Label>
            <Switch id="reporting" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="monitoring">Compliance Monitoring</Label>
            <Switch id="monitoring" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}