import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SecuritySettings() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Authentication</CardTitle>
          <CardDescription>Configure authentication methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="mfa">Multi-Factor Authentication</Label>
            <Switch id="mfa" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="biometric">Biometric Authentication</Label>
            <Switch id="biometric" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sso">Single Sign-On</Label>
            <Switch id="sso" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Protection</CardTitle>
          <CardDescription>Configure data security settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="encryption">End-to-End Encryption</Label>
            <Switch id="encryption" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="backup">Automated Backups</Label>
            <Switch id="backup" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="firewall">Advanced Firewall</Label>
            <Switch id="firewall" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}