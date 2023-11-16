'use client'

import {FC, useContext, useState} from 'react';
import InputUI from '../InputUI';
import { Context } from '@/components/Providers';
import Button from '../ButtonUI';

interface LoginFormProps {
  
}
const LoginForm: FC<LoginFormProps> = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { store } = useContext(Context)

  return (
    <form>
      <InputUI
        label='Имя'
        placeholder='Введите имя...'
        type='text'
        value={login}
        onChange={e => setLogin(e.target.value)}
      />
      <InputUI
        label='Пароль'
        placeholder='Введите имя...'
        type='password'
        onChange={e => setPassword(e.target.value)}
      />
    </form>
  )
}

export default LoginForm