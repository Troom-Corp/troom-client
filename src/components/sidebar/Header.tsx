'use client'

import { FC } from 'react';
import AccountDropDown from '../AccountDropDown';
import Search from '../Search';

import styles from '@/styles/sidebar/Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <AccountDropDown />
      <div>
        <p className={styles.mockup}>Troom Logotype</p>
      </div>
      <Search value='' size='large' placeholder='Глобальный поиск' />
    </header>
  )
}

export default Header