'use client'

import { SessionProvider } from 'next-auth/react'
import { createContext } from 'react'
import AuthStore from '@/store/authStore'


// !=== GLOBAL STATE FOR AUTH ===!
interface AuthState {
  authStore: AuthStore
}

const authStore = new AuthStore()

export const Context = createContext<AuthState>({ authStore })

// !=== COMPONENT ===!

const Providers = ({ children }:{children: React.ReactNode}) => {
  return (
    <SessionProvider>
      <Context.Provider value={{ authStore }}>
        {children}
      </Context.Provider>
    </SessionProvider>
  )
}

export default Providers