'use client'

import CreatePost from '@/components/CreatePost';
import Post from '@/components/Post';
import {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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