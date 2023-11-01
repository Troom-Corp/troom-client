'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

const YandexButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'

  return (
    <button onClick={() => signIn('yandex', {callbackUrl})}>
      Sign in with Yandex
    </button>
  )
}

export default YandexButton