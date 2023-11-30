import Sidebar from '@/components/sidebar/Sidebar';
import {FC} from 'react';

interface HomeLayoutProps {
  children: React.ReactNode
}
const PagesLayout: FC<HomeLayoutProps> = ({children }) => {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  )
}

export default PagesLayout