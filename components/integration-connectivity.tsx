"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link, Cloud, Smartphone, Webhook, Globe, Activity, CheckCircle, Server, Wifi, Zap } from "lucide-react"

export function IntegrationConnectivity() {
  const [apiHealth, setApiHealth] = useState(98.7)
  const [cloudStatus, setCloudStatus] = useState("Operational")
  const [activeConnections, setActiveConnections] = useState(247)
  const [dataSync, setDataSync] = useState(99.2)

  const apiEndpoints = [
    {
      name: "Mission Control API",
      endpoint: "/api/v1/missions",
      method: "GET/POST",
      status: "Active",
      responseTime: "45ms",
      uptime: "99.97%",
      requests: "2.4M",
      errors: "0.03%",
    },
    {
      name: "Telemetry Stream API",
      endpoint: "/api/v1/telemetry",
      method: "WebSocket",
      status: "Active",
      responseTime: "12ms",
      uptime: "99.89%",
      requests: "15.7M",
      errors: "0.11%",
    },
    {
      name: "Quantum Systems API",
      endpoint: "/api/v1/quantum",
      method: "GET/POST",
      status: "Active",
      responseTime: "78ms",
      uptime: "99.45%",
      requests: "892K",
      errors: "0.55%",
    },
    {
      name: "Ground Station API",
      endpoint: "/api/v1/ground-stations",
      method: "GET/POST/PUT",
      status: "Maintenance",
      responseTime: "∞",
      uptime: "0%",
      requests: "0",
      errors: "100%",
    },
    {
      name: "Analytics API",
      endpoint: "/api/v1/analytics",
      method: "GET",
      status: "Active",
      responseTime: "156ms",
      uptime: "98.23%",
      requests: "1.2M",
      errors: "1.77%",
    },
  ]

  const externalSystems = [
    {
      name: "NASA Deep Space Network",
      type: "Government",
      status: "Connected",
      dataFlow: "Bidirectional",
      protocol: "CCSDS",
      bandwidth: "10 Gbps",
      latency: "2.3s",
      uptime: "99.95%",
      lastSync: "2 minutes ago",
    },
    {
      name: "ESA Ground Stations",
      type: "International",
      status: "Connected",
      dataFlow: "Receive Only",
      protocol: "CCSDS/SLE",
      bandwidth: "5 Gbps",
      latency: "1.8s",
      uptime: "99.87%",
      lastSync: "5 minutes ago",
    },
    {
      name: "SpaceX Starlink",
      type: "Commercial",
      status: "Limited",
      dataFlow: "Bidirectional",
      protocol: "Custom",
      bandwidth: "2 Gbps",
      latency: "45ms",
      uptime: "97.23%",
      lastSync: "1 hour ago",
    },
    {
      name: "NOAA Weather Data",
      type: "Government",
      status: "Connected",
      dataFlow: "Receive Only",
      protocol: "HTTP/REST",
      bandwidth: "100 Mbps",
      latency: "120ms",
      uptime: "99.99%",
      lastSync: "30 seconds ago",
    },
    {
      name: "IBM Quantum Network",
      type: "Research",
      status: "Connected",
      dataFlow: "Bidirectional",
      protocol: "Qiskit",
      bandwidth: "1 Mbps",
      latency: "500ms",
      uptime: "98.45%",
      lastSync: "10 minutes ago",
    },
  ]

  const cloudServices = [
    {
      provider: "Amazon Web Services",
      services: ["EC2", "S3", "Lambda", "RDS", "EKS"],
      region: "us-east-1",
      status: "Active",
      cost: "$12,450/month",
      usage: 87,
      instances: 24,
      storage: "2.4 TB",
    },
    {
      provider: "Microsoft Azure",
      services: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database"],
      region: "East US",
      status: "Active",
      cost: "$8,920/month",
      usage: 72,
      instances: 18,
      storage: "1.8 TB",
    },
    {
      provider: "Google Cloud Platform",
      services: ["Compute Engine", "Cloud Storage", "BigQuery", "Kubernetes"],
      region: "us-central1",
      status: "Active",
      cost: "$6,780/month",
      usage: 65,
      instances: 15,
      storage: "1.2 TB",
    },
    {
      provider: "IBM Cloud",
      services: ["Quantum Computing", "Watson AI", "Cloud Foundry"],
      region: "us-south",
      status: "Limited",
      cost: "$3,240/month",
      usage: 34,
      instances: 8,
      storage: "500 GB",
    },
  ]

  const mobileApps = [
    {
      platform: "iOS",
      version: "2.4.1",
      users: "1,247",
      rating: 4.8,
      status: "Published",
      lastUpdate: "2024-01-20",
      features: ["Mission Monitoring", "Alerts", "Telemetry", "Offline Mode"],
    },
    {
      platform: "Android",
      version: "2.4.0",
      users: "2,156",
      rating: 4.6,
      status: "Published",
      lastUpdate: "2024-01-18",
      features: ["Mission Monitoring", "Alerts", "Telemetry", "AR View"],
    },
    {
      platform: "iPad",
      version: "1.8.2",
      users: "456",
      rating: 4.9,
      status: "Published",
      lastUpdate: "2024-01-15",
      features: ["Dashboard", "3D Visualization", "Multi-Mission"],
    },
  ]

  const webhooks = [
    {
      name: "Mission Status Updates",
      url: "https://alerts.aerospace.com/webhook/missions",
      events: ["mission.started", "mission.completed", "mission.failed"],
      status: "Active",
      lastTriggered: "5 minutes ago",
      successRate: "99.8%",
      retries: 3,
    },
    {
      name: "Telemetry Alerts",
      url: "https://monitoring.space.gov/webhook/telemetry",
      events: ["telemetry.anomaly", "telemetry.offline"],
      status: "Active",
      lastTriggered: "2 hours ago",
      successRate: "98.5%",
      retries: 5,
    },
    {
      name: "Security Notifications",
      url: "https://security.aerospace.com/webhook/alerts",
      events: ["security.breach", "security.threat"],
      status: "Active",
      lastTriggered: "Never",
      successRate: "100%",
      retries: 1,
    },
    {
      name: "System Health",
      url: "https://ops.aerospace.com/webhook/health",
      events: ["system.down", "system.degraded"],
      status: "Paused",
      lastTriggered: "1 day ago",
      successRate: "97.2%",
      retries: 3,
    },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="api" className="space-y-6">
        <TabsList className="bg-black/40 backdrop-blur-md border border-blue-500/20">
          <TabsTrigger value="api" className="data-[state=active]:bg-blue-500/20">
            <Link className="w-4 h-4 mr-2" />
            API Gateway
          </TabsTrigger>
          <TabsTrigger value="external" className="data-[state=active]:bg-blue-500/20">
            <Globe className="w-4 h-4 mr-2" />
            External Systems
          </TabsTrigger>
          <TabsTrigger value="cloud" className="data-[state=active]:bg-blue-500/20">
            <Cloud className="w-4 h-4 mr-2" />
            Cloud Services
          </TabsTrigger>
          <TabsTrigger value="mobile" className="data-[state=active]:bg-blue-500/20">
            <Smartphone className="w-4 h-4 mr-2" />
            Mobile Apps
          </TabsTrigger>
          <TabsTrigger value="webhooks" className="data-[state=active]:bg-blue-500/20">
            <Webhook className="w-4 h-4 mr-2" />
            Webhooks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="api" className="space-y-6">
          {/* API Health Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-200">API Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">{apiHealth}%</span>
                  <Activity className="w-5 h-5 text-green-400" />
                </div>
                <Progress value={apiHealth} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-200">Active Endpoints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">4/5</span>
                  <Server className="w-5 h-5 text-blue-400" />
                </div>
                <Progress value={80} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-200">Requests/Hour</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">847K</span>
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-xs text-blue-300">↑ 12% from last hour</div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-200">Error Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">0.24%</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <Progress value={0.24} className="h-2" />
              </CardContent>
            </Card>
          </div>

          {/* API Endpoints */}
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Link className="w-5 h-5 mr-2 text-blue-400" />
                API Endpoints Status
              </CardTitle>
              <CardDescription className="text-blue-300">
                Real-time monitoring of all API endpoints and services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiEndpoints.map((api, index) => (
                  <div key={index} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            api.status === "Active" ? "bg-green-500/20" : "bg-red-500/20"
                          }`}
                        >
                          <Server className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{api.name}</h3>
                          <p className="text-blue-300 text-sm">{api.endpoint}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                          {api.method}
                        </Badge>
                        <Badge
                          className={
                            api.status === "Active"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                          }
                        >
                          {api.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <span className="text-blue-300">Response Time:</span>
                        <span className="text-white ml-2">{api.responseTime}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Uptime:</span>
                        <span className="text-white ml-2">{api.uptime}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Requests:</span>
                        <span className="text-white ml-2">{api.requests}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Error Rate:</span>
                        <span className="text-white ml-2">{api.errors}</span>
                      </div>
                      <div>
                        <Button size="sm" className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                          Monitor
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="external" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Globe className="w-5 h-5 mr-2 text-green-400" />
                External System Integrations
              </CardTitle>
              <CardDescription className="text-blue-300">Connected external systems and data sources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {externalSystems.map((system, index) => (
                  <div key={index} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            system.status === "Connected"
                              ? "bg-green-500/20"
                              : system.status === "Limited"
                                ? "bg-yellow-500/20"
                                : "bg-red-500/20"
                          }`}
                        >
                          <Wifi className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{system.name}</h3>
                          <p className="text-blue-300 text-sm">
                            {system.type} • {system.lastSync}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                          {system.dataFlow}
                        </Badge>
                        <Badge
                          className={
                            system.status === "Connected"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : system.status === "Limited"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-red-500/20 text-red-400 border-red-500/30"
                          }
                        >
                          {system.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-blue-300">Protocol:</span>
                        <span className="text-white ml-2">{system.protocol}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Bandwidth:</span>
                        <span className="text-white ml-2">{system.bandwidth}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Latency:</span>
                        <span className="text-white ml-2">{system.latency}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Uptime:</span>
                        <span className="text-white ml-2">{system.uptime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cloud" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Cloud className="w-5 h-5 mr-2 text-blue-400" />
                Multi-Cloud Infrastructure
              </CardTitle>
              <CardDescription className="text-blue-300">
                Cloud service providers and resource utilization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {cloudServices.map((cloud, index) => (
                  <div key={index} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold">{cloud.provider}</h3>
                      <Badge
                        className={
                          cloud.status === "Active"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }
                      >
                        {cloud.status}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-blue-300 text-sm">Resource Usage:</span>
                          <span className="text-white text-sm">{cloud.usage}%</span>
                        </div>
                        <Progress value={cloud.usage} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-blue-300">Region:</span>
                          <span className="text-white ml-2">{cloud.region}</span>
                        </div>
                        <div>
                          <span className="text-blue-300">Cost:</span>
                          <span className="text-white ml-2">{cloud.cost}</span>
                        </div>
                        <div>
                          <span className="text-blue-300">Instances:</span>
                          <span className="text-white ml-2">{cloud.instances}</span>
                        </div>
                        <div>
                          <span className="text-blue-300">Storage:</span>
                          <span className="text-white ml-2">{cloud.storage}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-blue-300 text-sm">Services:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {cloud.services.map((service, idx) => (
                            <Badge key={idx} variant="outline" className="border-green-500/30 text-green-300 text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mobile" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Smartphone className="w-5 h-5 mr-2 text-purple-400" />
                Mobile Applications
              </CardTitle>
              <CardDescription className="text-blue-300">
                Field operations mobile apps and deployment status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {mobileApps.map((app, index) => (
                  <div key={index} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-full bg-purple-500/20">
                          <Smartphone className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{app.platform}</h3>
                          <p className="text-blue-300 text-sm">v{app.version}</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{app.status}</Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-blue-300">Users:</span>
                          <span className="text-white ml-2">{app.users}</span>
                        </div>
                        <div>
                          <span className="text-blue-300">Rating:</span>
                          <span className="text-white ml-2">⭐ {app.rating}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-blue-300">Last Update:</span>
                          <span className="text-white ml-2">{app.lastUpdate}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-blue-300 text-sm">Features:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {app.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="border-blue-500/30 text-blue-300 text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button size="sm" className="w-full bg-purple-600/20 border-purple-500/30 text-purple-400">
                        Deploy Update
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Webhook className="w-5 h-5 mr-2 text-yellow-400" />
                Webhook Integrations
              </CardTitle>
              <CardDescription className="text-blue-300">
                Real-time event notifications and automated workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {webhooks.map((webhook, index) => (
                  <div key={index} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            webhook.status === "Active" ? "bg-green-500/20" : "bg-gray-500/20"
                          }`}
                        >
                          <Webhook className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{webhook.name}</h3>
                          <p className="text-blue-300 text-sm">{webhook.url}</p>
                        </div>
                      </div>
                      <Badge
                        className={
                          webhook.status === "Active"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                        }
                      >
                        {webhook.status}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-blue-300">Last Triggered:</span>
                          <span className="text-white ml-2">{webhook.lastTriggered}</span>
                        </div>
                        <div>
                          <span className="text-blue-300">Success Rate:</span>
                          <span className="text-white ml-2">{webhook.successRate}</span>
                        </div>
                        <div>
                          <span className="text-blue-300">Max Retries:</span>
                          <span className="text-white ml-2">{webhook.retries}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-blue-300 text-sm">Events:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {webhook.events.map((event, idx) => (
                            <Badge key={idx} variant="outline" className="border-yellow-500/30 text-yellow-300 text-xs">
                              {event}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex space-x-2">
                      <Button size="sm" className="bg-green-600/20 border-green-500/30 text-green-400">
                        Test Webhook
                      </Button>
                      <Button size="sm" className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                        Configure
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
