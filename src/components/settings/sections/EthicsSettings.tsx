import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function EthicsSettings() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Ethical Framework</CardTitle>
          <CardDescription>Configure AI ethical guidelines</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Framework Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="un">UN AI Principles</SelectItem>
                <SelectItem value="ieee">IEEE Ethics Guidelines</SelectItem>
                <SelectItem value="custom">Custom Framework</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bias Detection</CardTitle>
          <CardDescription>Configure bias detection settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="gender">Gender Bias Detection</Label>
            <Switch id="gender" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="racial">Racial Bias Detection</Label>
            <Switch id="racial" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="age">Age Bias Detection</Label>
            <Switch id="age" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}