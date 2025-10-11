import React from "react"
import { Outlet } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function MainLayout() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground font-sans antialiased scroll-smooth">
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  )
}