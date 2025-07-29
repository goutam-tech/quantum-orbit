"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Rocket, Target, CalendarIcon, MapPin, Fuel, Clock, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

export function MissionPlanning() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [launchSite, setLaunchSite] = useState("kennedy")
  const [targetOrbit, setTargetOrbit] = useState("leo")
  const [payload, setPayload] = useState(1000)
  const [trajectory, setTrajectory] = useState<any>(null)
  const [launchWindows, setLaunchWindows] = useState<any[]>([])

  const launchSites = {
    kennedy: { name: "Kennedy Space Center", lat: 28.5721, lon: -80.648, country: "USA" },
    baikonur: { name: "Baikonur Cosmodrome", lat: 45.965, lon: 63.305, country: "Kazakhstan" },
    kourou: { name: "Guiana Space Centre", lat: 5.236, lon: -52.768, country: "French Guiana" },
    vandenberg: { name: "Vandenberg SFB", lat: 34.632, lon: -120.611, country: "USA" },
  }

  const orbitalTargets = {
    leo: { name: "Low Earth Orbit", altitude: 400, inclination: 28.5 },
    meo: { name: "Medium Earth Orbit", altitude: 20200, inclination: 55.0 },
    geo: { name: "Geostationary Orbit", altitude: 35786, inclination: 0.0 },
    polar: { name: "Polar Orbit", altitude: 800, inclination: 90.0 },
  }

  useEffect(() => {
    calculateTrajectory()
    generateLaunchWindows()
  }, [selectedDate, launchSite, targetOrbit, payload])

  const calculateTrajectory = () => {
    const site = launchSites[launchSite as keyof typeof launchSites]
    const orbit = orbitalTargets[targetOrbit as keyof typeof orbitalTargets]

    // Calculate delta-v requirements
    const earthRadius = 6371 // km
    const mu = 398600.4418 // km³/s²

    // Circular velocity at target altitude
    const targetRadius = earthRadius + orbit.altitude
    const circularVelocity = Math.sqrt(mu / targetRadius)

    // Launch site velocity due to Earth's rotation
    const earthRotationVel = 0.4651 * Math.cos((site.lat * Math.PI) / 180) // km/s

    // Inclination change penalty
    const inclinationPenalty = Math.abs(orbit.inclination - site.lat) * 0.1

    // Total delta-v estimate
    const deltaV = circularVelocity + inclinationPenalty - earthRotationVel

    // Fuel requirements (simplified)
    const specificImpulse = 450 // seconds
    const massRatio = Math.exp((deltaV * 1000) / (specificImpulse * 9.81))
    const fuelMass = payload * (massRatio - 1)

    setTrajectory({
      deltaV: deltaV.toFixed(2),
      fuelMass: fuelMass.toFixed(0),
      flightTime: (orbit.altitude / 100).toFixed(1), // simplified
      efficiency: Math.max(0, 100 - inclinationPenalty * 10).toFixed(1),
    })
  }

  const generateLaunchWindows = () => {
    const windows = []
    const baseDate = selectedDate || new Date()

    for (let i = 0; i < 7; i++) {
      const date = new Date(baseDate)
      date.setDate(date.getDate() + i)

      // Simulate optimal launch times
      const morning = new Date(date)
      morning.setHours(6, Math.floor(Math.random() * 60), 0)

      const evening = new Date(date)
      evening.setHours(18, Math.floor(Math.random() * 60), 0)

      windows.push({
        date: date.toDateString(),
        time: morning.toLocaleTimeString(),
        duration: Math.floor(Math.random() * 30) + 15,
        efficiency: Math.floor(Math.random() * 20) + 80,
        weather: Math.random() > 0.3 ? "Good" : "Marginal",
      })

      windows.push({
        date: date.toDateString(),
        time: evening.toLocaleTimeString(),
        duration: Math.floor(Math.random() * 30) + 15,
        efficiency: Math.floor(Math.random() * 20) + 75,
        weather: Math.random() > 0.4 ? "Good" : "Marginal",
      })
    }

    setLaunchWindows(windows.slice(0, 10))
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="trajectory" className="space-y-6">
        <TabsList className="bg-black/40 backdrop-blur-md border border-blue-500/20">
          <TabsTrigger value="trajectory" className="data-[state=active]:bg-blue-500/20">
            <Rocket className="w-4 h-4 mr-2" />
            Trajectory Planning
          </TabsTrigger>
          <TabsTrigger value="windows" className="data-[state=active]:bg-blue-500/20">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Launch Windows
          </TabsTrigger>
          <TabsTrigger value="analysis" className="data-[state=active]:bg-blue-500/20">
            <TrendingUp className="w-4 h-4 mr-2" />
            Mission Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trajectory" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mission Parameters */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-400" />
                  Mission Parameters
                </CardTitle>
                <CardDescription className="text-blue-300">
                  Configure launch site, target orbit, and payload specifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-blue-200">Launch Site</Label>
                  <Select value={launchSite} onValueChange={setLaunchSite}>
                    <SelectTrigger className="bg-black/50 border-blue-500/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-blue-500/30">
                      {Object.entries(launchSites).map(([key, site]) => (
                        <SelectItem key={key} value={key} className="text-white">
                          {site.name} ({site.country})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-blue-200">Target Orbit</Label>
                  <Select value={targetOrbit} onValueChange={setTargetOrbit}>
                    <SelectTrigger className="bg-black/50 border-blue-500/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-blue-500/30">
                      {Object.entries(orbitalTargets).map(([key, orbit]) => (
                        <SelectItem key={key} value={key} className="text-white">
                          {orbit.name} ({orbit.altitude} km)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-blue-200">Payload Mass (kg)</Label>
                  <Input
                    type="number"
                    value={payload}
                    onChange={(e) => setPayload(Number.parseInt(e.target.value) || 0)}
                    className="bg-black/50 border-blue-500/30 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-blue-200">Launch Date</Label>
                  <div className="bg-black/50 border border-blue-500/30 rounded-lg p-2">
                    <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trajectory Results */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Rocket className="w-5 h-5 mr-2 text-green-400" />
                  Trajectory Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                {trajectory ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <Fuel className="w-4 h-4 text-blue-400" />
                          <span className="text-blue-300 text-sm">Delta-V Required</span>
                        </div>
                        <p className="text-white text-lg font-semibold">{trajectory.deltaV} km/s</p>
                      </div>

                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="text-blue-300 text-sm">Flight Time</span>
                        </div>
                        <p className="text-white text-lg font-semibold">{trajectory.flightTime} min</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-300">Fuel Mass Required:</span>
                        <span className="text-white font-mono">{trajectory.fuelMass} kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-300">Mission Efficiency:</span>
                        <Badge
                          className={
                            Number.parseFloat(trajectory.efficiency) > 90
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : Number.parseFloat(trajectory.efficiency) > 75
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-red-500/20 text-red-400 border-red-500/30"
                          }
                        >
                          {trajectory.efficiency}%
                        </Badge>
                      </div>
                    </div>

                    {/* Launch Site Info */}
                    <div className="pt-4 border-t border-blue-500/20">
                      <h3 className="text-white font-semibold mb-2">Launch Site Details</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-blue-300">Latitude:</span>
                          <span className="text-white">{launchSites[launchSite as keyof typeof launchSites].lat}°</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-300">Longitude:</span>
                          <span className="text-white">{launchSites[launchSite as keyof typeof launchSites].lon}°</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Rocket className="w-12 h-12 text-blue-400/50 mx-auto mb-4" />
                    <p className="text-blue-300">Configure mission parameters to see trajectory analysis</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="windows" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-blue-400" />
                Optimal Launch Windows
              </CardTitle>
              <CardDescription className="text-blue-300">
                Available launch opportunities for the next 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {launchWindows.map((window, index) => (
                  <div key={index} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <CalendarIcon className="w-4 h-4 text-blue-400" />
                        <div>
                          <p className="text-white font-medium">{window.date}</p>
                          <p className="text-blue-300 text-sm">{window.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            window.weather === "Good"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          }
                        >
                          {window.weather}
                        </Badge>
                        <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                          {window.efficiency}% Efficiency
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-300">Window Duration: {window.duration} minutes</span>
                      {window.efficiency > 85 ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  Mission Risk Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300">Weather Risk:</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Low</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300">Technical Risk:</span>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Medium</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300">Orbital Debris:</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Low</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300">Range Safety:</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Nominal</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                  Ground Track Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-300">Coverage Area:</span>
                    <span className="text-white">Global</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Revisit Time:</span>
                    <span className="text-white">16 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Sun-Sync:</span>
                    <span className="text-white">No</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Eclipse Duration:</span>
                    <span className="text-white">35 min/orbit</span>
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
