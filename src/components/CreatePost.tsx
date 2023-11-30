import { FC } from 'react'

import styles from '@/styles/CreatePost.module.scss'

const CreatePost: FC = () => {
  return (
    <div className={styles.create}>
      <input type='text' placeholder='Create new post'/>
    </div>
  )
}

export default CreatePost