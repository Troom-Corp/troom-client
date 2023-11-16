'use client'

import Store from "@/api/store/store";
import { createContext, FC } from "react";
import { SessionProvider } from 'next-auth/react'

interface State {
  store: Store
}
const store = new Store()
export const Context = createContext<State>({ store })

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: FC<ProvidersProps> = ( {children} ) => {
  return (
    <Context.Provider value={{store}}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </Context.Provider>
  )
}
