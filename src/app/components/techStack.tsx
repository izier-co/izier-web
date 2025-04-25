import Image from 'next/image'
import type { ImageProps } from 'next/image'

type TechStackProps = {
  children?: React.ReactNode
  className?: string
}

type TechStackImageProps = ImageProps & TechStackProps

export const TechStack = ({ children, className }: TechStackProps) => {
  return <div className={className}>{children}</div>
}

export const TechStackImageGrid = ({ children }: TechStackProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-5 md:grid-rows-2 h-fit w-full">
      {children}
    </div>
  )
}

export const TechStackImage = ({ ...props }: TechStackImageProps) => {
  return (
    <>
      <div className="border-[.8px] border-white relative h-48 mx-auto w-full flex justify-center items-center">
        <Image
          className="w-3/4"
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </div>
    </>
  )
}
