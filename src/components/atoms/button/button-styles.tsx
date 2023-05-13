type StyleProps = {
  compact: boolean
  selected: boolean
}

export const ButtonStyles = ({ compact, selected }: StyleProps) => {
  return `
    hover:cursor-pointer    
    text-sm    
    font-semibold
    text-zinc-50
    ${selected ? 'bg-indigo-700' : 'bg-zinc-900'}
    ${
      compact
        ? `rounded-xl py-2 rounded-xl grow`
        : `rounded-lg py-3 min-w-[240px] px-7`
    }
  `
}
