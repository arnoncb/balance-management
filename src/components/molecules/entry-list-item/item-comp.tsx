import { useState } from 'react'
import { EntryItem, EntryValue } from './item-styles'
import { Modal } from '../modal/modal-comp'
import { EditEntryDialog } from '@/components/organisms/edit-entry-dialog/entry-comp'
import { DateText } from '@/components/atoms/date-text/date-comp'

type EntryProps = {
  item: {
    amount: number
    description: string
    type: string
    date: string
    _id: string
  }
}

export const Entry = ({ item }: EntryProps) => {
  const [modalVisibility, setModalVisibility] = useState(false)

  const toggleModal = () => {
    setModalVisibility((modalVisibility) => !modalVisibility)
  }

  return (
    <>
      <div onClick={toggleModal} className={EntryItem()}>
        <span className={EntryValue(item.type)}>
          {item.amount.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <DateText value={item.date} />
      </div>
      {modalVisibility && (
        <Modal onClick={toggleModal}>
          <EditEntryDialog item={item} closeModal={toggleModal} />
        </Modal>
      )}
    </>
  )
}
