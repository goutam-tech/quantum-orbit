"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Wrench, Trash2, Shield, Rocket, Users, Heart, AlertTriangle, Star } from "lucide-react"

export function SpecializedMissions() {
  const [activeMissions, setActiveMissions] = useState(12)
  const [completedMissions, setCompletedMissions] = useState(47)
  const [missionSuccess, setMissionSuccess] = useState(94.7)
  const [totalPassengers, setTotalPassengers] = useState(1247)

  const spaceTourismMissions = [
    {
      id: "ST-001",
      name: "Blue Origin New Shepard",
      type: "Suborbital Tourism",
      status: "Active",
      passengers: 6,
      duration: "11 minutes",
      altitude: "100 km",
      price: "$450,000",
      safety: 99.8,
      nextLaunch: "2024-02-15",
      totalFlights: 23,
    },
    {
      id: "ST-002",
      name: "SpaceX Dragon Tourism",
      type: "Orbital Tourism",
      status: "Scheduled",
      passengers: 4,
      duration: "3 days",
      altitude: "400 km",
      price: "$55M",
      safety: 99.2,
      nextLaunch: "2024-03-20",
      totalFlights: 8,
    },
    {
      id: "ST-003",
      name: "Virgin Galactic Unity",
      type: "Suborbital Tourism",
      status: "Maintenance",
      passengers: 6,
      duration: "90 minutes",
      altitude: "80 km",
      price: "$450,000",
      safety: 98.9,
      nextLaunch: "TBD",
      totalFlights: 15,
    },
    {
      id: "ST-004",
      name: "Axiom Space Station",
      type: "Orbital Hotel",
      status: "Development",
      passengers: 8,
      duration: "10 days",
      altitude: "400 km",
      price: "$55M",
      safety: 0,
      nextLaunch: "2025-Q2",
      totalFlights: 0,
    },
  ]

  const maintenanceMissions = [
    {
      id: "SM-001",
      target: "Hubble Space Telescope",
      type: "Scheduled Maintenance",
      status: "Planning",
      priority: "High",
      crew: 4,
      duration: "8 days",
      tasks: ["Gyroscope Replacement", "Solar Panel Repair", "Instrument Calibration"],
      riskLevel: "Medium",
      cost: "$1.2B",
      launchWindow: "2024-04-15",
    },
    {
      id: "SM-002",
      target: "International Space Station",
      type: "Emergency Repair",
      status: "Active",
      priority: "Critical",
      crew: 2,
      duration: "6 hours",
      tasks: ["Coolant System Leak", "EVA Suit Maintenance"],
      riskLevel: "High",
      cost: "$45M",
      launchWindow: "Immediate",
    },
    {
      id: "SM-003",
      target: "James Webb Space Telescope",
      type: "Software Update",
      status: "Completed",
      priority: "Medium",
      crew: 0,
      duration: "Remote",
      tasks: ["Firmware Update", "Calibration Adjustment"],
      riskLevel: "Low",
      cost: "$2M",
      launchWindow: "Completed",
    },
  ]

  const debrisRemoval = [
    {
      id: "DR-001",
      target: "Defunct Satellite Cluster",
      debris: "COSMOS 1408 Fragments",
      quantity: 1500,
      altitude: "485 km",
      threat: "High",
      method: "Robotic Capture",
      status: "Active",
      progress: 67,
      estimated: "2024-06-30",
      cost: "$150M",
    },
    {
      id: "DR-002",
      target: "Rocket Upper Stage",
      debris: "Long March 5B",
      quantity: 1,
      altitude: "340 km",
      threat: "Critical",
      method: "Controlled Deorbit",
      status: "Planning",
      progress: 23,
      estimated: "2024-03-15",
      cost: "$75M",
    },
    {
      id: "DR-003",
      target: "Micrometeorite Field",
      debris: "Paint Flecks & Metal",
      quantity: 50000,
      altitude: "600 km",
      threat: "Medium",
      method: "Laser Ablation",
      status: "Testing",
      progress: 12,
      estimated: "2025-01-20",
      cost: "$300M",
    },
  ]

  const militaryOperations = [
    {
      id: "MO-001",
      name: "Operation Starshield",
      classification: "TOP SECRET",
      type: "Reconnaissance",
      status: "Active",
      personnel: 12,
      assets: ["Spy Satellites", "Ground Stations"],
      clearance: "TS/SCI",
      duration: "Ongoing",
      budget: "CLASSIFIED",
    },
    {
      id: "MO-002",
      name: "Project Guardian",
      classification: "SECRET",
      type: "Space Defense",
      status: "Development",
      personnel: 45,
      assets: ["Interceptor Satellites", "Early Warning"],
      clearance: "SECRET",
      duration: "36 months",
      budget: "CLASSIFIED",
    },
    {
      id: "MO-003",
      name: "Operation Blackout",
      classification: "TOP SECRET",
      type: "Electronic Warfare",
      status: "Standby",
      personnel: 8,
      assets: ["Jamming Satellites", "Cyber Warfare"],
      clearance: "TS/SCI",
      duration: "On Demand",
      budget: "CLASSIFIED",
    },
  ]

  const interplanetaryMissions = [
    {
      id: "IP-001",
      name: "Mars Sample Return",
      destination: "Mars",
      type: "Sample Collection",
      status: "En Route",
      progress: 78,
      crew: 0,
      duration: "26 months",
      distance: "225M km",
      objectives: ["Soil Samples", "Atmospheric Analysis", "Life Detection"],
      launchDate: "2022-07-30",
      arrival: "2024-02-18",
    },
    {
      id: "IP-002",
      name: "Europa Clipper",
      destination: "Jupiter's Moon Europa",
      type: "Ocean Exploration",
      status: "Transit",
      progress: 34,
      crew: 0,
      duration: "6 years",
      distance: "628M km",
      objectives: ["Subsurface Ocean", "Ice Shell Analysis", "Habitability"],
      launchDate: "2024-10-14",
      arrival: "2030-04-11",
    },
    {
      id: "IP-003",
      name: "Artemis III",
      destination: "Moon South Pole",
      type: "Crewed Landing",
      status: "Preparation",
      progress: 45,
      crew: 4,
      duration: "30 days",
      distance: "384K km",
      objectives: ["Lunar Base Setup", "Resource Mining", "Scientific Research"],
      launchDate: "2025-12-01",
      arrival: "2025-12-04",
    },
    {
      id: "IP-004",
      name: "Psyche Mission",
      destination: "Asteroid 16 Psyche",
      type: "Asteroid Mining",
      status: "Development",
      progress: 67,
      crew: 0,
      duration: "4 years",
      distance: "370M km",
      objectives: ["Metal Extraction", "Core Analysis", "Mining Technology"],
      launchDate: "2025-08-01",
      arrival: "2029-08-01",
    },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="tourism" className="space-y-6">
        <TabsList className="bg-black/40 backdrop-blur-md border border-blue-500/20">
          <TabsTrigger value="tourism" className="data-[state=active]:bg-blue-500/20">
            <Plane className="w-4 h-4 mr-2" />
            Space Tourism
          </TabsTrigger>
          <TabsTrigger value="maintenance" className="data-[state=active]:bg-blue-500/20">
            <Wrench className="w-4 h-4 mr-2" />
            Maintenance
          </TabsTrigger>
          <TabsTrigger value="debris" className="data-[state=active]:bg-blue-500/20">
            <Trash2 className="w-4 h-4 mr-2" />
            Debris Removal
          </TabsTrigger>
          <TabsTrigger value="military" className="data-[state=active]:bg-blue-500/20">
            <Shield className="w-4 h-4 mr-2" />
            Military Ops
          </TabsTrigger>
          <TabsTrigger value="interplanetary" className="data-[state=active]:bg-blue-500/20">
            <Rocket className="w-4 h-4 mr-2" />
            Interplanetary
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tourism" className="space-y-6">
          {/* Tourism Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-200">Active Flights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">{activeMissions}</span>
                  <Plane className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-xs text-blue-300">↑ 3 from last month</div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-200">Total Passengers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">{totalPassengers.toLocaleString()}</span>
                  <Users className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-xs text-blue-300">All-time record</div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-200">Safety Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">{missionSuccess}%</span>
                  <Heart className="w-5 h-5 text-red-400" />
                </div>
                <Progress value={missionSuccess} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-200">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">$2.4B</span>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-xs text-blue-300">2024 YTD</div>
              </CardContent>
            </Card>
          </div>

          {/* Space Tourism Missions */}
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Plane className="w-5 h-5 mr-2 text-blue-400" />
                Commercial Space Tourism
              </CardTitle>
              <CardDescription className="text-blue-300">Active and scheduled commercial space flights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {spaceTourismMissions.map((mission) => (
                  <div key={mission.id} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            mission.status === "Active"
                              ? "bg-green-500/20"
                              : mission.status === "Scheduled"
                                ? "bg-blue-500/20"
                                : mission.status === "Maintenance"
                                  ? "bg-yellow-500/20"
                                  : "bg-gray-500/20"
                          }`}
                        >
                          <Plane className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{mission.name}</h3>
                          <p className="text-blue-300 text-sm">
                            {mission.id} • {mission.type}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                          {mission.passengers} PAX
                        </Badge>
                        <Badge
                          className={
                            mission.status === "Active"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : mission.status === "Scheduled"
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                : mission.status === "Maintenance"
                                  ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                  : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                          }
                        >
                          {mission.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-blue-300">Duration:</span>
                        <span className="text-white ml-2">{mission.duration}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Altitude:</span>
                        <span className="text-white ml-2">{mission.altitude}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Price:</span>
                        <span className="text-white ml-2">{mission.price}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Total Flights:</span>
                        <span className="text-white ml-2">{mission.totalFlights}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-blue-300 text-sm">Safety Rating:</span>
                            <span className="text-white text-sm">{mission.safety}%</span>
                          </div>
                          <Progress value={mission.safety} className="h-2 w-32" />
                        </div>
                        <div>
                          <span className="text-blue-300 text-sm">Next Launch:</span>
                          <span className="text-white ml-2">{mission.nextLaunch}</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-blue-600/20 border-blue-500/30 text-blue-400">
                        Manage Flight
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Wrench className="w-5 h-5 mr-2 text-yellow-400" />
                Satellite Maintenance Operations
              </CardTitle>
              <CardDescription className="text-blue-300">Scheduled and emergency maintenance missions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {maintenanceMissions.map((mission) => (
                  <div key={mission.id} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            mission.status === "Active"
                              ? "bg-green-500/20"
                              : mission.status === "Planning"
                                ? "bg-blue-500/20"
                                : "bg-gray-500/20"
                          }`}
                        >
                          <Wrench className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{mission.target}</h3>
                          <p className="text-blue-300 text-sm">
                            {mission.id} • {mission.type}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            mission.priority === "Critical"
                              ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : mission.priority === "High"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }
                        >
                          {mission.priority}
                        </Badge>
                        <Badge
                          className={
                            mission.status === "Active"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : mission.status === "Planning"
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                          }
                        >
                          {mission.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-blue-300">Crew:</span>
                        <span className="text-white ml-2">{mission.crew}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Duration:</span>
                        <span className="text-white ml-2">{mission.duration}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Risk Level:</span>
                        <span className="text-white ml-2">{mission.riskLevel}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Cost:</span>
                        <span className="text-white ml-2">{mission.cost}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <span className="text-blue-300 text-sm">Tasks:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {mission.tasks.map((task, idx) => (
                            <Badge key={idx} variant="outline" className="border-yellow-500/30 text-yellow-300 text-xs">
                              {task}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-blue-300 text-sm">Launch Window:</span>
                          <span className="text-white ml-2">{mission.launchWindow}</span>
                        </div>
                        <Button size="sm" className="bg-yellow-600/20 border-yellow-500/30 text-yellow-400">
                          Schedule Mission
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="debris" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Trash2 className="w-5 h-5 mr-2 text-red-400" />
                Active Debris Removal
              </CardTitle>
              <CardDescription className="text-blue-300">
                Orbital cleanup and threat mitigation operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {debrisRemoval.map((mission) => (
                  <div key={mission.id} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            mission.status === "Active"
                              ? "bg-green-500/20"
                              : mission.status === "Planning"
                                ? "bg-blue-500/20"
                                : "bg-yellow-500/20"
                          }`}
                        >
                          <Trash2 className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{mission.target}</h3>
                          <p className="text-blue-300 text-sm">
                            {mission.id} • {mission.debris}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            mission.threat === "Critical"
                              ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : mission.threat === "High"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }
                        >
                          {mission.threat} Threat
                        </Badge>
                        <Badge
                          className={
                            mission.status === "Active"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : mission.status === "Planning"
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          }
                        >
                          {mission.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-blue-300">Quantity:</span>
                        <span className="text-white ml-2">{mission.quantity.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Altitude:</span>
                        <span className="text-white ml-2">{mission.altitude}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Method:</span>
                        <span className="text-white ml-2">{mission.method}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Cost:</span>
                        <span className="text-white ml-2">{mission.cost}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-blue-300 text-sm">Mission Progress:</span>
                          <span className="text-white text-sm">{mission.progress}%</span>
                        </div>
                        <Progress value={mission.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-blue-300 text-sm">Estimated Completion:</span>
                          <span className="text-white ml-2">{mission.estimated}</span>
                        </div>
                        <Button size="sm" className="bg-red-600/20 border-red-500/30 text-red-400">
                          Monitor Mission
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="military" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-red-400" />
                Military Space Operations
              </CardTitle>
              <CardDescription className="text-blue-300">
                Classified defense missions and security operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {militaryOperations.map((mission) => (
                  <div key={mission.id} className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-full bg-red-500/20">
                          <Shield className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{mission.name}</h3>
                          <p className="text-blue-300 text-sm">
                            {mission.id} • {mission.type}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-red-500/20 text-red-400 border-red-500/30">{mission.classification}</Badge>
                        <Badge
                          className={
                            mission.status === "Active"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : mission.status === "Development"
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                          }
                        >
                          {mission.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-blue-300">Personnel:</span>
                        <span className="text-white ml-2">{mission.personnel}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Clearance:</span>
                        <span className="text-white ml-2">{mission.clearance}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Duration:</span>
                        <span className="text-white ml-2">{mission.duration}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Budget:</span>
                        <span className="text-white ml-2">{mission.budget}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <span className="text-blue-300 text-sm">Assets:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {mission.assets.map((asset, idx) => (
                            <Badge key={idx} variant="outline" className="border-red-500/30 text-red-300 text-xs">
                              {asset}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-red-400" />
                          <span className="text-red-300 text-sm">
                            Classified Information - Authorized Personnel Only
                          </span>
                        </div>
                        <Button size="sm" className="bg-red-600/20 border-red-500/30 text-red-400">
                          Access Restricted
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interplanetary" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Rocket className="w-5 h-5 mr-2 text-purple-400" />
                Interplanetary Exploration
              </CardTitle>
              <CardDescription className="text-blue-300">Deep space missions and planetary exploration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {interplanetaryMissions.map((mission) => (
                  <div key={mission.id} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            mission.status === "En Route"
                              ? "bg-green-500/20"
                              : mission.status === "Transit"
                                ? "bg-blue-500/20"
                                : mission.status === "Preparation"
                                  ? "bg-yellow-500/20"
                                  : "bg-purple-500/20"
                          }`}
                        >
                          <Rocket className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{mission.name}</h3>
                          <p className="text-blue-300 text-sm">
                            {mission.id} • {mission.destination}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                          {mission.type}
                        </Badge>
                        <Badge
                          className={
                            mission.status === "En Route"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : mission.status === "Transit"
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                : mission.status === "Preparation"
                                  ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                  : "bg-purple-500/20 text-purple-400 border-purple-500/30"
                          }
                        >
                          {mission.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-blue-300">Crew:</span>
                        <span className="text-white ml-2">{mission.crew}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Duration:</span>
                        <span className="text-white ml-2">{mission.duration}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Distance:</span>
                        <span className="text-white ml-2">{mission.distance}</span>
                      </div>
                      <div>
                        <span className="text-blue-300">Launch:</span>
                        <span className="text-white ml-2">{mission.launchDate}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-blue-300 text-sm">Mission Progress:</span>
                          <span className="text-white text-sm">{mission.progress}%</span>
                        </div>
                        <Progress value={mission.progress} className="h-2" />
                      </div>

                      <div>
                        <span className="text-blue-300 text-sm">Objectives:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {mission.objectives.map((objective, idx) => (
                            <Badge key={idx} variant="outline" className="border-purple-500/30 text-purple-300 text-xs">
                              {objective}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-blue-300 text-sm">Expected Arrival:</span>
                          <span className="text-white ml-2">{mission.arrival}</span>
                        </div>
                        <Button size="sm" className="bg-purple-600/20 border-purple-500/30 text-purple-400">
                          Track Mission
                        </Button>
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
