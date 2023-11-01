'use client'

import Store from "@/store/store"
import { SessionProvider } from "next-auth/react"
import { FC, createContext } from "react"

// Создание контекста для MobX
interface State {
  store: Store
}

const store = new Store()

export const Context = createContext<State>({ store })


interface ProvidersProps {
  children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({children}) => {
  return (
    <Context.Provider value={{ store }}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </Context.Provider>
  )
}

export default Providers