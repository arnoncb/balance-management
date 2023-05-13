import { Card } from '@/components/atoms/card/card-comp'
import { Button } from '@/components/atoms/button/button-comp'
import { NavBar } from '@/components/atoms/nav-bar/nav-comp'
import { CardTitle, EntryList } from './entries-styles'
import { Entry } from '../entry-list-item/item-comp'
import { useState } from 'react'
import { Modal } from '../modal/modal-comp'
import { NewEntryDialog } from '@/components/organisms/new-entry-dialog/dialog-comp'

type EntriesProps = {
  entries?:
    | {
        amount: number
        description: string
        type: string
        date: string
        _id: string
      }[]
    | null
}

export const EntriesCard = ({ entries }: EntriesProps) => {
  const [entriesFilter, setEntriesFilter] = useState('all')
  const [modalVisibility, setModalVisibility] = useState(false)

  const handleEntriesFilter = (filter: string) => {
    setEntriesFilter(filter)
  }

  const toggleModal = () => {
    setModalVisibility((modalVisibility) => !modalVisibility)
  }

  const entryFilter = [
    {
      name: 'entry-filter',
      id: 'all',
      label: 'All',
      onClick: () => handleEntriesFilter('all'),
      selected: entriesFilter,
    },
    {
      name: 'entry-filter',
      id: 'income',
      label: 'Income',
      onClick: () => handleEntriesFilter('income'),
      selected: entriesFilter,
    },
    {
      name: 'entry-filter',
      id: 'expense',
      label: 'Expense',
      onClick: () => handleEntriesFilter('expense'),
      selected: entriesFilter,
    },
  ]

  return (
    <>
      <Card width="grow" height="max-h-[70vh]">
        <span className={CardTitle()}>Entries</span>
        {entries && entries?.length > 0 ? (
          <>
            <NavBar items={entryFilter} />
            <div className={EntryList()}>
              {entries
                ?.filter(
                  (entry) =>
                    // eslint-disable-next-line prettier/prettier
                    entry.type === entriesFilter || entriesFilter === 'all'
                )
                .map((entry, index) => {
                  return (
                    <Entry
                      key={`${index}-${entry.amount}`}
                      item={entry}
                    ></Entry>
                  )
                })}
            </div>
          </>
        ) : (
          <span className="grow text-center m-8 font-semibold text-zinc-400">
            No entries yet
          </span>
        )}
        <Button onClick={toggleModal}>New entry</Button>
      </Card>
      {modalVisibility && (
        <Modal onClick={toggleModal}>
          <NewEntryDialog />
        </Modal>
      )}
    </>
  )
}
