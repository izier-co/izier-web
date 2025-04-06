type ValuePropositionProps = {
  children?: React.ReactNode
}

const ValueProposition = ({ children }: ValuePropositionProps) => {
  return <p className="font-light text-light-gray-11 dark:text-dark-gray-11">{children}</p>
}

export default ValueProposition
