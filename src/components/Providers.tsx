'use client'

import Store from "@/store/store"
import { FC, createContext } from "react"

interface State {
  store: Store
}

const store = new Store()

export const Context = createContext<State>({ store })


interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <Context.Provider value={{ store }}>
        {children}
    </Context.Provider>
  )
}