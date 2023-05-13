import React, { ReactNode } from 'react'
import { ModalStyles } from './modal-styles'
import { Card } from '@/components/atoms/card/card-comp'

type ModalProps = {
  children: ReactNode
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Modal = ({ children, onClick }: ModalProps) => {
  return (
    <div className={ModalStyles()} onClick={onClick}>
      <Card width="min-w-[80%] sm:min-w-[320px]">{children}</Card>
    </div>
  )
}
