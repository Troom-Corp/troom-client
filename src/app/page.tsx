import { FC } from "react";
import styles from './page.module.scss'
import ProfileCard from "@/components/Home/ProfileCard";
import PostEditor from "@/components/Home/PostEditor";
import Post from "@/components/Home/Post";

const Home: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__left}>
        <ProfileCard />
      </div>

      <div className={styles.main__center}>
        <PostEditor />
        <hr style={{marginBlock: '1rem'}}/>
        <div className={styles.feed}>
          <Post />
        </div>
      </div>
      
      
      <div className={styles.main__right}>
        <h2 className={styles.people__title}>Добавьте к себе в ленту</h2>
        

        <strong> Тут будут рекомендованные профили</strong>
        {/* !========= Маппинг людей =========! */}
      
        <a href='#'>Посмотреть все рекомендации &rarr;</a>
      </div>
    </div>
  )
}

export default Home