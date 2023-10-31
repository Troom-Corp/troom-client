import {FC} from 'react';
import styles from './PostEditor.module.scss'


const PostEditor: FC = () => {
  return (
    <div className={styles.search}>
      <input style={{ width: '500px', padding: '2rem' }} type="search" placeholder="Тут будет editor JS и создание поста" />
    </div>
  )
}

export default PostEditor