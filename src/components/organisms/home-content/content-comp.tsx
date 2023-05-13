'use client'

import { InfoCard } from '@/components/molecules/info-card/card-comp'
import { useContext, useEffect, useState } from 'react'
import { NavBar } from '@/components/atoms/nav-bar/nav-comp'
// import { entries } from '@/utils/entries'
import { EntriesCard } from '@/components/molecules/entries-card/entries-comp'
import { getTotal } from '@/utils/getTotalValue'
import { useRouter } from 'next/navigation'
import { EntriesContext } from '@/contexts/entries-context'

export default function MainContent() {
  const [currentSection, setCurrentSection] = useState('dashboard')
  const { entries, listEntries } = useContext(EntriesContext)
  const router = useRouter()

  useEffect(() => {
    listEntries()
    router.refresh()
  }, [])

  const handleSection = (section: string) => {
    setCurrentSection(section)
  }

  const navMenu = [
    {
      name: 'entry-filter',
      id: 'dashboard',
      label: 'Dashboard',
      onClick: () => handleSection('dashboard'),
      selected: currentSection,
    },
    {
      name: 'entry-filter',
      id: 'entries',
      label: 'Entries',
      onClick: () => handleSection('entries'),
      selected: currentSection,
    },
  ]

  return (
    <>
      <div className={`absolute top-[72px] w-4/5 md:hidden`}>
        <NavBar items={navMenu} />
      </div>
      <div
        className={`${currentSection === 'dashboard' ? `flex` : `hidden`}
          md:flex max-w-[360px] flex-row flex-wrap justify-center items-center gap-4`}
      >
        <InfoCard title="Balance" value={getTotal.balance({ entries })} />
        <InfoCard title="Total income" value={getTotal.income({ entries })} />
        <InfoCard title="Total expense" value={getTotal.expense({ entries })} />
      </div>
      <div
        className={`${
          currentSection === 'entries' ? `flex` : `hidden`
        } md:flex grow max-w-[360px]`}
      >
        <EntriesCard entries={entries} />
      </div>
    </>
  )
}
