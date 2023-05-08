type StyleProps = {
  minWidth?: string
  padding?: string
}

export const CardStyles = ({ minWidth, padding }: StyleProps) => {
  return `
  bg-white
  max-w-[440px]
  min-w-[${minWidth}px]
  rounded-3xl
  p-${padding}
  shadow-lg`
}
