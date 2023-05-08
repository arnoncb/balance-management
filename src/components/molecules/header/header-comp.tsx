import { ReactNode } from "react"
import { HeaderStyles } from "./header-styles"

type ButtonProps = {
  children: ReactNode
}

export const Header = ({ children }: ButtonProps) => {
  return <div className={`${HeaderStyles()}`}>{children}</div>
}
