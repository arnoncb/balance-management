import { InputStyles } from "./input-styles"

type InputProps = {
  placeholder: string
}

export const TextInput = ({ placeholder }: InputProps) => {
  return (
    <input type="text" placeholder={placeholder} className={InputStyles()} />
  )
}
