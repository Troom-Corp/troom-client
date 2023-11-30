import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next"

declare module 'next-auth' {
  interface User {
    id: string
    firstName: string
    lastName: string
    login: string
    email: string
    gender: string
    birthday: string
    location: string
    job: string
    phone: string
    links: string
    avatar: string
    bio: string
  }
  
  interface Session extends DefaultSession {
    user: User
    expires: string
    error: string
  }
}

