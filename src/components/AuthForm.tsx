'use client'

import styles from '@/styles/AuthForm.module.scss'
import { FC, useContext, useState } from 'react'
import { Context } from '@/app/providers'
import Button from './UI/Button'
import Input from './UI/Input'

const AuthForm: FC = () => {
  const isAuth = true
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { store } = useContext(Context)
  return (
    <div className={styles.auth}>
      <h1 className={styles.auth__title}>{isAuth ? 'Авторизация' : 'Регистрация'}</h1>
      <div className={styles.auth__inputs}>
          <Input
          onChange={e => setEmail(e.target.value)}
          value={email}
          type='text'
          placeholder='Email'
        />
        <Input
          onChange={e => setEmail(e.target.value)}
          value={email}
          type='text'
          placeholder='Email'
        />
        <Input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type='password'
          placeholder='Password'
        />
      </div>
      {isAuth ? 
      <Button>Войти</Button>
      :
      <Button>Создать</Button>
      }
    </div>
  )
}

export default AuthForm