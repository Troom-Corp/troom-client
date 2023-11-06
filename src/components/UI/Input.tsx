'use client'

import {FC, ChangeEventHandler, useState} from 'react';
import styles from '@/styles/Input.module.scss'

interface InputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>
  value: string
  type: string
  placeholder: string
  label?: string | React.ReactNode
}

const Input: FC<InputProps> = ({ onChange, value, type, placeholder, label }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className={styles.group}>
      <label>{label}</label>
      <div className={styles.box}>
        <input
          className={styles.item}
          onChange={onChange}
          value={value}
          type={type === 'password' ? (toggle ? 'text' : 'password') : type}
          placeholder={placeholder}
        />
        {type === 'password' &&
          <div
            className={styles.btn + ' ' + (toggle ? styles.active : '')}
            onClick={() => setToggle(!toggle)}
          >
            <img width={25} src='password-show.png' alt='Show' />
            {value.length <= 8 ?
              <p className={`${styles.status} ${styles.status__no}`}>✗</p>
              :
              <p className={`${styles.status} ${styles.status__yes}`}>✓</p>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Input