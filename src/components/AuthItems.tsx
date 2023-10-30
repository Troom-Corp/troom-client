import { Context } from '@/app/providers';
import { FC, useContext, useReducer, useState} from 'react';
import Input from './UI/Input';
import styles from '@/styles/AuthItems.module.scss'
import Button from './UI/Button';
import { AuthReducer, InitialState } from '@/store/reducers/AuthReducer';
import { observer } from 'mobx-react-lite';


const AuthItems: FC = observer(() => {
  const { store } = useContext(Context)
  
  const [state, dispatch] = useReducer(AuthReducer, InitialState)
  
  const changeState = (key: string, value: string) => {
    dispatch({ type: 'set', key, value })
  }

  
  return (
    <div className={styles.items}>
      {
      !store.isAuth &&
        <>
          <Input
            onChange={e => changeState('name', e.target.value)}
            value={state.name}
            type='text'
            placeholder='Имя'
          />
          <Input
          onChange={e => changeState('secondName', e.target.value)}
            value={state.secondName}
            type='text'
            placeholder='Фамилия'
          />
        </>
      }
      <Input
        onChange={e => changeState('email', e.target.value)}
        value={state.email}
        type='text'
        placeholder='Адрес электронной почты'
      />
      <Input
        onChange={e => changeState('password', e.target.value)}
        value={state.password}
        type='password'
        placeholder='Пароль'
      />
      {store.isAuth ?
        <button  onClick={() => store.login(state.email, state.password)} >Войти</button>
        :
        <button onClick={() => store.registration(state.email, state.password)} >Создать</button>
      }
      {store.isAuth ?
        <div className={styles.items__switch}>
          <p>Нет аккаунта?</p>
          <button
            className={styles.items__switch_button}
            onClick={() => store.setAuth(false)}
          >
              Зарегистрироваться
          </button>
        </div>
        :
        <div className={styles.items__switch}>
          <p>Уже есть аккаунт?</p>
          <button
            className={styles.items__switch_button}
            onClick={() => store.setAuth(true)}
          >
            Войти
          </button>
        </div>
        }
    </div>
  )
})

export default AuthItems