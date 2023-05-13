'use client'

import Image from 'next/image'
import {
  OptionsBalloon,
  ProfileContainer,
  ProfileLabel,
} from './profile-styles'
import Avatar from '@/icons/profile-avatar.svg'
import { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/auth-context'

export const ProfileButton = () => {
  const [balloonVisibility, setBalloonVisibility] = useState(false)
  const { logOut, user } = useContext(AuthContext)

  const toggleBalloon = () => {
    setBalloonVisibility((balloonVisibility) => !balloonVisibility)
  }

  return (
    <div className={ProfileContainer()} onClick={toggleBalloon}>
      <Image src={Avatar} alt="Avatar icon" />
      <span className={ProfileLabel()}>{user}</span>
      {balloonVisibility && (
        <div className={OptionsBalloon()} onClick={logOut}>
          <span>Log out</span>
        </div>
      )}
    </div>
  )
}
