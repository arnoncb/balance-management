import { Button } from "@/components/atoms/button/button-comp"
import { LoginStyles as style } from "./styles"
import { PageWrapper } from "@/components/atoms/page-wrapper/wrapper-comp"
import { Card } from "@/components/atoms/card/card-comp"
import { TextInput } from "@/components/atoms/text-input/input-comp"

export default function Home() {
  return (
    <PageWrapper>
      <Card>
        <div className={style.head}>
          <h1 className={style.appTitle}>e-Wallet</h1>
          <h2 className={style.subtitle}>Manage your money</h2>
        </div>
        <div className={style.buttonsContainer}>
          <Button compact>Sign up</Button>
          <Button compact>Login</Button>
        </div>
        <form className={style.form}>
          <TextInput placeholder="Full name" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Password" />
          <TextInput placeholder="Confirm password" />
          <Button type="submit">Get started</Button>
        </form>
      </Card>
    </PageWrapper>
  )
}
