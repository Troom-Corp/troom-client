'use client'

import Link from 'next/link';
import {FC} from 'react';
import styles from '@/styles/Commended.module.scss'

interface CommendedProps {
  
}
const Commended: FC<CommendedProps> = () => {
  return (
    <div className={styles.commended}>
      <div className={styles.commended__top}>
        <h2>Подпишитесь</h2>
        <Link href='/'><img src="/icons/info.svg" alt=''/></Link>
      </div>
      <div className={styles.commended__bot}>
        <h2>Подпишитесь</h2>
        <Link href='/'><img src="/icons/info.svg" alt=''/></Link>
      </div>
    </div>
  )
}

export default Commended