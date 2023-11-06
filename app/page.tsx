'use client'

import { FC, useContext, useEffect } from "react";
import styles from './page.module.scss'
import LoginForm from "@/components/LoginForm";
import { Context } from "@/components/Providers";
import { observer } from "mobx-react-lite";
import RegistrationForm from "@/components/SignUpForm";

const Home: FC = () => {
  const { store } = useContext(Context)

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     store.checkAuth()
  //   }
  // }, [])

  return (
    <div className={styles.main}>
      <h1>Главная</h1>
    </div>
  )
}

export default observer(Home)