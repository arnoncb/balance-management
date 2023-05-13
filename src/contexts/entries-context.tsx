'use client'

import axios from 'axios'
import React, { createContext, useState } from 'react'

type Entry = {
  amount: number
  description: string
  date: string
  type: string
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

  async function newEntry({ amount, description, date, type }: Entry) {
    try {
      const url = 'http://localhost:3000/entries'
      const body = {
        amount,
        description,
        date,
        type,
      }

      const response = await axios.post(url, body)
      console.log(response)
      listEntries()
    } catch (error) {
      console.log(error)
    }
  }
  async function listEntries() {
    try {
      const url = 'http://localhost:3000/entries'

      const response = await axios.get(url)
      setEntries(response.data)
    } catch (error) {
      console.log('asd')
    }
  }
  async function deleteEntry(id: string) {
    try {
      const url = `http://localhost:3000/entries/${id}`

      await axios.delete(url)
      listEntries()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <EntriesContext.Provider
      value={{ newEntry, listEntries, deleteEntry, isEmpty, entries }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
