import {FC} from 'react';
import A from './A';

const NavBar: FC = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="navbar__links">
          <A href={'/'} text='Главная' />
          <A href={'/login'} text='Авторизация' />
        </div>
      </div>
    </div>
  )
}

export default NavBar