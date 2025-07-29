"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Orbit, Globe, Satellite, Calculator, Target } from "lucide-react"

export function OrbitalMechanics() {
  const [altitude, setAltitude] = useState(400) // km
  const [inclination, setInclination] = useState(51.6) // degrees
  const [eccentricity, setEccentricity] = useState(0.0001)
  const [orbitalData, setOrbitalData] = useState<any>(null)

  const calculateOrbitalParameters = () => {
    const earthRadius = 6371 // km
    const earthMu = 398600.4418 // km³/s²

    const semiMajorAxis = earthRadius + altitude
    const orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / earthMu)
    const orbitalVelocity = Math.sqrt(earthMu / semiMajorAxis)
    const apogee = semiMajorAxis * (1 + eccentricity) - earthRadius
    const perigee = semiMajorAxis * (1 - eccentricity) - earthRadius

    setOrbitalData({
      semiMajorAxis: semiMajorAxis.toFixed(2),
      period: (orbitalPeriod / 60).toFixed(2), // minutes
      velocity: (orbitalVelocity * 3.6).toFixed(2), // km/h
      apogee: apogee.toFixed(2),
      perigee: perigee.toFixed(2),
      inclination: inclination.toFixed(1),
    })
  }

  useEffect(() => {
    calculateOrbitalParameters()
  }, [altitude, inclination, eccentricity])

  const satellites = [
    { name: "ISS", altitude: 408, inclination: 51.6, status: "Active" },
    { name: "Hubble", altitude: 547, inclination: 28.5, status: "Active" },
    { name: "GPS Satellite", altitude: 20200, inclination: 55.0, status: "Active" },
    { name: "Geostationary", altitude: 35786, inclination: 0.0, status: "Active" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orbital Calculator */}
        <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Calculator className="w-5 h-5 mr-2 text-blue-400" />
              Orbital Parameters Calculator
            </CardTitle>
            <CardDescription className="text-blue-300">
              Calculate orbital mechanics for satellite missions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-blue-200">Altitude (km)</Label>
              <Input
                type="number"
                value={altitude}
                onChange={(e) => setAltitude(Number.parseFloat(e.target.value) || 0)}
                className="bg-black/50 border-blue-500/30 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-blue-200">Inclination (degrees)</Label>
              <Input
                type="number"
                value={inclination}
                onChange={(e) => setInclination(Number.parseFloat(e.target.value) || 0)}
                step="0.1"
                className="bg-black/50 border-blue-500/30 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-blue-200">Eccentricity</Label>
              <Input
                type="number"
                value={eccentricity}
                onChange={(e) => setEccentricity(Number.parseFloat(e.target.value) || 0)}
                step="0.0001"
                min="0"
                max="0.9999"
                className="bg-black/50 border-blue-500/30 text-white"
              />
            </div>

            <Button onClick={calculateOrbitalParameters} className="w-full bg-blue-600 hover:bg-blue-700">
              <Target className="w-4 h-4 mr-2" />
              Calculate Orbit
            </Button>
          </CardContent>
        </Card>

        {/* Orbital Results */}
        <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Orbit className="w-5 h-5 mr-2 text-green-400" />
              Orbital Characteristics
            </CardTitle>
          </CardHeader>
          <CardContent>
            {orbitalData && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-300">Semi-major Axis:</span>
                  <span className="text-white font-mono">{orbitalData.semiMajorAxis} km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-300">Orbital Period:</span>
                  <span className="text-white font-mono">{orbitalData.period} min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-300">Orbital Velocity:</span>
                  <span className="text-white font-mono">{orbitalData.velocity} km/h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-300">Apogee:</span>
                  <span className="text-white font-mono">{orbitalData.apogee} km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-300">Perigee:</span>
                  <span className="text-white font-mono">{orbitalData.perigee} km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-300">Inclination:</span>
                  <span className="text-white font-mono">{orbitalData.inclination}°</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Known Satellites */}
      <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Satellite className="w-5 h-5 mr-2 text-blue-400" />
            Active Satellites
          </CardTitle>
          <CardDescription className="text-blue-300">Current orbital objects being tracked</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {satellites.map((satellite, index) => (
              <div key={index} className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">{satellite.name}</h3>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{satellite.status}</Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-300">Altitude:</span>
                    <span className="text-white">{satellite.altitude} km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Inclination:</span>
                    <span className="text-white">{satellite.inclination}°</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Orbital Visualization */}
      <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Globe className="w-5 h-5 mr-2 text-blue-400" />
            Orbital Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-64 bg-gradient-radial from-blue-900/20 to-black rounded-lg overflow-hidden">
            {/* Earth */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-full shadow-lg">
              <div className="absolute inset-2 bg-green-400/30 rounded-full"></div>
            </div>

            {/* Orbital Path */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-400/50 rounded-full"
              style={{
                width: `${Math.min(altitude / 10 + 80, 240)}px`,
                height: `${Math.min(altitude / 10 + 80, 240)}px`,
              }}
            >
              {/* Satellite */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-spin"
                style={{ animationDuration: `${orbitalData?.period || 90}s` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
