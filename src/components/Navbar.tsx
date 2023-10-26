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
      </Link>
      <div className={styles.navbar__links}>
        <A href={'/'} text='Главная' />
        <A href={'/auth'} text='Link' />
        <A href={'/auth'} text='Link' />
        <A href={'/auth'} text='Link' />
      </div>
      <div className={styles.navbar__buttons}>
        <Button>Вход</Button>
        <Button>Регистрация</Button>
      </div>
    </div>
  )
}

export default Navbar