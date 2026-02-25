import { cookies } from "next/headers"
import { adminUser } from "./db"

const SESSION_COOKIE = "admin_session"

export async function login(email: string, password: string) {
  if (email !== adminUser.email || password !== adminUser.password) {
    return null
  }

  const sessionToken = crypto.randomUUID()
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, `admin:${sessionToken}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
    path: "/",
  })

  return { id: adminUser.id, email: adminUser.email, name: adminUser.name }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)
  if (!session) return null
  return { id: adminUser.id, email: adminUser.email, name: adminUser.name }
}
