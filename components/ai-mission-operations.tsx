"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, BotIcon as Robot, Wrench, Users, AlertTriangle, CheckCircle, TrendingUp, Zap } from "lucide-react"

export function AIMissionOperations() {
  const [autonomyLevel, setAutonomyLevel] = useState(75)
  const [predictiveAccuracy, setPredictiveAccuracy] = useState(94.2)
  const [systemHealth, setSystemHealth] = useState(98.5)

  const aiSystems = {
    missionPlanner: {
      name: "AI Mission Planner",
      status: "Active",
      confidence: 96.8,
      lastDecision: "Trajectory optimization for Mars mission",
      fuelSavings: "12.3%",
      timeOptimization: "8.7 hours",
    },
    autonomousControl: {
      name: "Autonomous Satellite Control",
      status: "Learning",
      confidence: 89.4,
      lastDecision: "Attitude adjustment for solar panel alignment",
      powerIncrease: "15.2%",
      responseTime: "0.3 seconds",
    },
    predictiveMaintenance: {
      name: "Predictive Maintenance AI",
      status: "Monitoring",
      confidence: 92.1,
      lastDecision: "Scheduled thruster maintenance in 72 hours",
      failurePrevention: "3 critical failures",
      costSavings: "$2.4M",
    },
    emergencyResponse: {
      name: "Emergency Response System",
      status: "Standby",
      confidence: 99.2,
      lastDecision: "No emergency protocols activated",
      responseTime: "< 1 second",
      successRate: "100%",
    },
  }

  const multiMissionCoordination = [
    {
      id: "COORD-001",
      name: "Mars Sample Return Coordination",
      missions: ["Perseverance", "Sample Return Orbiter", "Earth Return Vehicle"],
      status: "Active",
      progress: 67,
      nextMilestone: "Sample handoff in 45 days",
      aiOptimization: "Route optimization saved 23 days",
    },
    {
      id: "COORD-002",
      name: "Constellation Deployment",
      missions: ["Starlink Batch 1", "Starlink Batch 2", "Starlink Batch 3"],
      status: "Planning",
      progress: 23,
      nextMilestone: "Launch window analysis complete",
      aiOptimization: "Orbital slot optimization in progress",
    },
    {
      id: "COORD-003",
      name: "Deep Space Network Sync",
      missions: ["Voyager 1", "Voyager 2", "New Horizons"],
      status: "Monitoring",
      progress: 89,
      nextMilestone: "Communication window in 12 hours",
      aiOptimization: "Signal processing enhanced by 34%",
    },
  ]

  const predictiveAlerts = [
    {
      type: "warning",
      component: "Reaction Wheel Assembly",
      mission: "QS-001",
      probability: 78,
      timeframe: "14 days",
      recommendation: "Schedule maintenance during next service window",
      impact: "Medium",
    },
    {
      type: "critical",
      component: "Solar Panel Actuator",
      mission: "QS-004",
      probability: 92,
      timeframe: "3 days",
      recommendation: "Immediate inspection required",
      impact: "High",
    },
    {
      type: "info",
      component: "Communication Array",
      mission: "QS-002",
      probability: 45,
      timeframe: "30 days",
      recommendation: "Monitor performance trends",
      impact: "Low",
    },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="ai-planner" className="space-y-6">
        <TabsList className="bg-black/40 backdrop-blur-md border border-blue-500/20">
          <TabsTrigger value="ai-planner" className="data-[state=active]:bg-blue-500/20">
            <Brain className="w-4 h-4 mr-2" />
            AI Planner
          </TabsTrigger>
          <TabsTrigger value="autonomous" className="data-[state=active]:bg-blue-500/20">
            <Robot className="w-4 h-4 mr-2" />
            Autonomous Control
          </TabsTrigger>
          <TabsTrigger value="predictive" className="data-[state=active]:bg-blue-500/20">
            <Wrench className="w-4 h-4 mr-2" />
            Predictive Maintenance
          </TabsTrigger>
          <TabsTrigger value="coordination" className="data-[state=active]:bg-blue-500/20">
            <Users className="w-4 h-4 mr-2" />
            Multi-Mission
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ai-planner" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-400" />
                  AI Mission Planner
                </CardTitle>
                <CardDescription className="text-blue-300">
                  Machine learning for optimal mission planning
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Planning Confidence:</span>
                      <span className="text-white">{aiSystems.missionPlanner.confidence}%</span>
                    </div>
                    <Progress value={aiSystems.missionPlanner.confidence} className="h-2" />
                  </div>

                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h4 className="text-white font-semibold mb-2">Latest Optimization</h4>
                    <p className="text-blue-300 text-sm mb-2">{aiSystems.missionPlanner.lastDecision}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-blue-300">Fuel Savings:</span>
                        <span className="text-green-400 ml-2">{aiSystems.missionPlanner.fuelSavings}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Time Saved:</span>
                        <span className="text-green-400 ml-2">{aiSystems.missionPlanner.timeOptimization}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <Button size="sm" className="bg-green-600/20 border-green-500/30 text-green-400">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" className="bg-yellow-600/20 border-yellow-500/30 text-yellow-400">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Refine
                    </Button>
                    <Button size="sm" className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                      <Zap className="w-4 h-4 mr-1" />
                      Execute
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  AI Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Autonomy Level:</span>
                      <span className="text-white">{autonomyLevel}%</span>
                    </div>
                    <Progress value={autonomyLevel} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Predictive Accuracy:</span>
                      <span className="text-white">{predictiveAccuracy}%</span>
                    </div>
                    <Progress value={predictiveAccuracy} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">System Health:</span>
                      <span className="text-white">{systemHealth}%</span>
                    </div>
                    <Progress value={systemHealth} className="h-2" />
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-500/20">
                  <h4 className="text-white font-semibold mb-2">AI Learning Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm">Neural Network Training:</span>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Complete</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm">Model Validation:</span>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">In Progress</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm">Deployment:</span>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Pending</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="autonomous" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(aiSystems).map(([key, system]) => (
              <Card key={key} className="bg-black/40 backdrop-blur-md border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Robot className="w-5 h-5 mr-2 text-blue-400" />
                    {system.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300">Status:</span>
                    <Badge
                      className={
                        system.status === "Active"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : system.status === "Learning"
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                            : system.status === "Monitoring"
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                              : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                      }
                    >
                      {system.status}
                    </Badge>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Confidence:</span>
                      <span className="text-white">{system.confidence}%</span>
                    </div>
                    <Progress value={system.confidence} className="h-2" />
                  </div>

                  <div className="p-2 bg-blue-500/10 rounded border border-blue-500/20">
                    <p className="text-blue-300 text-sm mb-1">Latest Decision:</p>
                    <p className="text-white text-sm">{system.lastDecision}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {system.fuelSavings && (
                      <div>
                        <span className="text-blue-300">Fuel Savings:</span>
                        <span className="text-green-400 ml-2">{system.fuelSavings}</span>
                      </div>
                    )}
                    {system.powerIncrease && (
                      <div>
                        <span className="text-blue-300">Power Increase:</span>
                        <span className="text-green-400 ml-2">{system.powerIncrease}</span>
                      </div>
                    )}
                    {system.costSavings && (
                      <div>
                        <span className="text-blue-300">Cost Savings:</span>
                        <span className="text-green-400 ml-2">{system.costSavings}</span>
                      </div>
                    )}
                    {system.responseTime && (
                      <div>
                        <span className="text-blue-300">Response Time:</span>
                        <span className="text-white ml-2">{system.responseTime}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="predictive" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Wrench className="w-5 h-5 mr-2 text-orange-400" />
                Predictive Maintenance Alerts
              </CardTitle>
              <CardDescription className="text-blue-300">
                AI-powered failure prediction and maintenance scheduling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictiveAlerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      alert.type === "critical"
                        ? "bg-red-500/10 border-red-500/20"
                        : alert.type === "warning"
                          ? "bg-yellow-500/10 border-yellow-500/20"
                          : "bg-blue-500/10 border-blue-500/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {alert.type === "critical" ? (
                          <AlertTriangle className="w-5 h-5 text-red-400" />
                        ) : alert.type === "warning" ? (
                          <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-blue-400" />
                        )}
                        <h3 className="text-white font-semibold">{alert.component}</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                          {alert.mission}
                        </Badge>
                        <Badge
                          className={
                            alert.type === "critical"
                              ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : alert.type === "warning"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }
                        >
                          {alert.probability}% probability
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-blue-300">Timeframe:</span>
                        <span className="text-white ml-2">{alert.timeframe}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Impact:</span>
                        <span
                          className={`ml-2 ${
                            alert.impact === "High"
                              ? "text-red-400"
                              : alert.impact === "Medium"
                                ? "text-yellow-400"
                                : "text-green-400"
                          }`}
                        >
                          {alert.impact}
                        </span>
                      </div>
                      <div>
                        <Button size="sm" className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                          Schedule Maintenance
                        </Button>
                      </div>
                    </div>

                    <div className="mt-2 p-2 bg-black/30 rounded">
                      <p className="text-blue-300 text-sm">
                        <strong>Recommendation:</strong> {alert.recommendation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="coordination" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-400" />
                Multi-Mission Coordination
              </CardTitle>
              <CardDescription className="text-blue-300">
                Coordinated operations across multiple missions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {multiMissionCoordination.map((coord) => (
                  <div key={coord.id} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold">{coord.name}</h3>
                      <Badge
                        className={
                          coord.status === "Active"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : coord.status === "Planning"
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                              : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        }
                      >
                        {coord.status}
                      </Badge>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between mb-2">
                        <span className="text-blue-300">Progress:</span>
                        <span className="text-white">{coord.progress}%</span>
                      </div>
                      <Progress value={coord.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-blue-300">Missions:</span>
                        <div className="mt-1">
                          {coord.missions.map((mission, idx) => (
                            <Badge key={idx} variant="outline" className="border-blue-500/30 text-blue-300 mr-1 mb-1">
                              {mission}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-blue-300">Next Milestone:</span>
                        <p className="text-white mt-1">{coord.nextMilestone}</p>
                      </div>
                      <div>
                        <span className="text-blue-300">AI Optimization:</span>
                        <p className="text-green-400 mt-1">{coord.aiOptimization}</p>
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
