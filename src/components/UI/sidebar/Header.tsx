'use client'

import {FC} from 'react';
import styles from '@/styles/Header.module.scss'
import AccountDropDown from '../AccountDropDown';
import Search from '../Search';

interface HeaderProps {
  
}
const Header: FC<HeaderProps> = () => {
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