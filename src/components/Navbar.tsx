'use client'

import { FC } from 'react';
import A from './A';
import styles from '@/styles/Navbar.module.scss'
import { usePathname } from 'next/navigation';


const Navbar: FC = () => {
  const pathname = usePathname()

  const navItems = [
    { text: 'Главная', href: '/' },
    { text: 'О нас', href: '/about' },
    { text: 'Контакты', href: '/contacts' }
  ]
  
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Troom" />
      </div>
      <div className={styles.content}>
        {navItems.map(item =>
          <A
            key={item.text}
            text={item.text}
            href={item.href}
            className={`${styles.item} ${pathname === item.href ? styles.active : ''}`}
          />)}
      </div>
      <div className={styles.auth}>
        <A 
          text='ВОЙТИ'
          href='/signin'
          className={`${styles.item} ${pathname === '/signin' ? styles.active : ''}`}
        />
        <A
          text='РЕГИСТРАЦИЯ'
          href='/signup'
          className={`${styles.item} ${pathname === '/signup' ? styles.active : ''}`}
        />
      </div>
    </nav>
  )
}

export default Navbar