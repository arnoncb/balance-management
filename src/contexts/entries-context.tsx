'use client'

import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './auth-context'
import { parseCookies } from 'nookies'

type Entry = {
  amount: number
  description: string
  date: string
  type: string
  _id: string
}

type EntriesTypes = {
  entries: Entry[] | null
  newEntry: (x: Entry) => Promise<void>
  listEntries: () => Promise<void>
  deleteEntry: (x: string) => Promise<void>
  isEmpty: boolean
}

type AuthPropTypes = {
  children: React.ReactNode
}

export const EntriesContext = createContext({} as EntriesTypes)

export function EntriesProvider({ children }: AuthPropTypes) {
  const [entries, setEntries] = useState<Entry[]>([])
  const isEmpty = !!entries
  const { user } = useContext(AuthContext)

  console.log(user)

  async function newEntry({ amount, description, date, type }: Entry) {
    try {
      const url =
        'https://balance-management-api-production.up.railway.app/entries'
      const body = {
        amount,
        description,
        date,
        type,
        userId: user?.sub,
      }

      await axios.post(url, body)
      listEntries()
    } catch (error) {
      console.log(error)
    }
  }
  async function listEntries() {
    try {
      const url =
        'https://balance-management-api-production.up.railway.app/entries/list'

      const body = {
        userId: user?.sub,
      }
      const response = await axios.post(url, body)
      setEntries(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  async function deleteEntry(id: string) {
    try {
      const url = `https://balance-management-api-production.up.railway.app/entries/${id}`

      await axios.delete(url)
      listEntries()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const { balanceManagementToken: token } = parseCookies()
    if (token) listEntries()
  }, [user])

  return (
    <EntriesContext.Provider
      value={{ newEntry, listEntries, deleteEntry, isEmpty, entries }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
