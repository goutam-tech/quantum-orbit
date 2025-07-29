"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, FileText, Users, Activity } from "lucide-react"

export function SecurityCompliance() {
  const [threatLevel, setThreatLevel] = useState("Medium")
  const [securityScore, setSecurityScore] = useState(87)
  const [activeThreats, setActiveThreats] = useState(3)
  const [complianceScore, setComplianceScore] = useState(94)

  const securityThreats = [
    {
      id: "THR-001",
      type: "Cyber Attack",
      severity: "High",
      source: "External",
      target: "Ground Station Network",
      status: "Active",
      detected: "2 hours ago",
      description: "Attempted unauthorized access to DSS-14 communication protocols",
      mitigation: "Firewall rules updated, access logs monitored",
    },
    {
      id: "THR-002",
      type: "Data Breach Attempt",
      severity: "Medium",
      source: "Internal",
      target: "Mission Database",
      status: "Contained",
      detected: "6 hours ago",
      description: "Suspicious database queries from internal network",
      mitigation: "User access revoked, investigation ongoing",
    },
    {
      id: "THR-003",
      type: "Signal Jamming",
      severity: "Critical",
      source: "Unknown",
      target: "Satellite Communications",
      status: "Investigating",
      detected: "30 minutes ago",
      description: "Interference detected on X-band frequencies",
      mitigation: "Frequency hopping activated, backup channels engaged",
    },
  ]

  const accessControls = [
    {
      user: "Dr. Sarah Chen",
      role: "Mission Commander",
      clearance: "Top Secret",
      lastAccess: "5 minutes ago",
      permissions: ["Mission Control", "Quantum Systems", "Ground Stations"],
      status: "Active",
      mfaEnabled: true,
    },
    {
      user: "Alex Rodriguez",
      role: "Systems Engineer",
      clearance: "Secret",
      lastAccess: "1 hour ago",
      permissions: ["Orbital Mechanics", "Telemetry", "Analytics"],
      status: "Active",
      mfaEnabled: true,
    },
    {
      user: "Dr. James Wilson",
      role: "Quantum Specialist",
      clearance: "Top Secret",
      lastAccess: "3 hours ago",
      permissions: ["Quantum Systems", "AI Operations", "Research Data"],
      status: "Inactive",
      mfaEnabled: false,
    },
  ]

  const complianceStandards = [
    {
      standard: "NIST Cybersecurity Framework",
      compliance: 96,
      lastAudit: "2024-01-15",
      status: "Compliant",
      findings: 2,
      category: "Cybersecurity",
    },
    {
      standard: "ISO 27001",
      compliance: 94,
      lastAudit: "2024-01-10",
      status: "Compliant",
      findings: 3,
      category: "Information Security",
    },
    {
      standard: "ITAR Compliance",
      compliance: 98,
      lastAudit: "2024-01-20",
      status: "Compliant",
      findings: 1,
      category: "Export Control",
    },
    {
      standard: "FedRAMP",
      compliance: 89,
      lastAudit: "2024-01-05",
      status: "Partial",
      findings: 5,
      category: "Cloud Security",
    },
  ]

  const auditLogs = [
    {
      timestamp: "2024-01-25 14:30:22",
      user: "Dr. Sarah Chen",
      action: "Mission Data Access",
      resource: "QS-001 Telemetry",
      result: "Success",
      ip: "192.168.1.45",
    },
    {
      timestamp: "2024-01-25 14:28:15",
      user: "Alex Rodriguez",
      action: "System Configuration",
      resource: "Ground Station DSS-14",
      result: "Success",
      ip: "192.168.1.67",
    },
    {
      timestamp: "2024-01-25 14:25:33",
      user: "Unknown",
      action: "Login Attempt",
      resource: "Mission Control Portal",
      result: "Failed",
      ip: "203.45.67.89",
    },
    {
      timestamp: "2024-01-25 14:22:11",
      user: "Dr. James Wilson",
      action: "Quantum Algorithm Access",
      resource: "Shor's Algorithm Module",
      result: "Success",
      ip: "192.168.1.23",
    },
  ]

  const encryptionStatus = {
    dataAtRest: { status: "AES-256", strength: 98 },
    dataInTransit: { status: "TLS 1.3", strength: 96 },
    quantumSafe: { status: "Post-Quantum", strength: 94 },
    keyManagement: { status: "HSM Protected", strength: 99 },
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="threats" className="space-y-6">
        <TabsList className="bg-black/40 backdrop-blur-md border border-blue-500/20">
          <TabsTrigger value="threats" className="data-[state=active]:bg-blue-500/20">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Threat Detection
          </TabsTrigger>
          <TabsTrigger value="access" className="data-[state=active]:bg-blue-500/20">
            <Users className="w-4 h-4 mr-2" />
            Access Control
          </TabsTrigger>
          <TabsTrigger value="compliance" className="data-[state=active]:bg-blue-500/20">
            <FileText className="w-4 h-4 mr-2" />
            Compliance
          </TabsTrigger>
          <TabsTrigger value="encryption" className="data-[state=active]:bg-blue-500/20">
            <Lock className="w-4 h-4 mr-2" />
            Encryption
          </TabsTrigger>
          <TabsTrigger value="audit" className="data-[state=active]:bg-blue-500/20">
            <Eye className="w-4 h-4 mr-2" />
            Audit Logs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="threats" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-200">Security Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">{securityScore}%</span>
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <Progress value={securityScore} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-200">Threat Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">{threatLevel}</span>
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                  {activeThreats} Active Threats
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-200">Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">{complianceScore}%</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <Progress value={complianceScore} className="h-2" />
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                Active Security Threats
              </CardTitle>
              <CardDescription className="text-blue-300">
                Real-time threat detection and response system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityThreats.map((threat) => (
                  <div
                    key={threat.id}
                    className={`p-4 rounded-lg border ${
                      threat.severity === "Critical"
                        ? "bg-red-500/10 border-red-500/20"
                        : threat.severity === "High"
                          ? "bg-yellow-500/10 border-yellow-500/20"
                          : "bg-blue-500/10 border-blue-500/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            threat.severity === "Critical"
                              ? "bg-red-500/20"
                              : threat.severity === "High"
                                ? "bg-yellow-500/20"
                                : "bg-blue-500/20"
                          }`}
                        >
                          <Shield className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{threat.type}</h3>
                          <p className="text-blue-300 text-sm">
                            {threat.id} • {threat.detected}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            threat.severity === "Critical"
                              ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : threat.severity === "High"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }
                        >
                          {threat.severity}
                        </Badge>
                        <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                          {threat.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-blue-300">Target:</span>
                        <span className="text-white ml-2">{threat.target}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Source:</span>
                        <span className="text-white ml-2">{threat.source}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Description:</span>
                        <p className="text-white mt-1">{threat.description}</p>
                      </div>
                      <div>
                        <span className="text-blue-300">Mitigation:</span>
                        <p className="text-green-400 mt-1">{threat.mitigation}</p>
                      </div>
                    </div>

                    <div className="mt-3 flex space-x-2">
                      <Button size="sm" className="bg-red-600/20 border-red-500/30 text-red-400">
                        Block Threat
                      </Button>
                      <Button size="sm" className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                        Investigate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="access" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-400" />
                Access Control Management
              </CardTitle>
              <CardDescription className="text-blue-300">
                User permissions, roles, and security clearances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accessControls.map((user, index) => (
                  <div key={index} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-full bg-green-500/20">
                          <Users className="w-4 h-4 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{user.user}</h3>
                          <p className="text-blue-300 text-sm">{user.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            user.clearance === "Top Secret"
                              ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          }
                        >
                          {user.clearance}
                        </Badge>
                        <Badge
                          className={
                            user.status === "Active"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                          }
                        >
                          {user.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-blue-300">Last Access:</span>
                        <span className="text-white ml-2">{user.lastAccess}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">MFA Status:</span>
                        <span className={`ml-2 ${user.mfaEnabled ? "text-green-400" : "text-red-400"}`}>
                          {user.mfaEnabled ? "Enabled" : "Disabled"}
                        </span>
                      </div>
                      <div>
                        <Button size="sm" className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                          Manage Access
                        </Button>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="text-blue-300 text-sm">Permissions:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {user.permissions.map((permission, idx) => (
                          <Badge key={idx} variant="outline" className="border-green-500/30 text-green-300 text-xs">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-400" />
                Compliance Standards
              </CardTitle>
              <CardDescription className="text-blue-300">Regulatory compliance and audit status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold">{standard.standard}</h3>
                      <Badge
                        className={
                          standard.status === "Compliant"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }
                      >
                        {standard.status}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-blue-300 text-sm">Compliance Score:</span>
                          <span className="text-white text-sm">{standard.compliance}%</span>
                        </div>
                        <Progress value={standard.compliance} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-blue-300">Last Audit:</span>
                          <span className="text-white ml-2">{standard.lastAudit}</span>
                        </div>
                        <div>
                          <span className="text-blue-300">Findings:</span>
                          <span className="text-white ml-2">{standard.findings}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-blue-300 text-sm">Category:</span>
                        <Badge variant="outline" className="border-blue-500/30 text-blue-300 ml-2">
                          {standard.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="encryption" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Lock className="w-5 h-5 mr-2 text-yellow-400" />
                Encryption & Key Management
              </CardTitle>
              <CardDescription className="text-blue-300">
                Cryptographic protection and quantum-safe security
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {Object.entries(encryptionStatus).map(([key, value]) => (
                    <div key={key} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</h3>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{value.status}</Badge>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-blue-300 text-sm">Security Strength:</span>
                          <span className="text-white text-sm">{value.strength}%</span>
                        </div>
                        <Progress value={value.strength} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <h3 className="text-white font-semibold mb-3">Quantum Key Distribution</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-300">Protocol:</span>
                        <span className="text-white">BB84</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Key Rate:</span>
                        <span className="text-white">1.2 Mbps</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Error Rate:</span>
                        <span className="text-white">2.1%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Security:</span>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Unconditional</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <h3 className="text-white font-semibold mb-3">Certificate Management</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-300">Active Certificates:</span>
                        <span className="text-white">247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Expiring Soon:</span>
                        <span className="text-yellow-400">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Revoked:</span>
                        <span className="text-red-400">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">CA Status:</span>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Healthy</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Eye className="w-5 h-5 mr-2 text-blue-400" />
                Security Audit Logs
              </CardTitle>
              <CardDescription className="text-blue-300">
                Comprehensive activity monitoring and forensic analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {auditLogs.map((log, index) => (
                  <div key={index} className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Activity className="w-4 h-4 text-blue-400" />
                        <span className="text-white font-medium">{log.action}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            log.result === "Success"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                          }
                        >
                          {log.result}
                        </Badge>
                        <span className="text-blue-300 text-xs">{log.timestamp}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-blue-300">User:</span>
                        <span className="text-white ml-2">{log.user}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Resource:</span>
                        <span className="text-white ml-2">{log.resource}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">IP Address:</span>
                        <span className="text-white ml-2">{log.ip}</span>
                      </div>
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
