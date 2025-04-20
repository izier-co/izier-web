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
