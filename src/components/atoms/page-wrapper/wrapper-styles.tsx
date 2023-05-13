type StyleProps = {
  color?: string
  withNav?: boolean
}

export const PageWrapperStyles = ({ color, withNav }: StyleProps) => {
  return `
  ${color || 'bg-gray-300'}
  ${withNav && 'pt-[72px]'}
  md:pt-0
  p-4
  flex
  grow
  h-full
  flex-wrap
  gap-4
  items-center
  justify-center`
}
