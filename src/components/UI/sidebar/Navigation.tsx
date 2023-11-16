import {FC} from 'react';
import styles from '@/styles/Navigation.module.scss'
import NavLink from './NavLink';

interface NavigationProps {
  
}
const Navigation: FC<NavigationProps> = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__content}>
        <NavLink />
      </div>
    </nav>
  )
}

export default Navigation