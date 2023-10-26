import {ChangeEvent, FC} from 'react';
import styles from '@/styles/Input.module.scss'

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string | number
  type: string
  placeholder: string
}

const Input: FC<InputProps> = ({...props}) => {
  return (
    <input className={styles.input} {...props} />
  )
}

export default Input