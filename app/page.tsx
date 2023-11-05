'use client'

import { FC, useContext, useEffect } from "react";
import styles from './page.module.scss'
import LoginForm from "@/components/LoginForm";
import { Context } from "@/components/Providers";
import { observer } from "mobx-react-lite";

const Home: FC = () => {
  const { store } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  return (
    <div className={styles.main}>
      <h1>{store.isAuth ? `Пользователь авторизован ${store.user?.email}` : 'Авторизуйтесь'}</h1>
      <LoginForm />
    </div>
  )
}

export default observer(Home)