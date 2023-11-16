import Link from 'next/link';
import {FC} from 'react';
import styles from '@/styles/NavLink.module.scss'

const ICON_URL = '/icons'

const navItems = [
  { path: '/', text: 'Home', image: `${ICON_URL}/home.svg` },
  { path: '/network', text: 'Сообщество', image: `${ICON_URL}/network.svg` },
  { path: '/projects', text: 'Проекты', image: `${ICON_URL}/jobs.svg` },
  { path: '/messages', text: 'Сообщения', image: `${ICON_URL}/messaging.svg` },
  { path: '/notifications', text: 'Уведомления', image: `${ICON_URL}/notification.svg` },
  { path: '/work', text: 'Работа', image: `${ICON_URL}/work.svg` }
]

const NavLink: FC = () => {
  return (
    <>
      {navItems.map(item => (
        <Link key={item.path} href={item.path}>
          <div className={styles.nav__item}>
            <img src={item.image} alt={item.text} />
            <p>{item.text}</p>
          </div>
        </Link>
      ))}
    </>
  )
}

export default NavLink