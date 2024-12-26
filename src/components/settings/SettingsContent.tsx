import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GeneralSettings } from "./sections/GeneralSettings"
import { PerformanceSettings } from "./sections/PerformanceSettings"
import { SecuritySettings } from "./sections/SecuritySettings"
import { EthicsSettings } from "./sections/EthicsSettings"
import { TrainingSettings } from "./sections/TrainingSettings"
import { GovernanceSettings } from "./sections/GovernanceSettings"
import { NotificationSettings } from "./sections/NotificationSettings"
import { AuditSettings } from "./sections/AuditSettings"
import { AdvancedSettings } from "./sections/AdvancedSettings"

export function SettingsContent() {
  return (
    <Tabs defaultValue="general" className="space-y-4">
      <TabsList className="grid grid-cols-3 lg:grid-cols-9">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="performance">Performance</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="ethics">Ethics</TabsTrigger>
        <TabsTrigger value="training">Training</TabsTrigger>
        <TabsTrigger value="governance">Governance</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="audit">Audit</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <GeneralSettings />
      </TabsContent>
      <TabsContent value="performance">
        <PerformanceSettings />
      </TabsContent>
      <TabsContent value="security">
        <SecuritySettings />
      </TabsContent>
      <TabsContent value="ethics">
        <EthicsSettings />
      </TabsContent>
      <TabsContent value="training">
        <TrainingSettings />
      </TabsContent>
      <TabsContent value="governance">
        <GovernanceSettings />
      </TabsContent>
      <TabsContent value="notifications">
        <NotificationSettings />
      </TabsContent>
      <TabsContent value="audit">
        <AuditSettings />
      </TabsContent>
      <TabsContent value="advanced">
        <AdvancedSettings />
      </TabsContent>
    </Tabs>
  )
}