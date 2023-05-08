type StyleProps = {
  color?: string
}

export const PageWrapperStyles = ({ color }: StyleProps) => {
  return `
  ${color || "bg-gray-300"}
  h-screen
  flex
  items-center
  justify-center`
}
