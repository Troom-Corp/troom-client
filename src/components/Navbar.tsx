import { FC } from 'react';
import A from './A';
import styles from '../styles/Navbar.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import Button from './UI/Button';

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <Link href={'/'} className={styles.navbar__logo}>
        <Image
          src='/logo.svg'
          alt='logo'
          width={50}
          height={50}
        />
        <span>Troom</span>
        <input type='search' />
      </Link>
      <div className={styles.navbar__links}>
        <A href={'/'} text='Главная' />
        <A href={'/auth'} text='Вакансии' />
        <A href={'/auth'} text='Уведомления' />
        <A href={'/auth'} text='Профиль' />
      </div>
    </div>
  )
}

export default Navbar