type StyleProps = {
  width?: string
  padding?: string
  height?: string
}

export const CardStyles = ({ width, height, padding }: StyleProps) => {
  return `
  ${width}
  ${height}
  ${padding}
  flex
  flex-col
  justify-center
  bg-white  
  rounded-3xl
  shadow-lg`
}
