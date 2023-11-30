import { FC } from 'react'
import Image from 'next/image'
import postImage from '/public/mock.png'

import styles from '@/styles/Post.module.scss'

const Post: FC = () => {
  return (
    <>
      <div className={styles.main}>
      <div className={styles.head}>
        <img src="/yandex.svg" alt="" />
        <div className={styles.head__text}>
          <div className={styles.head__title}>
            <h2>Яндекc Dev</h2>
            <span>20 часов назад</span>
          </div>
          <p>Компания / IT</p>
        </div>
      </div>
      <div className={styles.post__text}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere beatae similique, sequi dicta ad, id aperiam doloremque corrupti veniam porro. Delectus quo iure, hic repudiandae amet at praesentium necessitatibus dolore iste tenetur fugiat, laudantium repellat sint maxime vitae minima, odit temporibus esse. Culpa quibusdam minus provident consectetur quidem id!</p>
      </div>
      <div className={styles.post__image}>
        <Image src={postImage} alt=""/>
      </div>
      <div className={styles.post__footer}>
        <div className={styles.post__footer_left}>
          <div className={styles.post__stats}>
            <img src='/icons/like.svg' alt='' />
            <p>965</p>
          </div>
          <div className={styles.post__stats}>
            <img src='/icons/comment.svg' alt='' />
            <p>72</p>
          </div>
          <div>
            <img src='/icons/repost.svg' alt='' />
          </div>
          <div>
            <img src='/icons/share.svg' alt='' />
          </div>
        </div>
        <div className={styles.post__stats}>
          <img src='/icons/views.svg' alt='' />
          <p>91,532</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Post