import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Save, RotateCcw, Bell } from "lucide-react"

export function SettingsHeader() {
  const { toast } = useToast()

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully."
    })
  }

  const handleReset = () => {
    toast({
      title: "Settings reset",
      description: "All settings have been reset to default values."
    })
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">AGI Settings Dashboard</h2>
        <p className="text-muted-foreground">
          Tailor Your AGI Systems for Precision, Security, and Compliance
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save Settings
        </Button>
        <Button variant="outline" onClick={handleReset} className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Reset to Default
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}