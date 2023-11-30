import { useContext } from 'react'
import { Context } from '@/components/Providers'
import { observer } from 'mobx-react-lite'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import InputUI from '../InputUI'

import styles from '@/styles/forms/FormUI.module.scss'

const AuthData = (type: string) => {
  const { authStore } = useContext(Context)
  const { signUpData } = authStore

  if (type === 'signin') {
    return (
      <>
        <InputUI
          type='text'
          placeholder='Логин...'
          value={signUpData.login}
          onChange={(e) => authStore.setSignUpData({ login: e.target.value })}
        />
        <InputUI
          type='text'
          placeholder='Пароль...'
          value={signUpData.password}
          onChange={(e) => authStore.setSignUpData({ password: e.target.value })}
        />
        <InputUI
          type='submit'
          value='Войти'
          onClick={() => signIn()}
        />
      </>
    )
  } else if (type === 'first-signup') {
      return (
        <>
          <InputUI
            type='text'
            placeholder='Логин...'
            value={signUpData.login}
            onChange={(e) => authStore.setSignUpData({ login: e.target.value })}
          />
          <InputUI
            type='text'
            placeholder='Имя...'
            value={signUpData.firstName}
            onChange={(e) => authStore.setSignUpData({ firstName: e.target.value })}
          />
          <InputUI
            type='text'
            placeholder='Фамилия...'
            value={signUpData.lastName}
            onChange={(e) => authStore.setSignUpData({ lastName: e.target.value })}
          />
          <InputUI
            type='submit'
            value='Продолжить'
            onClick={(e) => {
              e.preventDefault()
              authStore.nextStep()
            }}
          />
        </>
    )
  } else {
      return (
        <>
          <InputUI
            type='text'
            placeholder='Email...'
            value={signUpData.email}
            onChange={(e) => authStore.setSignUpData({ email: e.target.value })}
          />
          <InputUI
            type='text'
            placeholder='Пароль...'
            value={signUpData.password}
            onChange={(e) => authStore.setSignUpData({ password: e.target.value })}
          />
          <InputUI
            type='text'
            placeholder='Подтвердите пароль...'
            value={signUpData.repeatPassword}
            onChange={(e) => authStore.setSignUpData({ repeatPassword: e.target.value })}
          />
          <InputUI
            type='submit'
            value='Создать'
            onClick={async (e) => {
              e.preventDefault()
              await authStore.signUp()
            }}
          />
          <Link 
            className={styles.back}
            href='#'
            onClick={(e) => {
              e.preventDefault()
              authStore.backStep()
            }}
          >
            Вернуться назад
          </Link>
        </>
    )
  }
}

export default observer(AuthData)