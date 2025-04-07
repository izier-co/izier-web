import CustomLink from './customLink'

type ServiceListProps = {
  href: string
  children?: React.ReactNode
}

const ServiceList = ({ href, children }: ServiceListProps) => {
  return (
    <div>
      <ul className="grid grid-cols-2 grid-rows-3 gap-x-12 gap-y-4 w-fit list-inside list-disc list-image-[url('/lists-icon-light.svg')] dark:list-image-[url('/lists-icon-dark.svg')] align-middle">
        <li className="w-fit">
          <CustomLink href={href} target="_self">
            {children}
          </CustomLink>
        </li>
      </ul>
    </div>
  )
}

export default ServiceList
