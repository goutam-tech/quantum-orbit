import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co"
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key"

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Mission = {
  id: string
  name: string
  status: "Active" | "Pending" | "Complete" | "Failed"
  progress: number
  launch_date: string
  created_at: string
  updated_at: string
  telemetry: {
    altitude: number
    velocity: number
    battery: number
    temperature: number
    signal_strength: number
    data_rate: number
  }
  objectives: Array<{
    task: string
    completed: boolean
  }>
}

export type TelemetryData = {
  id: string
  mission_id: string
  timestamp: string
  altitude: number
  velocity: number
  battery: number
  temperature: number
  signal_strength: number
  data_rate: number
}

export type User = {
  id: string
  email: string
  name: string
  role: "commander" | "operator" | "analyst"
  created_at: string
}
