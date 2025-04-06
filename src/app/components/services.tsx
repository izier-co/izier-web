type ServiceProps = {
  children?: React.ReactNode
}

const Service = ({ children }: ServiceProps) => {
  return <p className="font-light text-light-gray-11 dark:text-dark-gray-11">{children}</p>
}

export default Service
