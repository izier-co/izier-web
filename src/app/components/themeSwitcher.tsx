'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-row gap-4">
      <span className="sr-only">Select Theme</span>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  )
}

export default ThemeSwitcher
