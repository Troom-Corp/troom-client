import $auth from "@/api/http/auth";
import axios from "axios";
import { AuthOptions } from "next-auth";
import Credentials from 'next-auth/providers/credentials'

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        login: { label: 'Login', type: 'text'},
        password: { label: 'password', type: 'password'},
      },
      async authorize (credentials) {
        if (!credentials?.login || !credentials.password) {
          throw new Error("Пожалуйста, введите логин и пароль");
        }
        
        try {
          const response = await $auth.post('/sign_in', {
            login: credentials?.login,
            password: credentials?.password
          })
          localStorage.setItem('token', response.data)
        } catch (e: any) {
          console.log(e.response?.data?.error);
        }
          
        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      console.log('jwt callback', { token, user, session});
      return token
    },
    async session({ session, token, user }) {
      console.log('session callback', { session, token, user });
      
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  }
}