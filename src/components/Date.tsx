import { format, formatISO } from 'date-fns'
import { styled } from '../../stitches.config'

type Props = {
  date: Date
}

export default function Date({ date }: Props) {
  const DateTimeText = styled('span', {
    color: 'white',
  })

  return (
    <time dateTime={formatISO(date)}>
      <DateTimeText>{format(date, 'LLLL d, yyyy')}</DateTimeText>
    </time>
  )
}
