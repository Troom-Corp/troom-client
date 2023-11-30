'use client'

import { useContext } from 'react';
import { Context } from '@/components/Providers'; 
import { observer } from 'mobx-react-lite'
import AuthFooter from './AuthFooter';
import AuthData from './AuthData';

import styles from '@/styles/forms/FormUI.module.scss'

const SignInForm: React.FC = () => {
  const { authStore } = useContext(Context)
  console.log(authStore.signUpData)
  return (
    <form className={styles.form}>
      <div>
        <h1>Войдите в аккаунт</h1>
      </div>
      <div className={styles.input__container}>
        <AuthData type='signin' />
      </div>
      <AuthFooter />
    </form>
  )
}

export default observer(SignInForm)