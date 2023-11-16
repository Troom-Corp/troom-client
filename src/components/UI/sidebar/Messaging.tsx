'use client'

import {FC} from 'react';
import styles from '@/styles/Messaging.module.scss'
import Link from 'next/link';
import Image from 'next/image';

interface MessagingProps {
  
}
const Messaging: FC<MessagingProps> = () => {
  return (
    <div className={styles.messaging}>
      <div className={styles.messaging__top}>
        <h2>Сообщения</h2>
        <Link href='/'><img src="/icons/screen.svg" alt='' /></Link>
        <Link href='/'><img src="/icons/dots.svg" alt='' /></Link>
      </div>
      <div className={styles.messaging__search}>
        <input placeholder='Поиск сообщений' type="text" />
      </div>
      <div className={styles.messaging__content}>
        <div className={styles.messaging__content_item}>
          <Image src="/ava.jpg" alt="" width={40} height={40} />
          <div>
            <strong>Ilya Markov</strong>
            <p>Привет, ребята, это мой Troom концепт, веселитесь!</p>
          </div>
        </div>
        <div className={styles.messaging__content_item}>
          <Image src="/ava.jpg" alt="" width={40} height={40} />
          <div>
            <strong>Ilya Markov</strong>
            <p>Привет, ребята, это мой Troom концепт, веселитесь!</p>
          </div>
        </div>
        <div className={styles.messaging__content_item}>
          <Image src="/ava.jpg" alt="" width={40} height={40} />
          <div>
            <strong>Ilya Markov</strong>
            <p>Привет, ребята, это мой Troom концепт, веселитесь!</p>
          </div>
        </div>
        <div className={styles.messaging__content_item}>
          <Image src="/ava.jpg" alt="" width={40} height={40} />
          <div>
            <strong>Ilya Markov</strong>
            <p>Привет, ребята, это мой Troom концепт, веселитесь!</p>
          </div>
        </div>
        <div className={styles.messaging__content_item}>
          <Image src="/ava.jpg" alt="" width={40} height={40} />
          <div>
            <strong>Ilya Markov</strong>
            <p>Привет, ребята, это мой Troom концепт, веселитесь!</p>
          </div>
        </div>
        <div className={styles.messaging__content_item}>
          <Image src="/ava.jpg" alt="" width={40} height={40} />
          <div>
            <strong>Ilya Markov</strong>
            <p>Привет, ребята, это мой Troom концепт, веселитесь!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messaging