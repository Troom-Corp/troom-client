import {FC} from 'react';
import styles from './ProfileCard.module.scss'

const ProfileCard: FC = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card__top}>
          <img className={styles.card__image} src="/ava.jpg" alt="" />
          <h2 className={styles.card__title}>Welcome, Ilya</h2>
          <button className={styles.card__add}>Add a photo</button>
        </div>
        <div className={styles.card__connect}>
          <p className={styles.card__connect_top}>Lorem</p>
          <p className={styles.card__connect_bottom}>Lorem, ipsum dolor.</p>
        </div>
        <div className={styles.card__favorites}>
          <img className={styles.card__favorites_text} src="" alt="" />
          <a className={styles.card__favorites_link} href="#" >My items</a>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard