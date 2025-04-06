type TitleProps = {
  text: string
}

const Title = ({ text }: TitleProps) => {
  return (
    <h1 className="border-light-green-10 font-medium -mx-4 pl-4 border-l-4 text-light-gray-12 dark:text-dark-gray-12">
      {text}
    </h1>
  )
}

export default Title
