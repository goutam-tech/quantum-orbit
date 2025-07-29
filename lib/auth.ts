import type { User } from "./supabase"

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  try {
    // For demo purposes, create a mock user
    const mockUser: User = {
      id: "1",
      email,
      name: email.split("@")[0],
      role: "commander",
      created_at: new Date().toISOString(),
    }

    // In a real app, you would use Supabase auth:
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email,
    //   password,
    // })

    return mockUser
  } catch (error) {
    console.error("Authentication error:", error)
    return null
  }
}

export async function signOut() {
  localStorage.removeItem("user")
  // In a real app: await supabase.auth.signOut()
}
