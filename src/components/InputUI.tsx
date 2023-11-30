import {ChangeEventHandler, FC, MouseEventHandler} from 'react'

import styles from '@/styles/forms/FormUI.module.scss'

interface InputProps {
  type: string
  value?: string
  placeholder?: string
  status?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLInputElement>
}

const InputUI: FC<InputProps> = ({ type, value, placeholder, status, onChange, onClick }) => {
  return (
    <>
      <input
        className={`
          ${type === 'submit' ? styles.submit : styles.input} 
          ${status === 'success' ? styles.input__success : ''} 
          ${type !== 'submit' && status === 'error' ? styles.input__error : ''}
        `}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
      />
    </>
  )
}

export default InputUI