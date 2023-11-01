'use client'

import { FC } from 'react';
import A from './A';
import styles from '@/styles/Navbar.module.scss'
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react'

const Navbar: FC = () => {
  const session = useSession()
  console.log(session)
  
  return (
    <div className={styles.navbar}>
      <A href='/' className={styles.navbar__logo}>
        <Image
          src='/logo.svg'
          alt='logo'
          width={50}
          height={50}
        />
        <span>Troom</span>
        <input type='search' />
      </A>
      <div className={styles.navbar__links}>
        <A href='/' text='Главная' />
        {session?.data && (
          <A href='/profile' text='Профиль' />
        )}
        {session?.data ?
          <A 
            text='Выйти'
            href='#' 
            onClick={() => signOut({
              callbackUrl: '/'
            })} 
          />
          :
          <A href='/signin' text='Авторизация' />}
      </div>
    </div>
  )
}

export default Navbar