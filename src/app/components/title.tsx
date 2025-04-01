type TitleProps = {
  text: string
}

const Title = ({ text }: TitleProps) => {
  return <h1 className="font-medium pl-4 border-l-4">{text}</h1>
}

export default Title
