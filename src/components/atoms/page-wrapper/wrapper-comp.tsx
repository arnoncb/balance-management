'use client'

import { ReactNode } from 'react'
import { PageWrapperStyles } from './wrapper-styles'

type BoxProps = {
  children: ReactNode
  color?: string
  withNav?: boolean
}

export const PageWrapper = ({ children, color, withNav = false }: BoxProps) => {
  return <div className={PageWrapperStyles({ color, withNav })}>{children}</div>
}
