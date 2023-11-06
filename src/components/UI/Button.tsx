import {FC, MouseEventHandler} from 'react';
import styles from '@/styles/Button.module.scss'

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  text: string
}

const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.button}>{text}</button>
  )
}

export default Button