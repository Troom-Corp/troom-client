import type { AuthOptions, User } from "next-auth";
import YandexProvider from 'next-auth/providers/yandex'
import Credentials from 'next-auth/providers/credentials'
import { users } from "@/data/users";
import $api from "@/http/auth";

export const authConfig: AuthOptions = {
  providers: [
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID!,
      clientSecret: process.env.YANDEX_SECRET!
    }),
    Credentials({
      credentials: {
        email: { type: 'email', required: true},
        password: { type: 'password', required: true}
      },
      async authorize (credentials) {
        if (!credentials?.email || !credentials.password) return null

        try {
          const response = await $api.post('/auth/sign_in', {
            email: credentials.email,
            password: credentials.password
          })

          if (response.status === 200) {
            return response.data;
          }
        } catch (error) {
            console.error(error); 
        }
        
        return null
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
}