import Sidebar from '@/components/UI/sidebar/Sidebar';
import {FC} from 'react';

interface HomeLayoutProps {
  children: React.ReactNode
}
const HomeLayout: FC<HomeLayoutProps> = ( {children }) => {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  )
}

export default HomeLayout