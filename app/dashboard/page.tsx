"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MissionControl } from "@/components/mission-control"
import { OrbitalMechanics } from "@/components/orbital-mechanics"
import { QuantumCalculator } from "@/components/quantum-calculator"
import { Orbital3DVisualization } from "@/components/orbital-3d-visualization"
import { MissionPlanning } from "@/components/mission-planning"
import { GroundStationNetwork } from "@/components/ground-station-network"
import { QuantumEnhancements } from "@/components/quantum-enhancements"
import { AIMissionOperations } from "@/components/ai-mission-operations"
import { AdvancedAnalytics } from "@/components/advanced-analytics"
import { EarthObservation } from "@/components/earth-observation"
import { SecurityCompliance } from "@/components/security-compliance"
import { IntegrationConnectivity } from "@/components/integration-connectivity"
import { SpecializedMissions } from "@/components/specialized-missions"
import { QuantumCommunication } from "@/components/quantum-communication"
import { PredictiveAI } from "@/components/predictive-ai"
import {
  Rocket,
  Calculator,
  Globe,
  Target,
  Radio,
  Atom,
  Brain,
  BarChart3,
  Satellite,
  Shield,
  Network,
  Zap,
  Key,
  TrendingUp,
} from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("mission-control")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🚀 Aerospace Quantum Mission Control Dashboard</h1>
          <p className="text-blue-300">
            Advanced space operations with quantum computing, AI predictions, and ultra-secure communications
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-black/40 backdrop-blur-md border border-blue-500/20 p-1 grid grid-cols-8 lg:grid-cols-15 gap-1">
            <TabsTrigger
              value="mission-control"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Rocket className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Mission Control</span>
            </TabsTrigger>
            <TabsTrigger
              value="orbital-mechanics"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Orbital</span>
            </TabsTrigger>
            <TabsTrigger
              value="quantum-calculator"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Calculator className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Quantum Calc</span>
            </TabsTrigger>
            <TabsTrigger
              value="3d-visualization"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">3D View</span>
            </TabsTrigger>
            <TabsTrigger
              value="mission-planning"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Target className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Planning</span>
            </TabsTrigger>
            <TabsTrigger
              value="ground-stations"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Radio className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Ground Net</span>
            </TabsTrigger>
            <TabsTrigger
              value="quantum-enhancements"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Atom className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Quantum</span>
            </TabsTrigger>
            <TabsTrigger
              value="ai-operations"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Brain className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">AI Ops</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1">
              <BarChart3 className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger
              value="earth-observation"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Satellite className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Earth Obs</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1">
              <Shield className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger
              value="integration"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Network className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Integration</span>
            </TabsTrigger>
            <TabsTrigger
              value="specialized"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Zap className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Specialized</span>
            </TabsTrigger>
            <TabsTrigger
              value="quantum-comm"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <Key className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Quantum Comm</span>
            </TabsTrigger>
            <TabsTrigger
              value="predictive-ai"
              className="data-[state=active]:bg-blue-500/20 text-white text-xs px-2 py-1"
            >
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Predictive AI</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mission-control">
            <MissionControl />
          </TabsContent>

          <TabsContent value="orbital-mechanics">
            <OrbitalMechanics />
          </TabsContent>

          <TabsContent value="quantum-calculator">
            <QuantumCalculator />
          </TabsContent>

          <TabsContent value="3d-visualization">
            <Orbital3DVisualization />
          </TabsContent>

          <TabsContent value="mission-planning">
            <MissionPlanning />
          </TabsContent>

          <TabsContent value="ground-stations">
            <GroundStationNetwork />
          </TabsContent>

          <TabsContent value="quantum-enhancements">
            <QuantumEnhancements />
          </TabsContent>

          <TabsContent value="ai-operations">
            <AIMissionOperations />
          </TabsContent>

          <TabsContent value="analytics">
            <AdvancedAnalytics />
          </TabsContent>

          <TabsContent value="earth-observation">
            <EarthObservation />
          </TabsContent>

          <TabsContent value="security">
            <SecurityCompliance />
          </TabsContent>

          <TabsContent value="integration">
            <IntegrationConnectivity />
          </TabsContent>

          <TabsContent value="specialized">
            <SpecializedMissions />
          </TabsContent>

          <TabsContent value="quantum-comm">
            <QuantumCommunication />
          </TabsContent>

          <TabsContent value="predictive-ai">
            <PredictiveAI />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
