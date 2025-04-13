import CustomLink from './customLink'

type ServiceProps = {
  children?: React.ReactNode
  className?: string
}

type ServiceListProps = ServiceProps & {
  href: string
}

export const Service = ({ children, className }: ServiceProps) => {
  return <div className={`${className}`}>{children}</div>
}

export const ServiceText = ({ children }: ServiceProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-light text-light-gray-11 dark:text-dark-gray-11">{children}</p>
    </div>
  )
}

export const ServiceList = ({ href, children }: ServiceListProps) => {
  return (
    <div>
      <ul className="h-fit w-fit list-inside list-disc list-image-[url('/lists-icon-light.svg')] dark:list-image-[url('/lists-icon-dark.svg')] align-middle">
        <li className="w-fit h-fit">
          <CustomLink href={href} target="_self">
            {children}
          </CustomLink>
        </li>
      </ul>
    </div>
  )
}
