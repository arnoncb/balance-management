import { ReactNode } from "react"
import { MonetaryValue, CardTitle } from "./card-styles"
import Hide from "@/icons/hide.svg"
import Show from "@/icons/show.svg"
import { Card } from "@/components/atoms/card/card-comp"

import Image from "next/image"

type CardProps = {
  title: string
  value: number
}

export const InfoCard = ({ title, value }: CardProps) => {
  return (
    <Card minWidth="320" padding="8">
      <div className={`flex flex-col justify-start gap-4`}>
        <span className={CardTitle()}>{title}</span>
        <div className={`flex items-center justify-start gap-3`}>
          <Image src={Show} alt="Avatar icon" />
          <span className={MonetaryValue()}>
            {value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
    </Card>
  )
}
