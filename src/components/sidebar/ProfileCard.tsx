'use client'

import { FC } from 'react';
import Image from 'next/image';

import styles from '@/styles/sidebar/ProfileCard.module.scss'

const ProfileCard: FC = () => {
  return (
    <div className={styles.card}>
      <Image src='/ava.jpg' alt='' width={120} height={120} />
      <div className={styles.title}>
        <h2>Илья Марков</h2>
        <span>Frontend developer</span>
      </div>
      <div className={styles.stats}>
        <span>Просмотров</span>
        <p>9,982</p>
      </div>
    </div>
  )
}

export default ProfileCard