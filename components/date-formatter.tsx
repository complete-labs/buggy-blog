import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = dateString ? 0 : parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL dd, yyyy')}</time>
}

export default DateFormatter
