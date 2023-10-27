'use client'

import styles from '@/styles/AuthForm.module.scss'
import { FC, useContext, useState } from 'react'
import { Context } from '@/app/providers'
import Button from './UI/Button'
import AuthItems from './AuthItems'
import Input from './UI/Input'

const AuthForm: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true)
  const { store } = useContext(Context)
  return (
    <div className={styles.auth}>
      <div className={styles.auth__checkbox}>
        <p className={isChecked ? styles.act : ''}>Сотрудник</p>
        <div className={styles.auth__checkbox_item}>
          <input 
            type="checkbox" 
            id="switch"
            onChange={() => {
              setIsChecked(!isChecked)
              store.setUserType(!store.userType)
            }}
          />
          <label htmlFor="switch">Toggle</label>
        </div>
        <p className={isChecked ? '' : styles.act}>Компания</p>
      </div>
      <h1 className={styles.auth__title}>
        {store.isAuth ? 'Авторизация' : 'Регистрация'}
      </h1>
      <AuthItems />
      {store.isAuth ? 
      <Button>Войти</Button>
      :
      <Button>Создать</Button>
      }
    </div>
  )
}

export default AuthForm