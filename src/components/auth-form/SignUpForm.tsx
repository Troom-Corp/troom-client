'use client'

import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '@/components/Providers'
import AuthFooter from './AuthFooter'
import AuthData from './AuthData'

import styles from '@/styles/forms/FormUI.module.scss'

const SignUpForm: React.FC = () => {
  const { authStore } = useContext(Context)
  
  return (
    <form className={styles.form}>
      <div>
        <h1>Создайте аккаунт</h1>
        <p>для полного погружения</p>
      </div>
      <strong>Шаг {!authStore.step ? '1' : '2'} из 2</strong>
      <div className={styles.input__container}>
        <AuthData type={!authStore.step ? 'first-signup' : 'second-signup'} />
      </div>
      <AuthFooter />
    </form>
  )
}

export default observer(SignUpForm)