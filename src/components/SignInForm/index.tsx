'use client'

import { FormEventHandler} from 'react';
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const SignInForm = () => {
  // !=== AuthReducer ===!
  // const [state, dispatch] = useReducer(AuthReducer, InitialState)
  // const changeState = (key: string, value: string) => {
  //   dispatch({ type: 'set', key, value })
  // }


  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })

    if (res && !res.error) {
      router.push('/profile')
    } else {
      console.log(res)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name='email' required />
      <input type="password" name='password' required />
      <button type='submit'>Войти</button>
    </form>
  )
}

export default SignInForm