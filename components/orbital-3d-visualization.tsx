"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Globe, Play, Pause, RotateCcw, Satellite, Orbit } from "lucide-react"

export function Orbital3DVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [isPlaying, setIsPlaying] = useState(true)
  const [selectedSatellite, setSelectedSatellite] = useState("ISS")
  const [timeScale, setTimeScale] = useState([1])
  const [viewAngle, setViewAngle] = useState(0)

  const satellites = {
    ISS: { altitude: 408, inclination: 51.6, color: "#00ff00", period: 92.68 },
    Hubble: { altitude: 547, inclination: 28.5, color: "#ff6b00", period: 96.7 },
    GPS: { altitude: 20200, inclination: 55.0, color: "#0080ff", period: 718 },
    GEO: { altitude: 35786, inclination: 0.0, color: "#ff0080", period: 1436 },
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const earthRadius = 40
    let animationTime = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw space background
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width / 2)
      gradient.addColorStop(0, "#001122")
      gradient.addColorStop(1, "#000000")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      ctx.fillStyle = "#ffffff"
      for (let i = 0; i < 100; i++) {
        const x = (i * 37) % canvas.width
        const y = (i * 73) % canvas.height
        const size = Math.random() * 2
        ctx.fillRect(x, y, size, size)
      }

      // Draw Earth
      const earthGradient = ctx.createRadialGradient(centerX - 10, centerY - 10, 0, centerX, centerY, earthRadius)
      earthGradient.addColorStop(0, "#4a90e2")
      earthGradient.addColorStop(0.7, "#2171b5")
      earthGradient.addColorStop(1, "#08519c")
      ctx.fillStyle = earthGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, earthRadius, 0, 2 * Math.PI)
      ctx.fill()

      // Draw continents (simplified)
      ctx.fillStyle = "#228b22"
      ctx.beginPath()
      ctx.arc(centerX - 15, centerY - 10, 12, 0, Math.PI)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(centerX + 10, centerY + 5, 8, 0, Math.PI * 1.5)
      ctx.fill()

      // Draw orbital paths and satellites
      Object.entries(satellites).forEach(([name, sat]) => {
        const scale = 0.01
        const orbitRadius = earthRadius + sat.altitude * scale

        // Draw orbital path
        ctx.strokeStyle = sat.color + "40"
        ctx.lineWidth = 1
        ctx.beginPath()

        // Create elliptical orbit based on inclination
        const inclinationRad = (sat.inclination * Math.PI) / 180
        for (let angle = 0; angle <= 2 * Math.PI; angle += 0.1) {
          const x = centerX + orbitRadius * Math.cos(angle)
          const y = centerY + orbitRadius * Math.sin(angle) * Math.cos(inclinationRad)
          if (angle === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()

        // Calculate satellite position
        const satelliteAngle = ((animationTime * timeScale[0] * 0.01) / sat.period) * 2 * Math.PI
        const satX = centerX + orbitRadius * Math.cos(satelliteAngle + viewAngle)
        const satY = centerY + orbitRadius * Math.sin(satelliteAngle + viewAngle) * Math.cos(inclinationRad)

        // Draw satellite
        ctx.fillStyle = sat.color
        ctx.beginPath()
        ctx.arc(satX, satY, 4, 0, 2 * Math.PI)
        ctx.fill()

        // Draw satellite glow
        const glowGradient = ctx.createRadialGradient(satX, satY, 0, satX, satY, 12)
        glowGradient.addColorStop(0, sat.color + "80")
        glowGradient.addColorStop(1, sat.color + "00")
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(satX, satY, 12, 0, 2 * Math.PI)
        ctx.fill()

        // Highlight selected satellite
        if (name === selectedSatellite) {
          ctx.strokeStyle = "#ffffff"
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(satX, satY, 8, 0, 2 * Math.PI)
          ctx.stroke()
        }
      })

      if (isPlaying) {
        animationTime += 1
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, selectedSatellite, timeScale, viewAngle])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const resetAnimation = () => {
    setViewAngle(0)
    setTimeScale([1])
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Visualization */}
        <Card className="lg:col-span-2 bg-black/40 backdrop-blur-md border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-400" />
              3D Orbital Visualization
            </CardTitle>
            <CardDescription className="text-blue-300">
              Interactive 3D view of satellite orbits around Earth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <canvas
                ref={canvasRef}
                width={600}
                height={400}
                className="w-full h-auto bg-black rounded-lg border border-blue-500/20"
              />

              {/* Controls Overlay */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                <Button
                  size="sm"
                  onClick={togglePlayPause}
                  className="bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button
                  size="sm"
                  onClick={resetAnimation}
                  className="bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>

              {/* Satellite Info Overlay */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20">
                <h3 className="text-white font-semibold mb-2">{selectedSatellite}</h3>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-blue-300">Altitude:</span>
                    <span className="text-white">
                      {satellites[selectedSatellite as keyof typeof satellites].altitude} km
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Inclination:</span>
                    <span className="text-white">
                      {satellites[selectedSatellite as keyof typeof satellites].inclination}°
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Period:</span>
                    <span className="text-white">
                      {satellites[selectedSatellite as keyof typeof satellites].period} min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Controls Panel */}
        <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Satellite className="w-5 h-5 mr-2 text-green-400" />
              Visualization Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-blue-200">Selected Satellite</Label>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(satellites).map((sat) => (
                  <Button
                    key={sat}
                    variant={selectedSatellite === sat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSatellite(sat)}
                    className={
                      selectedSatellite === sat ? "bg-blue-500/20 border-blue-400" : "border-blue-500/30 text-blue-300"
                    }
                  >
                    {sat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-blue-200">Time Scale: {timeScale[0]}x</Label>
              <Slider value={timeScale} onValueChange={setTimeScale} max={10} min={0.1} step={0.1} className="w-full" />
            </div>

            <div className="space-y-2">
              <Label className="text-blue-200">View Angle</Label>
              <Input
                type="range"
                min="0"
                max="360"
                value={viewAngle}
                onChange={(e) => setViewAngle(Number.parseFloat(e.target.value))}
                className="bg-black/50 border-blue-500/30"
              />
              <div className="text-xs text-blue-300 text-center">{viewAngle}°</div>
            </div>

            <div className="pt-4 border-t border-blue-500/20">
              <h3 className="text-white font-semibold mb-2">Legend</h3>
              <div className="space-y-2">
                {Object.entries(satellites).map(([name, sat]) => (
                  <div key={name} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sat.color }}></div>
                    <span className="text-blue-300 text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orbital Parameters */}
      <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Orbit className="w-5 h-5 mr-2 text-blue-400" />
            Orbital Parameters Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(satellites).map(([name, sat]) => (
              <div
                key={name}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  selectedSatellite === name
                    ? "bg-blue-500/20 border-blue-400"
                    : "bg-blue-500/10 border-blue-500/20 hover:border-blue-400/50"
                }`}
                onClick={() => setSelectedSatellite(name)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">{name}</h3>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sat.color }}></div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-300">Altitude:</span>
                    <span className="text-white">{sat.altitude} km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Inclination:</span>
                    <span className="text-white">{sat.inclination}°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-300">Period:</span>
                    <span className="text-white">{sat.period} min</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
