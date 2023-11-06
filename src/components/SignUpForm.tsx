'use client'

import { FC, useContext, useState } from 'react';
import { Context } from './Providers';
import { observer } from 'mobx-react-lite';
import styles from '@/styles/SignUpForm.module.scss'
import Container from './UI/Container';
import Input from './UI/Input';
import Button from './UI/Button';
import A from './A';


const SignUpForm: FC = () => {
  const [nick, setNick] = useState<string>('')
  const [firstname, setFirstname] = useState<string>('')
  const [secondname, setSecondname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const { store } = useContext(Context)

  return (
    <Container>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={styles.form}>
        <h2 className={styles.form__title}>Персональная информация</h2>
          <Input
            onChange={e => setFirstname(e.target.value)}
            value={firstname}
            type='text'
            placeholder='Введите имя:'
            label={<>Имя <span>*</span></>}
          />
          <Input
            onChange={e => setSecondname(e.target.value)}
            value={secondname}
            type='text'
            placeholder='Введит фамилию:'
            label={<>Фамилия <span>*</span></>}
          />
          <h2 className={styles.form__title}>Данные для входа</h2>
          <Input
            onChange={e => setNick(e.target.value)}
            value={nick}
            type='text'
            placeholder='Введите логин:'
            label={<>Логин <span>*</span></>}
          />
          <Input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type='text'
            placeholder='Введите email:'
            label={<>Email <span>*</span></>}
          />
          <div className={styles.password}>
            <Input
              onChange={e => setPassword(e.target.value)}
              value={password}
              type='password'
              placeholder='Введите пароль:'
              label={<>Пароль <span>*</span></>}
            />
            <p className={styles.password__hint}>Пароль должен содержать от 8  до 18 символов</p>
          </div>
          <div className={styles.password}>
            <Input
              onChange={e => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              type='password'
              placeholder='Повторите пароль:'
              label={<>Подтверждение <span>*</span></>}
            />
          </div>
        <div className={styles.btns}>
          <Button onClick={e => store.registration(nick, firstname, secondname, email, password)} text='Создать аккаунт' />
          <A className={styles.btns__back} text='Назад' href='#' />
        </div>
        <div style={{display: 'flex', gap: '10px'}}>
          <p className={styles.btns__back}>Уже есть аккаунт?</p>
          <A className={styles.btns__back + ' ' + styles.blue} text='Войти' href='/signin' />
        </div>
      </form>
    </Container>
  )

}
  export default SignUpForm