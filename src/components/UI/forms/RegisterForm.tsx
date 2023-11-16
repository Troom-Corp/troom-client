'use client'

import {FC, useState} from 'react';
import InputUI from '../InputUI';
import styles from '@/styles/RegisterForm.module.scss'

const RegisterForm: FC = () => {
  const [firstName, setFirstName] = useState<string>()
  const [secondName, setSecondName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [repeatPassword, setRepeatPassword] = useState<string>()
  const [login, setLogin] = useState<string>()
  
  return (
    <form className={styles.form}>
      <h1>Регистрация</h1>
      <div className={styles.personal}>
        <InputUI
          label='Имя'
          placeholder='Введите имя...'
        />
        <InputUI
          label='Фамилия'
          placeholder='Введите фамилию... '

        />
      </div>
      <InputUI
        label='Email'
        placeholder='Введите email...'
      />
      <InputUI
        label='Пароль'
        placeholder='Введите пароль...'
      />
      <InputUI
        label='Подтверждение'
        placeholder='Повторите пароль...'
      />
    </form>
  )
}

export default RegisterForm