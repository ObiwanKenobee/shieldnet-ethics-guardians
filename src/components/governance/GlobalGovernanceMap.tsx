import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function GlobalGovernanceMap() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Global Compliance Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] rounded-md border border-dashed flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
        </div>
      </CardContent>
    </Card>
  )
}