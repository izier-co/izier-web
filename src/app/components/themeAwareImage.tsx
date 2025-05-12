'use client'

import { useTheme } from 'next-themes'

type ThemeAwareImageProps = {
  lightModeComponent: React.ReactNode
  darkModeComponent: React.ReactNode
}

const ThemeAwareImage = ({ lightModeComponent, darkModeComponent }: ThemeAwareImageProps) => {
  const { theme } = useTheme()
  switch (theme) {
    case 'dark':
      return (
        <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 md:grid-rows-5 h-fit w-full">
          {darkModeComponent}
        </div>
      )
    case 'light':
      return (
        <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 md:grid-rows-5 h-fit w-full">
          {lightModeComponent}
        </div>
      )
    default:
      return (
        <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 md:grid-rows-5 h-fit w-full">
          {lightModeComponent}
        </div>
      )
  }
}

export default ThemeAwareImage
