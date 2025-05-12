import ThemeAwareImage from '@/components/themeAwareImage'
import { LogoDark, LogoLight } from '@/components/logo'

type TechStackProps = {
  children?: React.ReactNode
  className?: string
}

export const TechStack = ({ children, className }: TechStackProps) => {
  return <div className={className}>{children}</div>
}

export const TechStackImageGrid = ({ children }: TechStackProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 md:grid-rows-5 h-fit w-full">
      {children}
    </div>
  )
}

export const TechStackImage = () => {
  return (
    <>
      <ThemeAwareImage
        lightModeComponent={
          <LogoLight
            className="border-[.8px] border-brand-black dark:border-white relative h-48 mx-auto w-full flex justify-center items-center px-8"
            useAs="tech-stack-image"
          />
        }
        darkModeComponent={
          <LogoDark
            className="border-[.8px] border-brand-black dark:border-white relative h-48 mx-auto w-full flex justify-center items-center px-8"
            useAs="tech-stack-image"
          />
        }
      />
    </>
  )
}
