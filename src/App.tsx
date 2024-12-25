import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Dashboard from "./pages/Dashboard"
import ThreatMonitoring from "./pages/ThreatMonitoring"
import EthicsGovernance from "./pages/EthicsGovernance"
import TrainingEnvironment from "./pages/TrainingEnvironment"
import EnvironmentalImpact from "./pages/EnvironmentalImpact"
import GlobalGovernance from "./pages/GlobalGovernance"
import CertificationProgress from "./pages/CertificationProgress"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/threat-monitoring" element={<ThreatMonitoring />} />
          <Route path="/ethics-governance" element={<EthicsGovernance />} />
          <Route path="/training-environment" element={<TrainingEnvironment />} />
          <Route path="/environmental-impact" element={<EnvironmentalImpact />} />
          <Route path="/global-governance" element={<GlobalGovernance />} />
          <Route path="/certification-progress" element={<CertificationProgress />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App