import $auth from "@/http/auth";
import { IUser } from "@/models/interface/IUser";
import axios from "axios";
import type { AuthOptions, User } from "next-auth";
import Credentials from 'next-auth/providers/credentials'

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        login: { label: 'Login', type: 'text', required: true },
        password: { label: 'Password', type: 'password', required: true }
      },
      async authorize (credentials) {
        if (!credentials?.login || !credentials.password) return null

        const response = await $auth.post('http://127.0.0.1:5000/api/auth/users/sign_in', credentials)
        const user: IUser = response.data
        if (user) return user

        return null
      }
    })
  ],
  callbacks: {
    async jwt ({ token, user }) {
      if (user) {
        return {
          ...user,
          ...token,
          id: user.id,
        }
      }
      return token
    },
    async session ({ session, token }) {
      return {
        ...session,
        user: token.user as User
      }
    }
  },
  pages: {
    signIn: '/signin'
  }
}