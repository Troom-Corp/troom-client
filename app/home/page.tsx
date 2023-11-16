'use client'

import CreatePost from '@/components/CreatePost';
import Post from '@/components/Post';
import {FC} from 'react';

interface pageProps {
  
}
const Home: FC<pageProps> = () => {
  return (
    <>
      <CreatePost />
      <Post />
    </>
  )
}

export default Home