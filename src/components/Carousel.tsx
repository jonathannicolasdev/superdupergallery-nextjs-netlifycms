type Props = {
  count?: number
}

export default function Carousel({ count }: Props) {
  return (
    <div>
      <h1>Carousel {count}</h1>
    </div>
  )
}
