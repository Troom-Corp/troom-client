import {FC} from 'react';

interface ContainerProps {
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div style={{width: '1440px', marginInline: 'auto'}}>
      {children}
    </div>
  )
}

export default Container