'use client'

import { FC } from 'react';
import NavLink from './NavLink';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

import styles from '@/styles/sidebar/Navigation.module.scss'

const Navigation: FC = () => {
  
  const session = useSession()
  console.log(session)

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__content}>
          <NavLink />
      </div>
      {!session?.data ? <Link href='/api/auth/signin'>Sign In</Link> : <Link href='#' onClick={() => signOut({
        callbackUrl: '/home'
      })}>Sign Out</Link>}
    </nav>
  )
}

export default Navigation