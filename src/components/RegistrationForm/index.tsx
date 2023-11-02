'use client'

import { useContext, useReducer } from "react"
import { Context } from "../Providers"
import { AuthReducer, InitialState } from "@/store/reducers/AuthReducer"

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(AuthReducer, InitialState)
  const changeState = (key: string, value: string) => {
    dispatch({ type: 'set', key, value })
  }

  const { store } = useContext(Context)

  return (
    <>
      <input
        onChange={e => changeState('email', e.target.value)}
        value={state.email} 
        type="text"
        placeholder='Email'
      />
      <input
        onChange={e => changeState('password', e.target.value)}
        value={state.password} 
        type="password"
        placeholder='Password'
      />
      <button onClick={() => store.registration(state.email, state.password)}>Регистрация</button>
    </>
  )
}

export default RegistrationForm