import {FC} from 'react'
import styles from '@/styles/AccountDropDown.module.scss'
import Image from 'next/image'

interface AccountDropDownProps {
  
}
const AccountDropDown: FC<AccountDropDownProps> = () => {
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