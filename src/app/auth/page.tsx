import AuthForm from "@/components/AuthForm"
import { FC } from "react"
import styles from './page.module.scss'
import Container from "@/components/Container"

const Auth: FC = () => {
  return (
      <Container>
        <AuthForm />
      </Container>
  )
}

export default Auth