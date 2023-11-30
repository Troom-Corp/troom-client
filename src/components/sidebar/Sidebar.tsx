import {FC} from 'react';
import Header from './Header';
import Navigation from './Navigation';
import ProfileCard from './ProfileCard';
import Commended from './Commended';
import Messaging from './Messaging';

import styles from '@/styles/sidebar/Sidebar.module.scss'

interface SidebarProps {
  children: React.ReactNode
}


const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <div className={styles.sidebar}>
      <Header />
      <Navigation />
      <ProfileCard />
      <Commended />
      <Messaging />
      <div className={styles.content}>
        { children }
      </div>
    </div>
  )
}

export default Sidebar