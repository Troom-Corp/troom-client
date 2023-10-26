import {FC} from 'react';
import styles from '@/styles/Button.module.scss'

interface ButtonProps {
  children: string
}
const Button: FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}

export default Button