'use client'

import styles from '@/styles/AuthForm.module.scss'
import { FC, useContext } from 'react'
import { Context } from '@/app/providers'
import Button from './UI/Button'
import AuthItems from './AuthItems'

const AuthForm: FC = () => {
  const { store } = useContext(Context)
  return (
    <div className={styles.auth}>
      <div className={styles.auth__checkbox}>
      </div>
      <h1 className={styles.auth__title}>
        {store.isAuth ? 'Авторизация' : 'Регистрация'}
      </h1>
      <AuthItems />
    </div>
  )
}

export default AuthForm