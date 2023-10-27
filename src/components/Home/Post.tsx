import {FC} from 'react';
import styles from './Post.module.scss'

const Post: FC = () => {
  return (
    <div className={styles.post}>
      <div className={styles.post__top}>
        <p className={styles.post__type}>Предложено</p>
        <div className={styles.post__top_icons}>
          <button style={{ fontSize: 20 }}>…</button>
          <button style={{ fontSize: 20, paddingInline: '5px' }}>&times;</button>
        </div>
      </div>
      <div className={styles.post__profile}>
        <div className={styles.post__profile_box}>
          <img src="/ava.jpg" alt="" />
          <div className={styles.post__profile_info}>
            <div className={styles.post__profile_info_one}>
              <p className={styles.post__profile_name}>Илья Марков</p>
              <p className={styles.post__profile_dote}>•</p>
              <p className={styles.post__profile_text}>3млн+</p>
            </div>
            <div className={styles.post__profile_info_two}>
              <p className={styles.post__profile_text}>Frontend dev</p>
              <p className={styles.post__profile_dote}>|</p>
              <p className={styles.post__profile_text}>Премия за лучший пост</p>
            </div>
            <div className={styles.post__profile_info_three}>
              <p className={styles.post__profile_text}>4д</p>
              <p className={styles.post__profile_dote}>•</p>
              <p className={styles.post__profile_text}>Отредактировано</p>
            </div>
          </div>
          <button className={styles.post__profile_follow}>+ Подписаться</button>
        </div>
      </div>
      <div className={styles.post__content}>
        <p className={styles.post__content_info}>
          Troom corp сегодня показала отличные результаты в сфере разработки веб-приложений. Их продукт превзошёл все ожидания и ворвался в топ-10 самых продаваемых приложений в сфере веб-услуг в Российской Федерации.
        </p>
        <img className={styles.post__content_image} src="/post.jpg" alt="" />
      </div>
    </div>
  )
}

export default Post