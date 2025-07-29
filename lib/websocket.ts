"use client"

import { useEffect, useState } from "react"

export function useWebSocket(url: string) {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [lastMessage, setLastMessage] = useState<any>(null)
  const [connectionStatus, setConnectionStatus] = useState<"Connecting" | "Open" | "Closing" | "Closed">("Closed")

  useEffect(() => {
    // Create mock WebSocket for demo
    const mockSocket = {
      readyState: WebSocket.OPEN,
      send: (data: string) => console.log("Sending:", data),
      close: () => setConnectionStatus("Closed"),
      addEventListener: (event: string, handler: Function) => {
        if (event === "open") {
          setTimeout(() => handler({}), 100)
        }
      },
      removeEventListener: () => {},
    } as any

    setSocket(mockSocket)
    setConnectionStatus("Open")

    // Simulate real-time data
    const interval = setInterval(() => {
      const mockData = {
        type: "telemetry",
        data: {
          altitude: 400 + Math.random() * 20,
          velocity: 27600 + Math.random() * 100,
          battery: 90 + Math.random() * 10,
          temperature: -15 + Math.random() * 5,
          signal_strength: 85 + Math.random() * 15,
          data_rate: 2.0 + Math.random() * 1,
          timestamp: new Date().toISOString(),
        },
      }
      setLastMessage(mockData)
    }, 2000)

    return () => {
      clearInterval(interval)
      setConnectionStatus("Closed")
    }
  }, [url])

  const sendMessage = (message: any) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message))
    }
  }

  return { socket, lastMessage, connectionStatus, sendMessage }
}
