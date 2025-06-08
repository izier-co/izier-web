type TextProps = {
  children?: React.ReactNode
}

export const Text = ({ children }: TextProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-light text-light-gray-11 dark:text-dark-gray-11">{children}</p>
    </div>
  )
}

export const Highlight = ({ children }: TextProps) => {
  return <span className="font-bold text-light-gray-12 dark:text-dark-gray-12">{children}</span>
}
