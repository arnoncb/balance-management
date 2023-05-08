import { ButtonStyles } from "./button-styles"

type ButtonProps = {
  type?: "submit"
  children: string
  compact?: boolean
}

export const Button = ({ type, children, compact = false }: ButtonProps) => {
  return (
    <button type={type} className={ButtonStyles({ compact })}>
      {children}
    </button>
  )
}
