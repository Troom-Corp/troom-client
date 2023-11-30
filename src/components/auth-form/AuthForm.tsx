import styles from '@/styles/forms/FormUI.module.scss'

const AuthForm = ({children} : {children: React.ReactNode}) => {
  return (
    <form className={styles.form}>
      {children}
    </form>
  )
}

export default AuthForm