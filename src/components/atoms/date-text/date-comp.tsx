import { DateStyle } from './date-styles'

type DateProps = {
  value: Date | string
}

const formatMonth = (month: number) => {
  const monthList = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ]
  return monthList[month]
}

export const DateText = ({ value }: DateProps) => {
  return (
    <span className={DateStyle()}>
      {`${formatMonth(new Date(value).getMonth())} 
          ${new Date(value).getDate()}`}
    </span>
  )
}
