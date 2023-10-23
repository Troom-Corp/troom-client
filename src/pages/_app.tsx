import '../styles/global.css'
import Store from '../store/store'
import { createContext } from 'react'
import { AppProps } from 'next/app'

interface State {
  store: Store
}

const store = new Store()

export const Context = createContext<State>({ store })

export default function MyApp({ Component, pageProps}: AppProps) {
  return (
    <Context.Provider value={{ store }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}