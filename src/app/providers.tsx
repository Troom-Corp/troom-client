'use client'

import Store from "@/store/store"
import { FC, ReactNode, createContext } from "react"

// Создание контекста для MobX
interface State {
  store: Store
}

const store = new Store()

export const Context = createContext<State>({ store })


interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <Context.Provider value={{ store }}>
        {children}
      </Context.Provider>
    </div>
  )
}

export default Providers