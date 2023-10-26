import { FC } from 'react';
import A from './A';
import styles from '../styles/Navbar.module.scss'

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <A href={'/'} text='Главная' />
        <A href={'/auth'} text='Авторизация' />
      </div>
    </div>
  )
}

export default Navbar