import SignInForm from '@/components/SignInForm';
import YandexButton from '@/components/YandexButton';
import {FC} from 'react';

const page: FC = () => {
  return (
    <div>
      <h1>Авторизация</h1>
      <YandexButton />
      <div>or</div>
      <SignInForm />
    </div>
  )
}

export default page