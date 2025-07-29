"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Radio, Globe, Satellite, MapPin, Clock } from "lucide-react"

export function GroundStationNetwork() {
  const [selectedStation, setSelectedStation] = useState("DSS-14")
  const [communicationWindows, setCommunicationWindows] = useState<any[]>([])

  const groundStations = {
    "DSS-14": {
      name: "Goldstone Deep Space Communications Complex",
      location: "California, USA",
      coordinates: { lat: 35.4267, lon: -116.89 },
      frequency: "X-band, Ka-band",
      diameter: "70m",
      status: "Active",
      currentMission: "Mars Perseverance",
      signalStrength: 94,
      dataRate: 2.1,
      elevation: 45.2,
      azimuth: 127.8,
    },
    "DSS-43": {
      name: "Canberra Deep Space Communication Complex",
      location: "Australia",
      coordinates: { lat: -35.4014, lon: 148.9819 },
      frequency: "X-band, Ka-band",
      diameter: "70m",
      status: "Active",
      currentMission: "Voyager 1",
      signalStrength: 87,
      dataRate: 0.8,
      elevation: 32.1,
      azimuth: 89.4,
    },
    "DSS-63": {
      name: "Madrid Deep Space Communication Complex",
      location: "Spain",
      coordinates: { lat: 40.4273, lon: -4.2493 },
      frequency: "X-band, Ka-band",
      diameter: "70m",
      status: "Maintenance",
      currentMission: "None",
      signalStrength: 0,
      dataRate: 0,
      elevation: 0,
      azimuth: 0,
    },
    "ESTRACK-1": {
      name: "New Norcia Station",
      location: "Australia",
      coordinates: { lat: -31.0482, lon: 116.1914 },
      frequency: "S-band, X-band",
      diameter: "35m",
      status: "Active",
      currentMission: "BepiColombo",
      signalStrength: 78,
      dataRate: 1.2,
      elevation: 28.7,
      azimuth: 156.3,
    },
  }

  useEffect(() => {
    // Generate communication windows
    const windows = []
    const now = new Date()

    for (let i = 0; i < 24; i++) {
      const startTime = new Date(now.getTime() + i * 60 * 60 * 1000)
      const duration = Math.floor(Math.random() * 120) + 30
      const quality = Math.floor(Math.random() * 40) + 60

      windows.push({
        startTime: startTime.toLocaleTimeString(),
        duration,
        quality,
        satellite: ["ISS", "Hubble", "Mars Rover", "Voyager 1"][Math.floor(Math.random() * 4)],
        station: Object.keys(groundStations)[Math.floor(Math.random() * 4)],
      })
    }

    setCommunicationWindows(windows.slice(0, 12))
  }, [])

  const currentStation = groundStations[selectedStation as keyof typeof groundStations]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ground Station Control */}
        <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Radio className="w-5 h-5 mr-2 text-blue-400" />
              Ground Station Network
            </CardTitle>
            <CardDescription className="text-blue-300">Global deep space communication network</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(groundStations).map(([id, station]) => (
                <Button
                  key={id}
                  variant={selectedStation === id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStation(id)}
                  className={
                    selectedStation === id ? "bg-blue-500/20 border-blue-400" : "border-blue-500/30 text-blue-300"
                  }
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        station.status === "Active"
                          ? "bg-green-400"
                          : station.status === "Maintenance"
                            ? "bg-yellow-400"
                            : "bg-red-400"
                      }`}
                    />
                    <span className="text-xs">{id}</span>
                  </div>
                </Button>
              ))}
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-white font-semibold">{currentStation.name}</h3>
                <p className="text-blue-300 text-sm flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {currentStation.location}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-blue-300">Diameter:</span>
                  <span className="text-white ml-2">{currentStation.diameter}</span>
                </div>
                <div>
                  <span className="text-blue-300">Frequency:</span>
                  <span className="text-white ml-2">{currentStation.frequency}</span>
                </div>
                <div>
                  <span className="text-blue-300">Elevation:</span>
                  <span className="text-white ml-2">{currentStation.elevation}°</span>
                </div>
                <div>
                  <span className="text-blue-300">Azimuth:</span>
                  <span className="text-white ml-2">{currentStation.azimuth}°</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-blue-300">Signal Strength:</span>
                  <span className="text-white">{currentStation.signalStrength}%</span>
                </div>
                <Progress value={currentStation.signalStrength} className="h-2" />
              </div>

              <div className="flex justify-between">
                <span className="text-blue-300">Current Mission:</span>
                <Badge
                  className={
                    currentStation.status === "Active"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                  }
                >
                  {currentStation.currentMission}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Communication Windows */}
        <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Clock className="w-5 h-5 mr-2 text-green-400" />
              Communication Windows
            </CardTitle>
            <CardDescription className="text-blue-300">Upcoming satellite contact opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {communicationWindows.map((window, index) => (
                <div key={index} className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Satellite className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-medium">{window.satellite}</span>
                    </div>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300 text-xs">
                      {window.station}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-300">{window.startTime}</span>
                    <span className="text-white">{window.duration} min</span>
                    <Badge
                      className={
                        window.quality > 80
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : window.quality > 60
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            : "bg-red-500/20 text-red-400 border-red-500/30"
                      }
                    >
                      {window.quality}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Global Coverage Map */}
      <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Globe className="w-5 h-5 mr-2 text-blue-400" />
            Global Coverage Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-64 bg-gradient-to-b from-blue-900/20 to-black rounded-lg overflow-hidden">
            {/* World Map Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Ground Stations */}
                {Object.entries(groundStations).map(([id, station], index) => (
                  <div
                    key={id}
                    className={`absolute w-3 h-3 rounded-full cursor-pointer transition-all ${
                      station.status === "Active"
                        ? "bg-green-400"
                        : station.status === "Maintenance"
                          ? "bg-yellow-400"
                          : "bg-red-400"
                    } ${selectedStation === id ? "ring-2 ring-white scale-150" : ""}`}
                    style={{
                      left: `${20 + index * 20}%`,
                      top: `${30 + (index % 2) * 40}%`,
                    }}
                    onClick={() => setSelectedStation(id)}
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white whitespace-nowrap">
                      {id}
                    </div>
                  </div>
                ))}

                {/* Coverage Areas */}
                {Object.entries(groundStations).map(
                  ([id, station], index) =>
                    station.status === "Active" && (
                      <div
                        key={`coverage-${id}`}
                        className="absolute border border-green-400/30 rounded-full animate-pulse"
                        style={{
                          left: `${15 + index * 20}%`,
                          top: `${25 + (index % 2) * 40}%`,
                          width: "10%",
                          height: "20%",
                        }}
                      />
                    ),
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
