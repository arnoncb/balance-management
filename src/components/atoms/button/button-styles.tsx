type StyleProps = {
  compact: boolean
}

export const ButtonStyles = ({ compact }: StyleProps) => {
  return `
    hover:cursor-pointer    
    text-sm
    px-7
    font-semibold
    ${
      compact
        ? `rounded-xl py-2 min-w-[100px] border rounded-xl
           border-zinc-300 text-zinc-900`
        : `rounded-lg py-3 min-w-[240px] bg-zinc-900 text-zinc-50`
    }
  `
}
