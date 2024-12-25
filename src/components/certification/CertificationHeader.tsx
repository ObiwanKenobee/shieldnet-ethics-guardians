import { Bell, Upload, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CertificationHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Certification Progress</h2>
          <div className="h-2 w-24 bg-gray-200 rounded-full">
            <div className="h-full w-3/4 bg-green-500 rounded-full" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            View All
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Submit Docs
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}