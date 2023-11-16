import { FC, MouseEventHandler } from 'react';
import styles from '@/styles/Button.module.scss'

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: string | React.ReactNode
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  )
}

export default Button