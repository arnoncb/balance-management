import { PageWrapper } from '@/components/atoms/page-wrapper/wrapper-comp'
import LoginCard from '@/components/organisms/login-card/login-comp'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Login() {
  if (cookies().get('balanceManagementToken')) {
    redirect('/')
  }
  return (
    <div className={`flex h-screen`}>
      <PageWrapper>
        <LoginCard />
      </PageWrapper>
    </div>
  )
}
