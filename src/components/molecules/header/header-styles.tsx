type StyleProps = {
  compact: boolean
}

export const HeaderStyles = () => {
  return `
    flex
    fixed
    top-0
    items-center
    justify-between
    bg-zinc-900
    w-screen
    text-sm
    px-8
    h-[64px]
    font-semibold
  `
}
