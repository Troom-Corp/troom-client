'use client'

import { FC } from 'react'
import Image from 'next/image'

import styles from '@/styles/AccountDropDown.module.scss'

const AccountDropDown: FC = () => {

  return (
    <div className={styles.profile}>
      <Image className={styles.avatar} src="/ava.jpg" alt="" width={60} height={60} />
      <button className={styles.drop}>
        Илья Марков 
        <img src='/icons/drop-arrow.svg' alt='' />
      </button>
    </div>
  )
}

export default AccountDropDown