import {ChangeEventHandler, FC} from 'react'
import styles from '@/styles/InputUI.module.scss'

interface InputUI {
  label?: string
  value?: string
  type?: string
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const InputUI: FC<InputUI> = ({ label, value, type, placeholder, onChange } ) => {
  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <input
        className={styles.input}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default InputUI