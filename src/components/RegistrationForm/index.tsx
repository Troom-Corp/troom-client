'use client'

import { useContext, useReducer, useState } from "react"
import { Context } from "../Providers"
import { AuthReducer, InitialState } from "@/store/reducers/AuthReducer"
import $api from "@/http/auth"

const RegistrationForm = () => {
  const [signUp, setSignUp] = useState(() => {
    return {
      firstname: '',
      secondname: '',
      nick: '',
      email: '',
      password: '',
    }
  })

  const { store } = useContext(Context)

  const handlerRegistration = (event: any) => {
    event.preventDefault()
    $api.post('/auth/registration', {
      firstname: signUp.firstname,
      secondname: signUp.secondname,
      nick: signUp.nick,
      email: signUp.email,
      password: signUp.password
    })
  }

  const changeInputRegister = (event: any) => {
    event.persist()
    setSignUp(prev => {
        return {
            ...prev,
            [event.target.name]: event.target.value,
        }
    })
}

  return (
    <form onSubmit={handlerRegistration}>
      <input type="firstname" placeholder="firstname" name="firstname" value={signUp.firstname} onChange={changeInputRegister} />
      <input type="secondname" placeholder="secondname" name="secondname" value={signUp.secondname} onChange={changeInputRegister} />
      <input type="nick" placeholder="nick" name="nick" value={signUp.nick} onChange={changeInputRegister} />
      <input type="email" placeholder="email" name="email" value={signUp.email} onChange={changeInputRegister} />
      <input type="password" placeholder="password" name="password" value={signUp.password} onChange={changeInputRegister} />
      <button type="submit">Register</button>
    </form>
  )
}

export default RegistrationForm