'use client'

import {FC, useContext, useState} from 'react';
import { Context } from './Providers';
import { observer } from 'mobx-react-lite';


const LoginForm: FC = () => {
  const [firstname, setFirstname] = useState<string>('')
  const [secondname, setSecondname] = useState<string>('')
  const [nick, setNick] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { store } = useContext(Context)
  
  return (
    <>
      <input 
        onChange={e => setFirstname(e.target.value)}
        value={firstname}
        type='text'
        placeholder='firstname'
      />
      <input 
        onChange={e => setSecondname(e.target.value)}
        value={secondname}
        type='text'
        placeholder='secondname'
      />
      <input 
        onChange={e => setNick(e.target.value)}
        value={nick}
        type='text'
        placeholder='nick'
      />
      <input 
        onChange={e => setEmail(e.target.value)}
        value={email}
        type='text'
        placeholder='email'
      />
      <input 
        onChange={e => setPassword(e.target.value)}
        value={password}
        type='password'
        placeholder='password'
      />
      <button onClick={() => store.login(email, password)}>Войти</button>
      <button onClick={() => store.registration(firstname, secondname, nick, email, password)}>Создать</button>
    </>
  )
}

export default observer(LoginForm)