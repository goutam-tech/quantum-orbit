"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { authenticateUser } from "@/lib/auth"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const user = await authenticateUser(email, password)
      if (user) {
        localStorage.setItem("user", JSON.stringify(user))
        router.push("/dashboard")
      }
    } catch (error) {
      console.error("Authentication failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Space Background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      {/* Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="orbital-ring orbital-ring-1"></div>
        <div className="orbital-ring orbital-ring-2"></div>
        <div className="orbital-ring orbital-ring-3"></div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md bg-black/80 backdrop-blur-md border-blue-500/30 shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-blue-500/20 border border-blue-500/30">
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-white">Aerospace Command Center</CardTitle>
            <CardDescription className="text-blue-200">Access quantum orbital mechanics dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-200">
                  Mission Control ID
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="commander@aerospace.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/50 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-200">
                  Access Code
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/50 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-400"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-4 h-4 mr-2" />
                {isLoading ? "Initializing..." : "Initialize Quantum Systems"}
              </Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-blue-300/70 text-sm">Demo credentials: any email and password</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fillOpacity='0.8'%3E%3Cpolygon fill='%23ffffff' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E") repeat;
          background-size: 200px 200px;
          animation: move-stars 20s linear infinite;
        }

        .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='%23ffffff' fillOpacity='0.6'%3E%3Cpolygon points='100 0 120 80 200 100 120 120 100 200 80 120 0 100 80 80'/%3E%3C/g%3E%3C/svg%3E") repeat;
          background-size: 300px 300px;
          animation: move-twinkling 15s linear infinite;
        }

        .orbital-ring {
          position: absolute;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          animation: rotate 20s linear infinite;
        }

        .orbital-ring-1 {
          width: 300px;
          height: 300px;
          animation-duration: 20s;
        }

        .orbital-ring-2 {
          width: 500px;
          height: 500px;
          animation-duration: 30s;
          animation-direction: reverse;
        }

        .orbital-ring-3 {
          width: 700px;
          height: 700px;
          animation-duration: 40s;
        }

        @keyframes move-stars {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }

        @keyframes move-twinkling {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
