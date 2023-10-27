import { Context } from '@/app/providers';
import {FC, useContext, useState} from 'react';
import Input from './UI/Input';
import styles from '@/styles/AuthItems.module.scss'
import Button from './UI/Button';

interface AuthItemsProps {
  
}
const AuthItems: FC<AuthItemsProps> = () => {

  const { store } = useContext(Context)
  const [userType, setUserType] = useState<string>('')
  const [companyName, setCompanyName] = useState<string>('')
  const [secondName, setSecondName] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  return (
    <div className={styles.items}>
      {store.userType &&
        <>
          {
          store.isAuth ?
            null
            :
            <>
              <Input
                onChange={e => setName(e.target.value)}
                value={name}
                type='text'
                placeholder='Имя'
              />
              <Input
                onChange={e => setSecondName(e.target.value)}
                value={secondName}
                type='text'
                placeholder='Фамилия'
              />
            </>
          }
        </>
      }
      {!store.userType &&
        <>
          {
          store.isAuth ?
            null
            :
            <>
              <Input
                onChange={e => setCompanyName(e.target.value)}
                value={companyName}
                type='text'
                placeholder='Название компании'
              />
            </>
          }
        </>
      }
      <Input
        onChange={e => setEmail(e.target.value)}
        value={email}
        type='text'
        placeholder='Адрес электронной почты'
      />
      <Input
        onChange={e => setPassword(e.target.value)}
        value={password}
        type='password'
        placeholder='Пароль'
      />
      <div>
        <button>Hello</button>
      </div>
    </div>
  )
}

export default AuthItems