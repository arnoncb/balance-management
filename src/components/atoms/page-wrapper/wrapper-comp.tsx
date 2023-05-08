import { ReactNode } from "react"
import { PageWrapperStyles } from "./wrapper-styles"

type BoxProps = {
  children: ReactNode
  color?: string
}

export const PageWrapper = ({ children, color }: BoxProps) => {
  return <div className={PageWrapperStyles({ color })}>{children}</div>
}
