"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Shield,
  Zap,
  Network,
  Key,
  AlertTriangle,
  CheckCircle,
  Atom,
  Radio,
  Lock,
  Globe,
  Satellite,
  Moon,
  Rocket,
} from "lucide-react"

export function QuantumCommunication() {
  const [selectedProtocol, setSelectedProtocol] = useState("bb84")
  const [networkStatus, setNetworkStatus] = useState("operational")
  const [entanglementFidelity, setEntanglementFidelity] = useState(98.7)

  // Quantum Key Distribution protocols
  const qkdProtocols = {
    bb84: {
      name: "BB84 Protocol",
      security: "Unconditional",
      keyRate: "1.2 Mbps",
      efficiency: 94.3,
      description: "Polarized photon-based quantum cryptography",
      status: "Active",
    },
    e91: {
      name: "E91 Protocol",
      security: "Entanglement-based",
      keyRate: "850 kbps",
      efficiency: 91.7,
      description: "Bell inequality violation detection",
      status: "Active",
    },
    sarg04: {
      name: "SARG04 Protocol",
      security: "Four-state",
      keyRate: "2.1 Mbps",
      efficiency: 96.1,
      description: "Enhanced security against PNS attacks",
      status: "Active",
    },
    cvqkd: {
      name: "CV-QKD Protocol",
      security: "Continuous Variable",
      keyRate: "3.4 Mbps",
      efficiency: 89.2,
      description: "Gaussian modulation quantum key distribution",
      status: "Testing",
    },
  }

  // Quantum network nodes
  const quantumNodes = [
    {
      id: "QN-001",
      name: "Earth Ground Station",
      location: "Kennedy Space Center",
      type: "Ground",
      status: "Online",
      connections: 4,
      entanglement: 97.8,
      keyRate: "2.1 Mbps",
      icon: Globe,
    },
    {
      id: "QN-002",
      name: "LEO Quantum Satellite",
      location: "Low Earth Orbit",
      type: "Satellite",
      status: "Online",
      connections: 6,
      entanglement: 94.2,
      keyRate: "1.8 Mbps",
      icon: Satellite,
    },
    {
      id: "QN-003",
      name: "Deep Space Relay",
      location: "L2 Lagrange Point",
      type: "Deep Space",
      status: "Online",
      connections: 3,
      entanglement: 89.5,
      keyRate: "650 kbps",
      icon: Rocket,
    },
    {
      id: "QN-004",
      name: "Lunar Quantum Hub",
      location: "Mare Tranquillitatis",
      type: "Lunar",
      status: "Syncing",
      connections: 2,
      entanglement: 85.3,
      keyRate: "420 kbps",
      icon: Moon,
    },
    {
      id: "QN-005",
      name: "Mars Quantum Outpost",
      location: "Olympia Planitia",
      type: "Planetary",
      status: "Limited",
      connections: 1,
      entanglement: 78.9,
      keyRate: "180 kbps",
      icon: Rocket,
    },
  ]

  // Quantum channel performance data
  const channelData = [
    { time: "00:00", fidelity: 98.2, keyRate: 2100, errors: 0.8 },
    { time: "04:00", fidelity: 97.8, keyRate: 2050, errors: 1.2 },
    { time: "08:00", fidelity: 98.5, keyRate: 2180, errors: 0.6 },
    { time: "12:00", fidelity: 97.1, keyRate: 1980, errors: 1.8 },
    { time: "16:00", fidelity: 98.9, keyRate: 2250, errors: 0.4 },
    { time: "20:00", fidelity: 98.3, keyRate: 2120, errors: 0.9 },
  ]

  // Active quantum channels
  const activeChannels = [
    {
      id: "QC-001",
      source: "Earth Ground Station",
      destination: "LEO Quantum Satellite",
      protocol: "BB84",
      bandwidth: "2.1 Mbps",
      latency: "0.003ms",
      security: "Quantum Safe",
      status: "Active",
    },
    {
      id: "QC-002",
      source: "LEO Quantum Satellite",
      destination: "Deep Space Relay",
      protocol: "E91",
      bandwidth: "1.8 Mbps",
      latency: "1.2s",
      security: "Entangled",
      status: "Active",
    },
    {
      id: "QC-003",
      source: "Deep Space Relay",
      destination: "Lunar Quantum Hub",
      protocol: "SARG04",
      bandwidth: "650 kbps",
      latency: "1.3s",
      security: "Four-State",
      status: "Syncing",
    },
  ]

  // Quantum threats and alerts
  const quantumThreats = [
    {
      type: "warning",
      threat: "Quantum Decoherence Detected",
      node: "QN-004",
      severity: "Medium",
      impact: "Key rate reduced by 15%",
      mitigation: "Automatic error correction active",
      timestamp: "2 minutes ago",
    },
    {
      type: "info",
      threat: "Entanglement Purification",
      node: "QN-002",
      severity: "Low",
      impact: "Temporary fidelity improvement",
      mitigation: "Bell state measurement optimized",
      timestamp: "8 minutes ago",
    },
    {
      type: "critical",
      threat: "Eavesdropping Attempt",
      node: "QN-001",
      severity: "High",
      impact: "Channel automatically secured",
      mitigation: "Emergency protocol activated",
      timestamp: "15 minutes ago",
    },
  ]

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setEntanglementFidelity((prev) => prev + (Math.random() - 0.5) * 2)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <Tabs defaultValue="qkd" className="space-y-6">
        <TabsList className="bg-black/40 backdrop-blur-md border border-blue-500/20">
          <TabsTrigger value="qkd" className="data-[state=active]:bg-blue-500/20">
            <Key className="w-4 h-4 mr-2" />
            Quantum Key Distribution
          </TabsTrigger>
          <TabsTrigger value="network" className="data-[state=active]:bg-blue-500/20">
            <Network className="w-4 h-4 mr-2" />
            Quantum Network
          </TabsTrigger>
          <TabsTrigger value="entanglement" className="data-[state=active]:bg-blue-500/20">
            <Atom className="w-4 h-4 mr-2" />
            Entanglement
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-blue-500/20">
            <Shield className="w-4 h-4 mr-2" />
            Quantum Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="qkd" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* QKD Protocol Selection */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Key className="w-5 h-5 mr-2 text-blue-400" />
                  QKD Protocol Configuration
                </CardTitle>
                <CardDescription className="text-blue-300">
                  Select and configure quantum key distribution protocols
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm">Active Protocol:</label>
                  <Select value={selectedProtocol} onValueChange={setSelectedProtocol}>
                    <SelectTrigger className="bg-black/50 border-blue-500/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-blue-500/30">
                      {Object.entries(qkdProtocols).map(([key, protocol]) => (
                        <SelectItem key={key} value={key} className="text-white">
                          {protocol.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedProtocol && (
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h3 className="text-white font-semibold mb-3">
                      {qkdProtocols[selectedProtocol as keyof typeof qkdProtocols].name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-300">Security Level:</span>
                        <span className="text-white">
                          {qkdProtocols[selectedProtocol as keyof typeof qkdProtocols].security}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Key Rate:</span>
                        <span className="text-white">
                          {qkdProtocols[selectedProtocol as keyof typeof qkdProtocols].keyRate}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Efficiency:</span>
                        <span className="text-white">
                          {qkdProtocols[selectedProtocol as keyof typeof qkdProtocols].efficiency}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Status:</span>
                        <Badge
                          className={
                            qkdProtocols[selectedProtocol as keyof typeof qkdProtocols].status === "Active"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          }
                        >
                          {qkdProtocols[selectedProtocol as keyof typeof qkdProtocols].status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-blue-300 text-sm mt-3">
                      {qkdProtocols[selectedProtocol as keyof typeof qkdProtocols].description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quantum Channel Performance */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Radio className="w-5 h-5 mr-2 text-green-400" />
                  Channel Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    fidelity: { label: "Fidelity", color: "hsl(var(--chart-1))" },
                    keyRate: { label: "Key Rate", color: "hsl(var(--chart-2))" },
                    errors: { label: "Error Rate", color: "hsl(var(--chart-5))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={channelData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="time" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="fidelity" stroke="var(--color-fidelity)" strokeWidth={2} />
                      <Line type="monotone" dataKey="keyRate" stroke="var(--color-keyRate)" strokeWidth={2} />
                      <Line type="monotone" dataKey="errors" stroke="var(--color-errors)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Active Quantum Channels */}
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Network className="w-5 h-5 mr-2 text-purple-400" />
                Active Quantum Channels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeChannels.map((channel) => (
                  <div key={channel.id} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold">{channel.id}</h3>
                        <p className="text-blue-300 text-sm">
                          {channel.source} → {channel.destination}
                        </p>
                      </div>
                      <Badge
                        className={
                          channel.status === "Active"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }
                      >
                        {channel.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-blue-300">Protocol:</span>
                        <span className="text-white ml-2">{channel.protocol}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Bandwidth:</span>
                        <span className="text-white ml-2">{channel.bandwidth}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Latency:</span>
                        <span className="text-white ml-2">{channel.latency}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Security:</span>
                        <span className="text-green-400 ml-2">{channel.security}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="network" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {quantumNodes.map((node) => {
              const IconComponent = node.icon
              return (
                <Card key={node.id} className="bg-black/40 backdrop-blur-md border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <IconComponent className="w-5 h-5 mr-2 text-blue-400" />
                      {node.name}
                    </CardTitle>
                    <CardDescription className="text-blue-300">
                      {node.location} • {node.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300">Status:</span>
                      <Badge
                        className={
                          node.status === "Online"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : node.status === "Syncing"
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                        }
                      >
                        {node.status}
                      </Badge>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-blue-300">Entanglement:</span>
                        <span className="text-white">{node.entanglement}%</span>
                      </div>
                      <Progress value={node.entanglement} className="h-2" />
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-300">Connections:</span>
                        <span className="text-white">{node.connections}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Key Rate:</span>
                        <span className="text-white">{node.keyRate}</span>
                      </div>
                    </div>

                    <Button size="sm" className="w-full bg-blue-600/20 border-blue-500/30 text-blue-400">
                      <Network className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="entanglement" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Atom className="w-5 h-5 mr-2 text-purple-400" />
                  Entanglement Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-300">Global Entanglement Fidelity:</span>
                    <span className="text-white">{entanglementFidelity.toFixed(1)}%</span>
                  </div>
                  <Progress value={entanglementFidelity} className="h-3" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-lg font-bold text-white">247</div>
                    <div className="text-blue-300 text-sm">Bell Pairs</div>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="text-lg font-bold text-white">89</div>
                    <div className="text-blue-300 text-sm">GHZ States</div>
                  </div>
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-lg font-bold text-white">156</div>
                    <div className="text-blue-300 text-sm">Purified States</div>
                  </div>
                  <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <div className="text-lg font-bold text-white">12</div>
                    <div className="text-blue-300 text-sm">Decoherence Events</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-purple-600/20 border-purple-500/30 text-purple-400">
                    <Atom className="w-4 h-4 mr-2" />
                    Generate Bell States
                  </Button>
                  <Button className="w-full bg-blue-600/20 border-blue-500/30 text-blue-400">
                    <Zap className="w-4 h-4 mr-2" />
                    Purify Entanglement
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white">Quantum State Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h4 className="text-white font-semibold mb-2">Bell State |Φ+⟩</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-300">Fidelity:</span>
                        <span className="text-white">98.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Coherence Time:</span>
                        <span className="text-white">2.3 ms</span>
                      </div>
                      <Progress value={98.7} className="h-1" />
                    </div>
                  </div>

                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <h4 className="text-white font-semibold mb-2">GHZ State |000⟩+|111⟩</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-300">Fidelity:</span>
                        <span className="text-white">94.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Coherence Time:</span>
                        <span className="text-white">1.8 ms</span>
                      </div>
                      <Progress value={94.2} className="h-1" />
                    </div>
                  </div>

                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <h4 className="text-white font-semibold mb-2">Squeezed State</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-300">Squeezing:</span>
                        <span className="text-white">-12.4 dB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Anti-squeezing:</span>
                        <span className="text-white">+12.4 dB</span>
                      </div>
                      <Progress value={87.6} className="h-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-red-400" />
                Quantum Security Alerts
              </CardTitle>
              <CardDescription className="text-blue-300">
                Real-time quantum threat detection and mitigation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {quantumThreats.map((threat, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      threat.type === "critical"
                        ? "bg-red-500/10 border-red-500/20"
                        : threat.type === "warning"
                          ? "bg-yellow-500/10 border-yellow-500/20"
                          : "bg-blue-500/10 border-blue-500/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {threat.type === "critical" ? (
                          <AlertTriangle className="w-5 h-5 text-red-400" />
                        ) : threat.type === "warning" ? (
                          <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-blue-400" />
                        )}
                        <h3 className="text-white font-semibold">{threat.threat}</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                          {threat.node}
                        </Badge>
                        <Badge
                          className={
                            threat.severity === "High"
                              ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : threat.severity === "Medium"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }
                        >
                          {threat.severity}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-blue-300">Impact:</span>
                        <span className="text-white ml-2">{threat.impact}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Mitigation:</span>
                        <span className="text-green-400 ml-2">{threat.mitigation}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Time:</span>
                        <span className="text-white ml-2">{threat.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quantum Security Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-green-400" />
                  Security Protocols
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-green-600/20 border-green-500/30 text-green-400">
                    <Shield className="w-4 h-4 mr-2" />
                    Enable QKD
                  </Button>
                  <Button className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                    <Key className="w-4 h-4 mr-2" />
                    Rotate Keys
                  </Button>
                  <Button className="bg-purple-600/20 border-purple-500/30 text-purple-400">
                    <Atom className="w-4 h-4 mr-2" />
                    Purify States
                  </Button>
                  <Button className="bg-red-600/20 border-red-500/30 text-red-400">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Emergency Lock
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white">Security Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-300">Quantum Advantage:</span>
                    <span className="text-green-400">10^12 : 1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Key Security:</span>
                    <span className="text-green-400">Information Theoretic</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Eavesdropping Detection:</span>
                    <span className="text-green-400">100% Guaranteed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Quantum Error Rate:</span>
                    <span className="text-white">0.8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
