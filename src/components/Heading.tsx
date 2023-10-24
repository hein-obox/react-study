interface Props {
  title: string;
  timeStamp: number;
}

const Heading = ( { title, timeStamp }: Props) => {
  return (
    <div>Heading {title} {timeStamp}</div>
  )
}

export default Heading;