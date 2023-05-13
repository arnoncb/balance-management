export const DialogTitle = () => {
  return `
  text-lg
  font-semibold
  text-indigo-700
  `
}

export const MonetaryValue = (type: string) => {
  return `
  ${type === 'income' ? 'text-green-600' : 'text-red-600'}
  text-3xl
  font-bold
  truncate
  `
}
