export const EntryItem = () => {
  return `
  flex
  justify-between
  cursor-pointer
  `
}

export const EntryValue = (type: string) => {
  return `
  ${type === 'income' ? 'text-green-600' : 'text-red-600'}
  text-lg
  font-bold
  
  `
}

export const EntryDate = () => {
  return `
  text-zinc-600
  text-lg
  font-medium
  `
}
