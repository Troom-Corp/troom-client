'use client'

import {FC, useContext, useState} from 'react';
import { Context } from './Providers';
import { observer } from 'mobx-react-lite';
import styles from '@/styles/LoginForm.module.scss'
import Container from './UI/Container';
import Button from './UI/Button';
import Input from './UI/Input';
import A from './A';


const LoginForm: FC = () => {
  const [nick, setNick] = useState<string>('')
  const [firstname, setFirstname] = useState<string>('')
  const [secondname, setSecondname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const { store } = useContext(Context)

  return (
    <Container>
      <h1 className={styles.title}>Авторизация</h1>
      <form className={styles.form}>
        <h2 className={styles.form__title}>Введите ваши данные</h2>
        <Input
          onChange={e => setEmail(e.target.value)}
          value={email}
          type='text'
          placeholder='Введите логин или email:'
          label={<>Логин <span>*</span></>}
        />
        <Input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type='password'
          placeholder='Введите пароль:'
          label={<>Пароль <span>*</span></>}
        />
        <div className={styles.btns}>
          <Button onClick={e => store.login(email, password)} text='Создать аккаунт' />
          <A className={styles.btns__back} text='Назад' href='#' />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <p className={styles.btns__back}>Нет аккаунта?</p>
          <A className={styles.btns__back + ' ' + styles.blue} text='Зарегистрироваться' href='/signup' />
        </div>
      </form>
    </Container>
  )
}

export default observer(LoginForm)