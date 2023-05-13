'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import React, { createContext, useEffect, useState } from 'react'

type SignInTypes = {
  email: string
  password: string
}

type SignUpTypes = {
  name: string[]
  email: string
  password: string
}

type User = {
  username: string
  sub: string
  _id: string
}

type AuthTypes = {
  user: User | null
  isAuthenticated: boolean
  signIn: (x: SignInTypes) => Promise<void>
  signUp: (x: SignUpTypes) => Promise<void>
  logOut: () => void
}

type AuthPropTypes = {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthTypes)

export function AuthProvider({ children }: AuthPropTypes) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user
  const router = useRouter()

  async function signIn({ email, password }: SignInTypes) {
    try {
      const url =
        'https://balance-management-api-production.up.railway.app/auth/login'
      const body = {
        email,
        password,
      }
      const response = await axios.post(url, body)

      setCookie(
        undefined,
        'balanceManagementToken',
        response.data.access_token,
        {
          maxAge: 60 * 60 * 48, // 2 days
          // eslint-disable-next-line prettier/prettier
        }
      )
      getProfile(response.data.access_token)
      console.log(response.data)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  async function signUp(data: SignUpTypes) {
    try {
      const url =
        'https://balance-management-api-production.up.railway.app/users'
      const body = {
        name: data.name,
        email: data.email,
        password: data.password,
      }

      const response = await axios.post(url, body)
      const { email, password } = response.data
      signIn({ email, password })
    } catch (error) {
      console.log(error)
    }
  }

  async function logOut() {
    destroyCookie(undefined, 'balanceManagementToken')
    setUser(null)
    router.push('/login')
  }

  async function getProfile(token: string) {
    try {
      const url =
        'https://balance-management-api-production.up.railway.app/auth/profile'
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(url, config)
      setUser(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const { balanceManagementToken: token } = parseCookies()
    if (token) getProfile(token)
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, logOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  )
}
