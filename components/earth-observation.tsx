"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Thermometer, Cloud, Zap, TreePine, Waves, AlertTriangle, Satellite } from "lucide-react"

export function EarthObservation() {
  const [selectedRegion, setSelectedRegion] = useState("global")
  const [alertLevel, setAlertLevel] = useState("normal")

  const climateData = {
    global: {
      temperature: 15.2,
      temperatureChange: +1.1,
      co2Level: 421.3,
      seaLevel: 3.4,
      forestCover: 31.2,
      iceExtent: 4.9,
    },
    arctic: {
      temperature: -8.7,
      temperatureChange: +2.3,
      co2Level: 418.9,
      seaLevel: 0,
      forestCover: 0,
      iceExtent: 12.1,
    },
    amazon: {
      temperature: 26.8,
      temperatureChange: +1.8,
      co2Level: 415.2,
      seaLevel: 0,
      forestCover: 78.4,
      iceExtent: 0,
    },
    sahara: {
      temperature: 32.1,
      temperatureChange: +2.1,
      co2Level: 419.7,
      seaLevel: 0,
      forestCover: 2.1,
      iceExtent: 0,
    },
  }

  const disasters = [
    {
      id: "DIS-001",
      type: "Wildfire",
      location: "California, USA",
      severity: "High",
      area: "12,450 hectares",
      detected: "2 hours ago",
      confidence: 94,
      status: "Active",
    },
    {
      id: "DIS-002",
      type: "Flood",
      location: "Bangladesh",
      severity: "Critical",
      area: "8,200 hectares",
      detected: "6 hours ago",
      confidence: 98,
      status: "Monitoring",
    },
    {
      id: "DIS-003",
      type: "Hurricane",
      location: "Atlantic Ocean",
      severity: "Medium",
      area: "45,000 hectares",
      detected: "12 hours ago",
      confidence: 89,
      status: "Tracking",
    },
    {
      id: "DIS-004",
      type: "Drought",
      location: "Horn of Africa",
      severity: "High",
      area: "156,000 hectares",
      detected: "3 days ago",
      confidence: 92,
      status: "Ongoing",
    },
  ]

  const scientificMissions = [
    {
      id: "SCI-001",
      name: "Climate Change Monitoring",
      satellite: "Landsat 9",
      dataCollected: "2.4 TB",
      coverage: "Global",
      lastUpdate: "15 minutes ago",
      status: "Active",
      priority: "High",
    },
    {
      id: "SCI-002",
      name: "Ocean Temperature Study",
      satellite: "MODIS Aqua",
      dataCollected: "1.8 TB",
      coverage: "Pacific Ocean",
      lastUpdate: "32 minutes ago",
      status: "Active",
      priority: "Medium",
    },
    {
      id: "SCI-003",
      name: "Deforestation Analysis",
      satellite: "Sentinel-2",
      dataCollected: "3.1 TB",
      coverage: "Amazon Basin",
      lastUpdate: "1 hour ago",
      status: "Processing",
      priority: "High",
    },
    {
      id: "SCI-004",
      name: "Urban Heat Island Study",
      satellite: "ASTER",
      dataCollected: "892 GB",
      coverage: "Major Cities",
      lastUpdate: "2 hours ago",
      status: "Complete",
      priority: "Low",
    },
  ]

  const currentData = climateData[selectedRegion as keyof typeof climateData]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="climate" className="space-y-6">
        <TabsList className="bg-black/40 backdrop-blur-md border border-blue-500/20">
          <TabsTrigger value="climate" className="data-[state=active]:bg-blue-500/20">
            <Thermometer className="w-4 h-4 mr-2" />
            Climate Monitoring
          </TabsTrigger>
          <TabsTrigger value="disasters" className="data-[state=active]:bg-blue-500/20">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Disaster Detection
          </TabsTrigger>
          <TabsTrigger value="science" className="data-[state=active]:bg-blue-500/20">
            <Satellite className="w-4 h-4 mr-2" />
            Scientific Missions
          </TabsTrigger>
          <TabsTrigger value="environmental" className="data-[state=active]:bg-blue-500/20">
            <TreePine className="w-4 h-4 mr-2" />
            Environmental Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="climate" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Climate Data Dashboard */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-400" />
                  Climate Monitoring Dashboard
                </CardTitle>
                <CardDescription className="text-blue-300">
                  Real-time climate data from satellite observations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(climateData).map((region) => (
                    <Button
                      key={region}
                      variant={selectedRegion === region ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedRegion(region)}
                      className={
                        selectedRegion === region
                          ? "bg-blue-500/20 border-blue-400"
                          : "border-blue-500/30 text-blue-300"
                      }
                    >
                      {region.charAt(0).toUpperCase() + region.slice(1)}
                    </Button>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Thermometer className="w-4 h-4 text-red-400 mr-2" />
                      <span className="text-blue-300">Temperature:</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white">{currentData.temperature}°C</span>
                      <span
                        className={`ml-2 text-sm ${
                          currentData.temperatureChange > 0 ? "text-red-400" : "text-green-400"
                        }`}
                      >
                        {currentData.temperatureChange > 0 ? "+" : ""}
                        {currentData.temperatureChange}°C
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Cloud className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-blue-300">CO₂ Level:</span>
                    </div>
                    <span className="text-white">{currentData.co2Level} ppm</span>
                  </div>

                  {currentData.seaLevel > 0 && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Waves className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-blue-300">Sea Level Rise:</span>
                      </div>
                      <span className="text-white">{currentData.seaLevel} mm/year</span>
                    </div>
                  )}

                  {currentData.forestCover > 0 && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TreePine className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-blue-300">Forest Cover:</span>
                      </div>
                      <span className="text-white">{currentData.forestCover}%</span>
                    </div>
                  )}

                  {currentData.iceExtent > 0 && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-blue-300">Ice Extent:</span>
                      </div>
                      <span className="text-white">{currentData.iceExtent} million km²</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Environmental Trends */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TreePine className="w-5 h-5 mr-2 text-green-400" />
                  Environmental Trends
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Deforestation Rate:</span>
                      <span className="text-red-400">-2.1%/year</span>
                    </div>
                    <Progress value={78.9} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Ocean Acidification:</span>
                      <span className="text-yellow-400">pH 8.1</span>
                    </div>
                    <Progress value={65.3} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Biodiversity Index:</span>
                      <span className="text-green-400">0.68</span>
                    </div>
                    <Progress value={68.0} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Air Quality Index:</span>
                      <span className="text-yellow-400">156 (Unhealthy)</span>
                    </div>
                    <Progress value={44.0} className="h-2" />
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-500/20">
                  <h4 className="text-white font-semibold mb-2">Key Indicators</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30 justify-center">
                      Critical: Arctic Ice
                    </Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 justify-center">
                      Warning: Coral Reefs
                    </Badge>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 justify-center">
                      Stable: Ozone Layer
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 justify-center">
                      Monitoring: Permafrost
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="disasters" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                Natural Disaster Detection
              </CardTitle>
              <CardDescription className="text-blue-300">
                AI-powered disaster detection and monitoring system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {disasters.map((disaster) => (
                  <div
                    key={disaster.id}
                    className={`p-4 rounded-lg border ${
                      disaster.severity === "Critical"
                        ? "bg-red-500/10 border-red-500/20"
                        : disaster.severity === "High"
                          ? "bg-yellow-500/10 border-yellow-500/20"
                          : "bg-blue-500/10 border-blue-500/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            disaster.type === "Wildfire"
                              ? "bg-red-500/20"
                              : disaster.type === "Flood"
                                ? "bg-blue-500/20"
                                : disaster.type === "Hurricane"
                                  ? "bg-purple-500/20"
                                  : "bg-yellow-500/20"
                          }`}
                        >
                          {disaster.type === "Wildfire" && <Zap className="w-4 h-4 text-red-400" />}
                          {disaster.type === "Flood" && <Waves className="w-4 h-4 text-blue-400" />}
                          {disaster.type === "Hurricane" && <Cloud className="w-4 h-4 text-purple-400" />}
                          {disaster.type === "Drought" && <Thermometer className="w-4 h-4 text-yellow-400" />}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{disaster.type}</h3>
                          <p className="text-blue-300 text-sm">{disaster.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            disaster.severity === "Critical"
                              ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : disaster.severity === "High"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }
                        >
                          {disaster.severity}
                        </Badge>
                        <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                          {disaster.confidence}% confidence
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-blue-300">Area Affected:</span>
                        <span className="text-white ml-2">{disaster.area}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Detected:</span>
                        <span className="text-white ml-2">{disaster.detected}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Status:</span>
                        <span className="text-white ml-2">{disaster.status}</span>
                      </div>
                      <div>
                        <Button size="sm" className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="science" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Satellite className="w-5 h-5 mr-2 text-blue-400" />
                Scientific Data Processing
              </CardTitle>
              <CardDescription className="text-blue-300">
                Automated analysis pipelines for space science experiments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scientificMissions.map((mission) => (
                  <div key={mission.id} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold">{mission.name}</h3>
                        <p className="text-blue-300 text-sm">
                          {mission.satellite} • {mission.coverage}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            mission.priority === "High"
                              ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : mission.priority === "Medium"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-green-500/20 text-green-400 border-green-500/30"
                          }
                        >
                          {mission.priority} Priority
                        </Badge>
                        <Badge
                          className={
                            mission.status === "Active"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : mission.status === "Processing"
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                          }
                        >
                          {mission.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-blue-300">Data Collected:</span>
                        <span className="text-white ml-2">{mission.dataCollected}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Last Update:</span>
                        <span className="text-white ml-2">{mission.lastUpdate}</span>
                      </div>
                      <div>
                        <Button size="sm" className="bg-green-600/20 border-green-500/30 text-green-400">
                          <Satellite className="w-4 h-4 mr-2" />
                          View Data
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="environmental" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TreePine className="w-5 h-5 mr-2 text-green-400" />
                  Ecosystem Health Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <h4 className="text-white font-semibold mb-2">Amazon Rainforest</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-blue-300">Coverage:</span>
                        <span className="text-white ml-2">78.4%</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Deforestation:</span>
                        <span className="text-red-400 ml-2">-2.1%</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Biodiversity:</span>
                        <span className="text-white ml-2">High</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Carbon Storage:</span>
                        <span className="text-white ml-2">150 Gt</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h4 className="text-white font-semibold mb-2">Great Barrier Reef</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-blue-300">Coral Health:</span>
                        <span className="text-yellow-400 ml-2">Moderate</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Bleaching:</span>
                        <span className="text-red-400 ml-2">23%</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Water Temp:</span>
                        <span className="text-white ml-2">28.2°C</span>
                      </div>
                      <div>
                        <span className="text-blue-300">pH Level:</span>
                        <span className="text-white ml-2">8.1</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <h4 className="text-white font-semibold mb-2">Arctic Tundra</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-blue-300">Permafrost:</span>
                        <span className="text-red-400 ml-2">Thawing</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Vegetation:</span>
                        <span className="text-green-400 ml-2">Expanding</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Temperature:</span>
                        <span className="text-white ml-2">-8.7°C</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Ice Coverage:</span>
                        <span className="text-white ml-2">12.1M km²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Waves className="w-5 h-5 mr-2 text-blue-400" />
                  Ocean Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Sea Surface Temperature:</span>
                      <span className="text-white">16.8°C (+0.7°C)</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Ocean pH Level:</span>
                      <span className="text-white">8.1 (-0.1)</span>
                    </div>
                    <Progress value={76} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Dissolved Oxygen:</span>
                      <span className="text-white">6.2 mg/L</span>
                    </div>
                    <Progress value={62} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300">Plastic Pollution:</span>
                      <span className="text-red-400">High</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-500/20">
                  <h4 className="text-white font-semibold mb-2">Marine Life Tracking</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-300">Whale Populations:</span>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Stable</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Fish Stocks:</span>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Declining</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300">Coral Coverage:</span>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Critical</Badge>
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
