import { PageWrapper } from "@/components/atoms/page-wrapper/wrapper-comp"
import { Header } from "@/components/molecules/header/header-comp"
import { HomeStyles as style } from "./styles"
import Avatar from "@/icons/profile-avatar.svg"
import Logo from "@/icons/logo.svg"
import Image from "next/image"
import { Card } from "@/components/atoms/card/card-comp"
import { InfoCard } from "@/components/molecules/info-card/card-comp"

export default function Home() {
  return (
    <PageWrapper color="bg-zinc-800">
      <Header>
        <Image src={Logo} alt="App logo" />
        <div className={style.profileContainer}>
          <Image src={Avatar} alt="Avatar icon" />
          <span className={style.profileLabel}>Arnon</span>
        </div>
      </Header>
      <div className={`flex flex-col gap-4`}>
        <InfoCard title="Balance" value={27700} />
        <InfoCard title="Total income" value={37700} />
        <InfoCard title="Total expense" value={10000} />
      </div>
    </PageWrapper>
  )
}
