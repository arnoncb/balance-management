import React from 'react'
import { Button } from '../button/button-comp'

type RadioProps = {
  items: {
    name: string
    id: string
    value?: string
    label: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
    selected: string
  }[]
}

export const NavBar = ({ items }: RadioProps) => {
  return (
    <div className={`my-2 w-full flex flex-wrap gap-2`}>
      {items.map((item) => (
        <div className={`flex grow gap-2`} key={item.id}>
          <Button
            onClick={item.onClick}
            selected={item.selected === item.id}
            compact
          >
            {item.label}
          </Button>
        </div>
      ))}
    </div>
  )
}
