import { PageWrapper } from '@/components/atoms/page-wrapper/wrapper-comp'
import { Header } from '@/components/molecules/header/header-comp'
import Logo from '@/icons/logo.svg'
import Image from 'next/image'
import { ProfileButton } from '@/components/molecules/profile-button/profile-comp'
import MainContent from '@/components/organisms/home-content/content-comp'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { EntriesProvider } from '@/contexts/entries-context'

export default function Home() {
  if (!cookies().get('balanceManagementToken')) {
    redirect('/login')
  }
  return (
    <div className={`flex flex-col h-screen`}>
      <Header>
        <Image className={`w-24`} src={Logo} alt="App logo" />
        <ProfileButton />
      </Header>
      <PageWrapper withNav>
        <EntriesProvider>
          <MainContent />
        </EntriesProvider>
      </PageWrapper>
    </div>
  )
}
