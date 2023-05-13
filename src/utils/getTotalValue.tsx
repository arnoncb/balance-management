type EntriesProps = {
  entries?:
    | {
        amount: number
        type: string
        date: string
        description: string
      }[]
    | null
}

export const getTotal = {
  balance: ({ entries }: EntriesProps) => {
    return entries?.reduce((sum = 0, entry) => {
      if (entry.type === 'income') return (sum += entry.amount)
      return (sum -= entry.amount)
    }, 0)
  },
  income: ({ entries }: EntriesProps) => {
    return entries
      ?.filter((entry) => entry.type === 'income')
      .reduce((sum = 0, entry) => {
        return (sum += entry.amount)
      }, 0)
  },
  expense: ({ entries }: EntriesProps) => {
    return entries
      ?.filter((entry) => entry.type === 'expense')
      .reduce((sum = 0, entry) => {
        return (sum += entry.amount)
      }, 0)
  },
}
