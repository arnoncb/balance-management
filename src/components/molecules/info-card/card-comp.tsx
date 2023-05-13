import { MonetaryValue, CardTitle } from './card-styles'
import Hide from '@/icons/hide.svg'
import Show from '@/icons/show.svg'
import { Card } from '@/components/atoms/card/card-comp'

import Image from 'next/image'
import { useState } from 'react'

type CardProps = {
  title: string
  value: number | undefined
}

export const InfoCard = ({ title, value }: CardProps) => {
  const [hidden, setHidden] = useState(false)

  const toggleHidden = () => {
    setHidden((hidden) => !hidden)
  }

  return (
    <Card width="md:min-w-[320px] grow" padding="p-7">
      <div className={`flex flex-col justify-start gap-4`}>
        <span className={CardTitle()}>{title}</span>
        <div className={`flex items-center justify-start gap-3`}>
          <Image
            src={hidden ? Hide : Show}
            alt="Avatar icon"
            onClick={toggleHidden}
          />
          {hidden ? (
            <div className="h-9 w-full bg-zinc-300 rounded-lg" />
          ) : (
            <span className={MonetaryValue()}>
              {value?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}
