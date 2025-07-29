"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Brain,
  TrendingUp,
  Target,
  Zap,
  AlertTriangle,
  CheckCircle,
  Settings,
  Lightbulb,
  BarChart3,
  Activity,
  Cpu,
  Database,
} from "lucide-react"

export function PredictiveAI() {
  const [selectedModel, setSelectedModel] = useState("mission-success")
  const [predictionAccuracy, setPredictionAccuracy] = useState(94.7)
  const [optimizationLevel, setOptimizationLevel] = useState(87.3)

  // AI Models for different predictions
  const aiModels = {
    "mission-success": {
      name: "Mission Success Predictor",
      accuracy: 94.7,
      confidence: 92.1,
      lastTrained: "2 hours ago",
      predictions: 1247,
      description: "Predicts mission success probability based on historical data and current conditions",
      status: "Active",
    },
    "resource-optimization": {
      name: "Resource Optimization Engine",
      accuracy: 91.3,
      confidence: 88.7,
      lastTrained: "4 hours ago",
      predictions: 892,
      description: "Optimizes fuel, power, and computational resource allocation",
      status: "Active",
    },
    "failure-prediction": {
      name: "Component Failure Predictor",
      accuracy: 96.2,
      confidence: 94.8,
      lastTrained: "1 hour ago",
      predictions: 567,
      description: "Predicts component failures before they occur",
      status: "Training",
    },
    "trajectory-optimizer": {
      name: "Trajectory Optimization AI",
      accuracy: 98.1,
      confidence: 96.4,
      lastTrained: "30 minutes ago",
      predictions: 2341,
      description: "Optimizes spacecraft trajectories for fuel efficiency and time",
      status: "Active",
    },
  }

  // Mission outcome predictions
  const missionPredictions = [
    {
      mission: "QS-001",
      name: "Mars Sample Return",
      successProbability: 87.3,
      riskFactors: ["Weather", "Technical"],
      optimizations: ["Fuel -12%", "Time -8 days"],
      confidence: 92.1,
      recommendation: "Proceed with launch window optimization",
      status: "Recommended",
    },
    {
      mission: "QS-002",
      name: "Europa Clipper",
      successProbability: 94.7,
      riskFactors: ["Radiation"],
      optimizations: ["Route +15% efficiency", "Power +23%"],
      confidence: 89.4,
      recommendation: "Execute with current parameters",
      status: "Approved",
    },
    {
      mission: "QS-003",
      name: "Lunar Gateway",
      successProbability: 76.2,
      riskFactors: ["Budget", "Timeline", "Technical"],
      optimizations: ["Cost -18%", "Schedule +45 days"],
      confidence: 85.7,
      recommendation: "Delay for additional optimization",
      status: "Under Review",
    },
    {
      mission: "QS-004",
      name: "Asteroid Mining",
      successProbability: 91.8,
      riskFactors: ["Navigation"],
      optimizations: ["Precision +34%", "Fuel -7%"],
      confidence: 93.2,
      recommendation: "Proceed with enhanced navigation",
      status: "Recommended",
    },
  ]

  // Performance optimization data
  const optimizationData = [
    { category: "Fuel Efficiency", current: 78, optimized: 91, improvement: 13 },
    { category: "Mission Duration", current: 82, optimized: 95, improvement: 13 },
    { category: "Success Rate", current: 85, optimized: 94, improvement: 9 },
    { category: "Cost Efficiency", current: 71, optimized: 88, improvement: 17 },
    { category: "Risk Mitigation", current: 79, optimized: 92, improvement: 13 },
    { category: "Resource Utilization", current: 73, optimized: 89, improvement: 16 },
  ]

  // AI learning progress
  const learningData = [
    { time: "00:00", accuracy: 89.2, confidence: 85.1, predictions: 1200 },
    { time: "04:00", accuracy: 90.1, confidence: 86.3, predictions: 1350 },
    { time: "08:00", accuracy: 91.7, confidence: 88.2, predictions: 1480 },
    { time: "12:00", accuracy: 93.2, confidence: 90.1, predictions: 1620 },
    { time: "16:00", accuracy: 94.1, confidence: 91.7, predictions: 1750 },
    { time: "20:00", accuracy: 94.7, confidence: 92.1, predictions: 1890 },
  ]

  // Risk assessment radar data
  const riskData = [
    { subject: "Technical", A: 85, B: 92, fullMark: 100 },
    { subject: "Weather", A: 78, B: 89, fullMark: 100 },
    { subject: "Budget", A: 92, B: 95, fullMark: 100 },
    { subject: "Timeline", A: 73, B: 87, fullMark: 100 },
    { subject: "Resources", A: 88, B: 94, fullMark: 100 },
    { subject: "Personnel", A: 95, B: 97, fullMark: 100 },
  ]

  // AI recommendations
  const aiRecommendations = [
    {
      type: "optimization",
      priority: "High",
      title: "Trajectory Optimization Opportunity",
      description: "AI detected 12% fuel savings possible for QS-001 with minor trajectory adjustment",
      impact: "Save $2.4M in fuel costs",
      confidence: 94.7,
      action: "Apply optimization",
      timeframe: "Next 6 hours",
    },
    {
      type: "warning",
      priority: "Medium",
      title: "Component Failure Risk",
      description: "Reaction wheel assembly showing 78% probability of failure in 14 days",
      impact: "Mission delay of 3-5 days",
      confidence: 89.2,
      action: "Schedule maintenance",
      timeframe: "Within 48 hours",
    },
    {
      type: "success",
      priority: "Low",
      title: "Mission Success Enhancement",
      description: "Weather patterns favorable for 15% success rate improvement",
      impact: "Increase success probability to 96.2%",
      confidence: 91.8,
      action: "Adjust launch window",
      timeframe: "Next 24 hours",
    },
  ]

  useEffect(() => {
    // Simulate real-time AI learning
    const interval = setInterval(() => {
      setPredictionAccuracy((prev) => Math.min(99.9, prev + Math.random() * 0.1))
      setOptimizationLevel((prev) => Math.min(99.9, prev + Math.random() * 0.2))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <Tabs defaultValue="predictions" className="space-y-6">
        <TabsList className="bg-black/40 backdrop-blur-md border border-blue-500/20">
          <TabsTrigger value="predictions" className="data-[state=active]:bg-blue-500/20">
            <Target className="w-4 h-4 mr-2" />
            Mission Predictions
          </TabsTrigger>
          <TabsTrigger value="optimization" className="data-[state=active]:bg-blue-500/20">
            <Zap className="w-4 h-4 mr-2" />
            AI Optimization
          </TabsTrigger>
          <TabsTrigger value="models" className="data-[state=active]:bg-blue-500/20">
            <Brain className="w-4 h-4 mr-2" />
            AI Models
          </TabsTrigger>
          <TabsTrigger value="recommendations" className="data-[state=active]:bg-blue-500/20">
            <Lightbulb className="w-4 h-4 mr-2" />
            AI Recommendations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="predictions" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mission Success Predictions */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-400" />
                  Mission Outcome Predictions
                </CardTitle>
                <CardDescription className="text-blue-300">AI-powered success probability analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {missionPredictions.map((prediction) => (
                    <div key={prediction.mission} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="text-white font-semibold">{prediction.name}</h3>
                          <p className="text-blue-300 text-sm">{prediction.mission}</p>
                        </div>
                        <Badge
                          className={
                            prediction.status === "Approved"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : prediction.status === "Recommended"
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          }
                        >
                          {prediction.status}
                        </Badge>
                      </div>

                      <div className="mb-3">
                        <div className="flex justify-between mb-2">
                          <span className="text-blue-300">Success Probability:</span>
                          <span className="text-white">{prediction.successProbability}%</span>
                        </div>
                        <Progress value={prediction.successProbability} className="h-2" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-blue-300">Risk Factors:</span>
                          <div className="mt-1">
                            {prediction.riskFactors.map((risk, idx) => (
                              <Badge key={idx} variant="outline" className="border-red-500/30 text-red-300 mr-1 mb-1">
                                {risk}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-blue-300">Optimizations:</span>
                          <div className="mt-1">
                            {prediction.optimizations.map((opt, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="border-green-500/30 text-green-300 mr-1 mb-1"
                              >
                                {opt}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 p-2 bg-black/30 rounded">
                        <p className="text-blue-300 text-sm">
                          <strong>AI Recommendation:</strong> {prediction.recommendation}
                        </p>
                        <div className="flex justify-between mt-2">
                          <span className="text-blue-300 text-sm">Confidence: {prediction.confidence}%</span>
                          <Button size="sm" className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                            Apply Optimization
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Learning Progress */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-400" />
                  AI Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    accuracy: { label: "Accuracy", color: "hsl(var(--chart-1))" },
                    confidence: { label: "Confidence", color: "hsl(var(--chart-2))" },
                    predictions: { label: "Predictions", color: "hsl(var(--chart-3))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={learningData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="time" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="accuracy" stroke="var(--color-accuracy)" strokeWidth={2} />
                      <Line type="monotone" dataKey="confidence" stroke="var(--color-confidence)" strokeWidth={2} />
                      <Line type="monotone" dataKey="predictions" stroke="var(--color-predictions)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>

                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-lg font-bold text-white">{predictionAccuracy.toFixed(1)}%</div>
                    <div className="text-blue-300 text-sm">Current Accuracy</div>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="text-lg font-bold text-white">1,890</div>
                    <div className="text-blue-300 text-sm">Predictions Made</div>
                  </div>
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-lg font-bold text-white">92.1%</div>
                    <div className="text-blue-300 text-sm">Confidence Level</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Assessment Radar */}
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-yellow-400" />
                Multi-Dimensional Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  A: { label: "Current Risk", color: "hsl(var(--chart-5))" },
                  B: { label: "Optimized Risk", color: "hsl(var(--chart-1))" },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={riskData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#9ca3af", fontSize: 12 }} />
                    <PolarRadiusAxis tick={{ fill: "#9ca3af", fontSize: 10 }} />
                    <Radar
                      name="Current Risk"
                      dataKey="A"
                      stroke="var(--color-A)"
                      fill="var(--color-A)"
                      fillOpacity={0.1}
                    />
                    <Radar
                      name="Optimized Risk"
                      dataKey="B"
                      stroke="var(--color-B)"
                      fill="var(--color-B)"
                      fillOpacity={0.1}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Optimization Performance */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  AI Optimization Results
                </CardTitle>
                <CardDescription className="text-blue-300">
                  Performance improvements across mission parameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    current: { label: "Current", color: "hsl(var(--chart-5))" },
                    optimized: { label: "AI Optimized", color: "hsl(var(--chart-1))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={optimizationData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="category" stroke="#9ca3af" angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="#9ca3af" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="current" fill="var(--color-current)" />
                      <Bar dataKey="optimized" fill="var(--color-optimized)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Optimization Controls */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-blue-400" />
                  Optimization Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-300">Optimization Level:</span>
                    <span className="text-white">{optimizationLevel.toFixed(1)}%</span>
                  </div>
                  <Progress value={optimizationLevel} className="h-3" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-green-600/20 border-green-500/30 text-green-400">
                    <Zap className="w-4 h-4 mr-2" />
                    Auto-Optimize
                  </Button>
                  <Button className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                    <Target className="w-4 h-4 mr-2" />
                    Manual Tune
                  </Button>
                  <Button className="bg-purple-600/20 border-purple-500/30 text-purple-400">
                    <Brain className="w-4 h-4 mr-2" />
                    Deep Learning
                  </Button>
                  <Button className="bg-yellow-600/20 border-yellow-500/30 text-yellow-400">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Analyze
                  </Button>
                </div>

                <div className="space-y-3 pt-4 border-t border-blue-500/20">
                  <h4 className="text-white font-semibold">Optimization Targets</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm">Fuel Efficiency:</span>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">+13%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm">Mission Duration:</span>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">-8 days</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm">Cost Reduction:</span>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">-$2.4M</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm">Success Rate:</span>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">+9%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="models" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Model Selection */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-400" />
                  AI Model Management
                </CardTitle>
                <CardDescription className="text-blue-300">Select and configure predictive AI models</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm">Active Model:</label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger className="bg-black/50 border-blue-500/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-blue-500/30">
                      {Object.entries(aiModels).map(([key, model]) => (
                        <SelectItem key={key} value={key} className="text-white">
                          {model.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedModel && (
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h3 className="text-white font-semibold mb-3">
                      {aiModels[selectedModel as keyof typeof aiModels].name}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-blue-300">Accuracy:</span>
                          <span className="text-white">
                            {aiModels[selectedModel as keyof typeof aiModels].accuracy}%
                          </span>
                        </div>
                        <Progress value={aiModels[selectedModel as keyof typeof aiModels].accuracy} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-blue-300">Confidence:</span>
                          <span className="text-white">
                            {aiModels[selectedModel as keyof typeof aiModels].confidence}%
                          </span>
                        </div>
                        <Progress value={aiModels[selectedModel as keyof typeof aiModels].confidence} className="h-2" />
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-blue-300">Last Trained:</span>
                          <span className="text-white">
                            {aiModels[selectedModel as keyof typeof aiModels].lastTrained}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-300">Predictions Made:</span>
                          <span className="text-white">
                            {aiModels[selectedModel as keyof typeof aiModels].predictions.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-300">Status:</span>
                          <Badge
                            className={
                              aiModels[selectedModel as keyof typeof aiModels].status === "Active"
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }
                          >
                            {aiModels[selectedModel as keyof typeof aiModels].status}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-blue-300 text-sm mt-3">
                        {aiModels[selectedModel as keyof typeof aiModels].description}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Model Performance */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-green-400" />
                  Model Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Cpu className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-300 text-sm">Processing Speed</span>
                    </div>
                    <div className="text-lg font-bold text-white">2.4k/sec</div>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Database className="w-4 h-4 text-green-400" />
                      <span className="text-blue-300 text-sm">Data Points</span>
                    </div>
                    <div className="text-lg font-bold text-white">15.7M</div>
                  </div>
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-4 h-4 text-purple-400" />
                      <span className="text-blue-300 text-sm">Neural Layers</span>
                    </div>
                    <div className="text-lg font-bold text-white">247</div>
                  </div>
                  <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-yellow-400" />
                      <span className="text-blue-300 text-sm">Improvement</span>
                    </div>
                    <div className="text-lg font-bold text-white">+12.3%</div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-blue-500/20">
                  <h4 className="text-white font-semibold">Model Training Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm">Training Progress:</span>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Complete</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm">Validation:</span>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">In Progress</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm">Deployment:</span>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Pending</Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button size="sm" className="bg-green-600/20 border-green-500/30 text-green-400">
                    <Brain className="w-4 h-4 mr-2" />
                    Retrain
                  </Button>
                  <Button size="sm" className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                    <Settings className="w-4 h-4 mr-2" />
                    Configure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All AI Models Overview */}
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white">AI Model Fleet Overview</CardTitle>
              <CardDescription className="text-blue-300">Performance summary of all active AI models</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(aiModels).map(([key, model]) => (
                  <div key={key} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold text-sm">{model.name}</h3>
                      <Badge
                        className={
                          model.status === "Active"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }
                      >
                        {model.status}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-300">Accuracy:</span>
                        <span className="text-white">{model.accuracy}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Confidence:</span>
                        <span className="text-white">{model.confidence}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Predictions:</span>
                        <span className="text-white">{model.predictions.toLocaleString()}</span>
                      </div>
                    </div>
                    <Progress value={model.accuracy} className="h-1 mt-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                AI-Generated Recommendations
              </CardTitle>
              <CardDescription className="text-blue-300">
                Intelligent suggestions for mission optimization and risk mitigation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiRecommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      rec.type === "optimization"
                        ? "bg-blue-500/10 border-blue-500/20"
                        : rec.type === "warning"
                          ? "bg-yellow-500/10 border-yellow-500/20"
                          : "bg-green-500/10 border-green-500/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {rec.type === "optimization" ? (
                          <Zap className="w-5 h-5 text-blue-400" />
                        ) : rec.type === "warning" ? (
                          <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        )}
                        <h3 className="text-white font-semibold">{rec.title}</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            rec.priority === "High"
                              ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : rec.priority === "Medium"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }
                        >
                          {rec.priority} Priority
                        </Badge>
                        <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                          {rec.confidence}% Confidence
                        </Badge>
                      </div>
                    </div>

                    <p className="text-blue-300 mb-3">{rec.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-blue-300">Expected Impact:</span>
                        <span className="text-green-400 ml-2">{rec.impact}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Timeframe:</span>
                        <span className="text-white ml-2">{rec.timeframe}</span>
                      </div>
                      <div>
                        <Button size="sm" className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                          {rec.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Decision Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-400" />
                  AI Decision Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h4 className="text-white font-semibold mb-2">Current Decision Context</h4>
                  <p className="text-blue-300 text-sm mb-3">
                    Mars Sample Return mission requires trajectory optimization decision within 6 hours
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-300">AI Recommendation:</span>
                      <span className="text-green-400">Optimize trajectory</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Confidence Level:</span>
                      <span className="text-white">94.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Risk Assessment:</span>
                      <span className="text-yellow-400">Low-Medium</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button className="bg-green-600/20 border-green-500/30 text-green-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Accept AI
                  </Button>
                  <Button className="bg-red-600/20 border-red-500/30 text-red-400">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Override
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white">AI Performance Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-2xl font-bold text-white">2,847</div>
                    <div className="text-blue-300 text-sm">Decisions Supported</div>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="text-2xl font-bold text-white">96.2%</div>
                    <div className="text-blue-300 text-sm">Success Rate</div>
                  </div>
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-2xl font-bold text-white">$47M</div>
                    <div className="text-blue-300 text-sm">Cost Savings</div>
                  </div>
                  <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <div className="text-2xl font-bold text-white">156</div>
                    <div className="text-blue-300 text-sm">Days Saved</div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-blue-500/20">
                  <div className="flex justify-between">
                    <span className="text-blue-300">AI Utilization:</span>
                    <span className="text-white">87.3%</span>
                  </div>
                  <Progress value={87.3} className="h-2" />
                  <div className="flex justify-between">
                    <span className="text-blue-300">Human Override Rate:</span>
                    <span className="text-white">3.8%</span>
                  </div>
                  <Progress value={3.8} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
