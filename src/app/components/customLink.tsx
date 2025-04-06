import Link from 'next/link'

type LinkProps = {
  target?: '_blank' | '_self'
  href: string
  children?: React.ReactNode
}

const CustomLink = ({ href, children, target }: LinkProps) => {
  return (
    <Link
      href={href}
      target={target}
      className="text-light-green-11 dark:text-dark-green-11 hover:text-light-green-12 dark:hover:text-dark-green-12 hover:underline visited:text-ligth-green-5"
    >
      {children}
    </Link>
  )
}

export default CustomLink
