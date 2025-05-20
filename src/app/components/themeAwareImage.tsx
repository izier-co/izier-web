'use client'

import { useTheme } from 'next-themes'

type ThemeAwareImageProps = {
  lightModeComponent: React.ReactNode
  darkModeComponent: React.ReactNode
}

const ThemeAwareImage = ({ lightModeComponent, darkModeComponent }: ThemeAwareImageProps) => {
  const { theme } = useTheme()
  const className = 'grid grid-cols-2 md:grid-cols-5 grid-rows-3 md:grid-rows-5 h-fit w-full'
  switch (theme) {
    case 'dark':
      return <div className={className}>{darkModeComponent}</div>
    case 'light':
      return <div className={className}>{lightModeComponent}</div>
    default:
      return <div className={className}>{lightModeComponent}</div>
  }
}

export default ThemeAwareImage
