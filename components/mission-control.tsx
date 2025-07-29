"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, Rocket, Radio, Battery, Thermometer, Gauge, CheckCircle, Clock, Satellite } from "lucide-react"

interface MissionControlProps {
  telemetryData?: any
}

export function MissionControl({ telemetryData }: MissionControlProps) {
  const [selectedMission, setSelectedMission] = useState("QS-001")
  const [realTimeTelemetry, setRealTimeTelemetry] = useState<any>(null)

  useEffect(() => {
    if (telemetryData) {
      setRealTimeTelemetry(telemetryData)
    }
  }, [telemetryData])

  const missions = {
    "QS-001": {
      name: "Quantum Satellite Alpha",
      status: "Active",
      progress: 87,
      launchDate: "2024-01-15",
      telemetry: realTimeTelemetry || {
        altitude: 408,
        velocity: 27600,
        battery: 94,
        temperature: -15,
        signalStrength: 89,
        dataRate: 2.4,
      },
      objectives: [
        { task: "Orbital insertion", completed: true },
        { task: "Solar panel deployment", completed: true },
        { task: "Communication test", completed: true },
        { task: "Quantum processor calibration", completed: false },
        { task: "Science operations", completed: false },
      ],
    },
    "QS-002": {
      name: "Orbital Mechanics Test",
      status: "Pending",
      progress: 45,
      launchDate: "2024-03-20",
      telemetry: {
        altitude: 0,
        velocity: 0,
        battery: 100,
        temperature: 22,
        signalStrength: 0,
        dataRate: 0,
      },
      objectives: [
        { task: "Pre-flight checks", completed: true },
        { task: "Fuel loading", completed: true },
        { task: "Launch sequence", completed: false },
        { task: "Orbital insertion", completed: false },
        { task: "Mission operations", completed: false },
      ],
    },
    "QS-003": {
      name: "Deep Space Probe",
      status: "Complete",
      progress: 100,
      launchDate: "2023-08-10",
      telemetry: {
        altitude: 150000,
        velocity: 11200,
        battery: 67,
        temperature: -180,
        signalStrength: 23,
        dataRate: 0.1,
      },
      objectives: [
        { task: "Launch and escape", completed: true },
        { task: "Course corrections", completed: true },
        { task: "Deep space operations", completed: true },
        { task: "Data transmission", completed: true },
        { task: "Mission completion", completed: true },
      ],
    },
    "QS-004": {
      name: "Mars Communication Relay",
      status: "Active",
      progress: 72,
      launchDate: "2024-02-01",
      telemetry: {
        altitude: 35786,
        velocity: 11070,
        battery: 88,
        temperature: -45,
        signalStrength: 76,
        dataRate: 1.8,
      },
      objectives: [
        { task: "Launch and transit", completed: true },
        { task: "Mars orbit insertion", completed: true },
        { task: "Communication array deployment", completed: true },
        { task: "Relay operations", completed: false },
        { task: "Extended mission", completed: false },
      ],
    },
  }

  const currentMission = missions[selectedMission as keyof typeof missions]

  return (
    <div className="space-y-6">
      {/* Mission Selection */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(missions).map(([id, mission]) => (
          <Button
            key={id}
            variant={selectedMission === id ? "default" : "outline"}
            onClick={() => setSelectedMission(id)}
            className={selectedMission === id ? "bg-blue-500/20 border-blue-400" : "border-blue-500/30 text-blue-300"}
          >
            <Satellite className="w-4 h-4 mr-2" />
            {mission.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mission Overview */}
        <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Target className="w-5 h-5 mr-2 text-blue-400" />
              Mission Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white">{currentMission.name}</h3>
              <p className="text-blue-300 text-sm">Mission ID: {selectedMission}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-blue-300">Status:</span>
              <Badge
                className={
                  currentMission.status === "Active"
                    ? "bg-green-500/20 text-green-400 border-green-500/30"
                    : currentMission.status === "Complete"
                      ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                      : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                }
              >
                {currentMission.status}
              </Badge>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-blue-300">Progress:</span>
                <span className="text-white">{currentMission.progress}%</span>
              </div>
              <Progress value={currentMission.progress} className="h-2" />
            </div>

            <div className="flex justify-between">
              <span className="text-blue-300">Launch Date:</span>
              <span className="text-white">{currentMission.launchDate}</span>
            </div>

            {realTimeTelemetry && selectedMission === "QS-001" && (
              <div className="pt-2 border-t border-blue-500/20">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Live Data Active</Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Telemetry Data */}
        <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Radio className="w-5 h-5 mr-2 text-green-400" />
              Live Telemetry
              {realTimeTelemetry && selectedMission === "QS-001" && (
                <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Gauge className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-300">Altitude:</span>
              </div>
              <span className="text-white font-mono">
                {currentMission.telemetry?.altitude ? currentMission.telemetry.altitude.toFixed(1) : "0.0"} km
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Rocket className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-300">Velocity:</span>
              </div>
              <span className="text-white font-mono">
                {currentMission.telemetry?.velocity ? currentMission.telemetry.velocity.toFixed(0) : "0"} km/h
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Battery className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-blue-300">Battery:</span>
              </div>
              <span className="text-white font-mono">
                {currentMission.telemetry?.battery ? currentMission.telemetry.battery.toFixed(1) : "0.0"}%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Thermometer className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-blue-300">Temperature:</span>
              </div>
              <span className="text-white font-mono">
                {currentMission.telemetry?.temperature ? currentMission.telemetry.temperature.toFixed(1) : "0.0"}°C
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Radio className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-blue-300">Signal:</span>
              </div>
              <span className="text-white font-mono">
                {currentMission.telemetry?.signalStrength ? currentMission.telemetry.signalStrength.toFixed(1) : "0.0"}%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Target className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-blue-300">Data Rate:</span>
              </div>
              <span className="text-white font-mono">
                {currentMission.telemetry?.dataRate ? currentMission.telemetry.dataRate.toFixed(1) : "0.0"} Mbps
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Mission Objectives */}
        <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              Mission Objectives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentMission.objectives.map((objective, index) => (
              <div key={index} className="flex items-center space-x-3">
                {objective.completed ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <Clock className="w-4 h-4 text-yellow-400" />
                )}
                <span className={`text-sm ${objective.completed ? "text-white" : "text-blue-300"}`}>
                  {objective.task}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Mission Timeline */}
      <Card className="bg-black/40 backdrop-blur-md border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-white">Mission Timeline</CardTitle>
          <CardDescription className="text-blue-300">
            Key events and milestones for {currentMission.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
              <div>
                <p className="text-white font-medium">Mission Launch</p>
                <p className="text-blue-300 text-sm">
                  {currentMission.launchDate} - Successfully launched from Cape Canaveral
                </p>
              </div>
            </div>

            {currentMission.status === "Active" && (
              <>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-medium">Orbital Operations</p>
                    <p className="text-blue-300 text-sm">Currently conducting science operations and data collection</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-medium">Next Milestone</p>
                    <p className="text-blue-300 text-sm">
                      {selectedMission === "QS-001"
                        ? "Quantum processor calibration scheduled for next week"
                        : "Mission operations phase beginning soon"}
                    </p>
                  </div>
                </div>
              </>
            )}

            {currentMission.status === "Complete" && (
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white font-medium">Mission Complete</p>
                  <p className="text-blue-300 text-sm">All objectives achieved successfully</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
