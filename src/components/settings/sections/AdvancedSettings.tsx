import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AdvancedSettings() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Developer Options</CardTitle>
          <CardDescription>Configure advanced developer settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="debug">Debug Mode</Label>
            <Switch id="debug" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="verbose">Verbose Logging</Label>
            <Switch id="verbose" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="experimental">Experimental Features</Label>
            <Switch id="experimental" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>System Configuration</CardTitle>
          <CardDescription>Configure advanced system settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Log Level</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="error">Error Only</SelectItem>
                <SelectItem value="warn">Warning and Error</SelectItem>
                <SelectItem value="info">Info and Above</SelectItem>
                <SelectItem value="debug">Debug and Above</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}