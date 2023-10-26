import {FC, ReactNode} from 'react';

interface ContainerProps {
  children: ReactNode
}
const Container: FC<ContainerProps> = ({children}) => {
  return (
    <div style={{width: '1200px', margin: '0 auto'}}>
      {children}
    </div>
  )
}

export default Container