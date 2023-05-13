import { DialogTitle, MonetaryValue } from './entry-styles'
import { Button } from '@/components/atoms/button/button-comp'
import { DateText } from '@/components/atoms/date-text/date-comp'
import { EntriesContext } from '@/contexts/entries-context'
import { useContext } from 'react'

type EntryTypes = {
  item: {
    amount: number
    description: string
    type: string
    date: string
    _id: string
  }
  closeModal: () => void
}

export const EditEntryDialog = ({ item, closeModal }: EntryTypes) => {
  const { deleteEntry } = useContext(EntriesContext)
  const handleClick = () => {
    closeModal()
    deleteEntry(item._id)
  }

  return (
    <div className={`flex flex-col gap-4`}>
      <span className={DialogTitle()}>Entry</span>{' '}
      <div className="flex flex-col gap-1">
        <DateText value={item.date} />
        <span className={MonetaryValue(item.type)}>
          {item.amount.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>
      <p className="max-w-[200px] hyphens-auto text-sm italic">
        {item.description}
      </p>
      <Button onClick={handleClick}>Delete entry</Button>
    </div>
  )
}
