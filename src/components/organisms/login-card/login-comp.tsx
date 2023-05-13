'use client'

import { LoginStyles as style } from './login-styles'
import { Card } from '@/components/atoms/card/card-comp'
import logoBlack from '@/icons/logo-black.svg'
import Image from 'next/image'
import { useState } from 'react'
import { NavBar } from '@/components/atoms/nav-bar/nav-comp'
import { SignUp } from '@/components/organisms/sign-up-form/sign-up-form-comp'
import { LogIn } from '@/components/organisms/login-form/login-form-comp'

export default function LoginCard() {
  const [currentSection, setCurrentSection] = useState('signup')

  const sections = {
    signup: () => <SignUp />,
    login: () => <LogIn />,
  }

  const handleSection = (section: string) => {
    setCurrentSection(section)
  }

  const navMenu = [
    {
      name: 'login-menu',
      id: 'signup',
      label: 'Sign up',
      onClick: () => handleSection('signup'),
      selected: currentSection,
    },
    {
      name: 'login-menu',
      id: 'login',
      label: 'Log in',
      onClick: () => handleSection('login'),
      selected: currentSection,
    },
  ]

  return (
    <Card
      padding="px-7 pt-16 pb-8"
      height="max-h-full"
      width="min-w-[94%] sm:w-[440px] sm:min-w-0"
    >
      <div className={style.head}>
        <Image className={`w-32`} src={logoBlack} alt="App logo" />
        <h2 className={style.subtitle}>Manage your money</h2>
      </div>
      <NavBar items={navMenu} />
      {sections[currentSection as keyof typeof sections]()}
    </Card>
  )
}
