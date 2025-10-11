// src/components/theme-provider.jsx
import React, { createContext, useContext, useState, useEffect } from "react"

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
})

export function ThemeProvider({ children, defaultTheme = "light", enableSystem = true, disableTransitionOnChange = false, ...props }) {
  const [theme, setTheme] = useState(defaultTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (enableSystem) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      setTheme(mediaQuery.matches ? "dark" : "light")
      const handleChange = (e) => setTheme(e.matches ? "dark" : "light")
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [enableSystem])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    if (disableTransitionOnChange) {
      root.style.transition = "none"
      root.classList.add(theme)
      requestAnimationFrame(() => {
        root.style.transition = ""
      })
    }
  }, [theme, mounted, disableTransitionOnChange])

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme)
    },
  }

  return (
    <ThemeContext.Provider value={value} {...props}>
      {mounted ? children : children}
    </ThemeContext.Provider>
  )
}