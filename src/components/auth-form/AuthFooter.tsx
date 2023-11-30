import Link from 'next/link'

import styles from '@/styles/forms/FormUI.module.scss'

const AuthFooter = () => {
  return (
    <>
      <div className={styles.underline}>
        <div className={styles.underline__line} />
        <strong>ИЛИ</strong>
        <div className={styles.underline__line} />
      </div>
      <div className={styles.providers}>

      </div>
      <div className={styles.switch}>
        <p>Уже есть аккаунт?</p>
        <Link href='#'>Войти</Link>
      </div>
    </>
  )
}

export default AuthFooter