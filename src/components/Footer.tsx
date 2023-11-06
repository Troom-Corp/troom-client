import {FC} from 'react'
import styles from '@/styles/Footer.module.scss'
import Container from './UI/Container'


const Footer: FC = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.top__background}>
        <Container>
          <div className={styles.top}>
            <p className={styles.top__item}>Какойнибудь слоган</p>
            <p className={styles.top__item}>Какойнибудь слоган</p>
            <p className={styles.top__item}>Какойнибудь слоган</p>
            <p className={styles.top__item}>Какойнибудь слоган</p>
            <p className={styles.top__item}>Какойнибудь слоган</p>
          </div>
        </Container>
      </div>
      <div className={styles.bottom}>

      </div>
    </footer>
  )
}

export default Footer