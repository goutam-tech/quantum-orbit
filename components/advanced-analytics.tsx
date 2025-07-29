"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Monitor, Users, TrendingUp, Eye, AlertTriangle, CheckCircle, BarChart3, PieChartIcon } from "lucide-react"

export function AdvancedAnalytics() {
  const [selectedMetric, setSelectedMetric] = useState("performance")
  const [timeRange, setTimeRange] = useState("24h")

  // Performance metrics data
  const performanceData = [
    { time: "00:00", cpu: 45, memory: 62, network: 78, storage: 34 },
    { time: "04:00", cpu: 52, memory: 58, network: 82, storage: 36 },
    { time: "08:00", cpu: 68, memory: 71, network: 85, storage: 42 },
    { time: "12:00", cpu: 75, memory: 79, network: 88, storage: 48 },
    { time: "16:00", cpu: 82, memory: 85, network: 92, storage: 52 },
    { time: "20:00", cpu: 71, memory: 76, network: 86, storage: 45 },
  ]

  // Mission success metrics
  const missionMetrics = [
    { mission: "QS-001", success: 94, efficiency: 87, cost: 2.1 },
    { mission: "QS-002", success: 78, efficiency: 82, cost: 1.8 },
    { mission: "QS-003", success: 100, efficiency: 95, cost: 3.2 },
    { mission: "QS-004", success: 89, efficiency: 91, cost: 2.7 },
  ]

  // Anomaly detection data
  const anomalyData = [
    { time: "00:00", normal: 95, anomalies: 5 },
    { time: "04:00", normal: 92, anomalies: 8 },
    { time: "08:00", normal: 88, anomalies: 12 },
    { time: "12:00", normal: 94, anomalies: 6 },
    { time: "16:00", normal: 91, anomalies: 9 },
    { time: "20:00", normal: 96, anomalies: 4 },
  ]

  // Resource utilization pie chart data
  const resourceData = [
    { name: "Computing", value: 35, color: "#3b82f6" },
    { name: "Storage", value: 25, color: "#10b981" },
    { name: "Network", value: 20, color: "#f59e0b" },
    { name: "Power", value: 15, color: "#ef4444" },
    { name: "Cooling", value: 5, color: "#8b5cf6" },
  ]

  const digitalTwins = [
    {
      id: "DT-001",
      name: "ISS Digital Twin",
      status: "Active",
      accuracy: 98.7,
      lastUpdate: "2 minutes ago",
      components: 1247,
      simulations: 156,
    },
    {
      id: "DT-002",
      name: "Mars Rover Twin",
      status: "Syncing",
      accuracy: 94.2,
      lastUpdate: "8 minutes ago",
      components: 892,
      simulations: 89,
    },
    {
      id: "DT-003",
      name: "Satellite Constellation",
      status: "Active",
      accuracy: 96.5,
      lastUpdate: "1 minute ago",
      components: 2341,
      simulations: 234,
    },
  ]

  const collaborationMetrics = {
    activeUsers: 47,
    sessionsToday: 156,
    avgSessionTime: "2h 34m",
    peakConcurrency: 23,
    dataShared: "2.4 TB",
    decisionsTracked: 89,
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="bg-black/40 backdrop-blur-md border border-blue-500/20">
          <TabsTrigger value="performance" className="data-[state=active]:bg-blue-500/20">
            <TrendingUp className="w-4 h-4 mr-2" />
            Performance
          </TabsTrigger>
          <TabsTrigger value="digital-twins" className="data-[state=active]:bg-blue-500/20">
            <Monitor className="w-4 h-4 mr-2" />
            Digital Twins
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-500/20">
            <BarChart3 className="w-4 h-4 mr-2" />
            Data Analytics
          </TabsTrigger>
          <TabsTrigger value="collaboration" className="data-[state=active]:bg-blue-500/20">
            <Users className="w-4 h-4 mr-2" />
            Collaboration
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* System Performance Chart */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                  System Performance Metrics
                </CardTitle>
                <CardDescription className="text-blue-300">Real-time system resource utilization</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    cpu: { label: "CPU", color: "hsl(var(--chart-1))" },
                    memory: { label: "Memory", color: "hsl(var(--chart-2))" },
                    network: { label: "Network", color: "hsl(var(--chart-3))" },
                    storage: { label: "Storage", color: "hsl(var(--chart-4))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="time" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="cpu" stroke="var(--color-cpu)" strokeWidth={2} />
                      <Line type="monotone" dataKey="memory" stroke="var(--color-memory)" strokeWidth={2} />
                      <Line type="monotone" dataKey="network" stroke="var(--color-network)" strokeWidth={2} />
                      <Line type="monotone" dataKey="storage" stroke="var(--color-storage)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Mission Success Metrics */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  Mission Success Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    success: { label: "Success Rate", color: "hsl(var(--chart-1))" },
                    efficiency: { label: "Efficiency", color: "hsl(var(--chart-2))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={missionMetrics}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="mission" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="success" fill="var(--color-success)" />
                      <Bar dataKey="efficiency" fill="var(--color-efficiency)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Resource Utilization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <PieChartIcon className="w-5 h-5 mr-2 text-purple-400" />
                  Resource Utilization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    computing: { label: "Computing", color: "#3b82f6" },
                    storage: { label: "Storage", color: "#10b981" },
                    network: { label: "Network", color: "#f59e0b" },
                    power: { label: "Power", color: "#ef4444" },
                    cooling: { label: "Cooling", color: "#8b5cf6" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={resourceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {resourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Anomaly Detection */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                  Anomaly Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    normal: { label: "Normal", color: "hsl(var(--chart-1))" },
                    anomalies: { label: "Anomalies", color: "hsl(var(--chart-5))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={anomalyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="time" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="normal" fill="var(--color-normal)" />
                      <Bar dataKey="anomalies" fill="var(--color-anomalies)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="digital-twins" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {digitalTwins.map((twin) => (
              <Card key={twin.id} className="bg-black/40 backdrop-blur-md border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Monitor className="w-5 h-5 mr-2 text-blue-400" />
                    {twin.name}
                  </CardTitle>
                  <CardDescription className="text-blue-300">{twin.id}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300">Status:</span>
                    <Badge
                      className={
                        twin.status === "Active"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : twin.status === "Syncing"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            : "bg-red-500/20 text-red-400 border-red-500/30"
                      }
                    >
                      {twin.status}
                    </Badge>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Accuracy:</span>
                      <span className="text-white">{twin.accuracy}%</span>
                    </div>
                    <Progress value={twin.accuracy} className="h-2" />
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-300">Components:</span>
                      <span className="text-white">{twin.components.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Simulations:</span>
                      <span className="text-white">{twin.simulations}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Last Update:</span>
                      <span className="text-white">{twin.lastUpdate}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-blue-500/20">
                    <Button size="sm" className="w-full bg-blue-600/20 border-blue-500/30 text-blue-400">
                      <Eye className="w-4 h-4 mr-2" />
                      View Twin
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Digital Twin Controls */}
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white">Digital Twin Management</CardTitle>
              <CardDescription className="text-blue-300">Control and monitor digital twin simulations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Button className="bg-green-600/20 border-green-500/30 text-green-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Sync All Twins
                </Button>
                <Button className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                  <Monitor className="w-4 h-4 mr-2" />
                  Run Simulation
                </Button>
                <Button className="bg-yellow-600/20 border-yellow-500/30 text-yellow-400">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Validate Models
                </Button>
                <Button className="bg-purple-600/20 border-purple-500/30 text-purple-400">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-400" />
                Advanced Data Analytics
              </CardTitle>
              <CardDescription className="text-blue-300">Time series analysis and pattern recognition</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <h3 className="text-white font-semibold mb-2">Pattern Recognition</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-300">Patterns Found:</span>
                      <span className="text-white">247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Accuracy:</span>
                      <span className="text-white">94.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Confidence:</span>
                      <span className="text-white">89.2%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <h3 className="text-white font-semibold mb-2">Anomaly Detection</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-300">Anomalies:</span>
                      <span className="text-white">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">False Positives:</span>
                      <span className="text-white">2.1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Detection Rate:</span>
                      <span className="text-white">97.8%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h3 className="text-white font-semibold mb-2">Predictive Models</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-300">Active Models:</span>
                      <span className="text-white">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Avg Accuracy:</span>
                      <span className="text-white">92.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Predictions:</span>
                      <span className="text-white">1,247</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <h3 className="text-white font-semibold mb-2">Data Processing</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-300">Data Points:</span>
                      <span className="text-white">2.4M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Processing Rate:</span>
                      <span className="text-white">15.2k/s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Latency:</span>
                      <span className="text-white">12ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collaboration" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-400" />
                  Collaboration Metrics
                </CardTitle>
                <CardDescription className="text-blue-300">
                  Real-time collaboration and communication stats
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-2xl font-bold text-white">{collaborationMetrics.activeUsers}</div>
                    <div className="text-blue-300 text-sm">Active Users</div>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="text-2xl font-bold text-white">{collaborationMetrics.sessionsToday}</div>
                    <div className="text-blue-300 text-sm">Sessions Today</div>
                  </div>
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-2xl font-bold text-white">{collaborationMetrics.avgSessionTime}</div>
                    <div className="text-blue-300 text-sm">Avg Session Time</div>
                  </div>
                  <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <div className="text-2xl font-bold text-white">{collaborationMetrics.peakConcurrency}</div>
                    <div className="text-blue-300 text-sm">Peak Concurrency</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-300">Data Shared:</span>
                    <span className="text-white">{collaborationMetrics.dataShared}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Decisions Tracked:</span>
                    <span className="text-white">{collaborationMetrics.decisionsTracked}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white">Active Collaboration Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">Mars Mission Planning</h4>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                    </div>
                    <div className="text-sm text-blue-300">
                      <span>12 participants • Started 2h ago</span>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">Quantum Algorithm Review</h4>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">In Review</Badge>
                    </div>
                    <div className="text-sm text-blue-300">
                      <span>8 participants • Started 45m ago</span>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">Emergency Response Drill</h4>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Critical</Badge>
                    </div>
                    <div className="text-sm text-blue-300">
                      <span>23 participants • Started 15m ago</span>
                    </div>
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
