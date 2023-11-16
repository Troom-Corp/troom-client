
import $profile from "@/api/http/profile"
import { Context } from "@/components/Providers"
import { ProfileResponse } from "@/models/ProfileResponse"
import { IUser } from "@/models/interface/IUser"
import axios, { AxiosResponse } from "axios"
import { Content } from "next/font/google"
import { redirect } from "next/navigation"
import { useContext } from "react"

export const getProfile = async (login: string): Promise<IUser> => {
  const response = await $profile.get<IUser>(`/users/@${login}`)
  return response.data
}

export default async function Profile({ params }: any) {
  const currentUser = await getProfile(params.login)


  return (
    <div>
      <h1>Профиль пользователя с логином: {currentUser.login}</h1>
      <p>Его имя: {currentUser.firstName}</p>
      <p>Его фамилия: {currentUser.secondName}</p>
      <p>Его email: {currentUser.email}</p>
      <p>Его пол: {currentUser.gender}</p>
      <p>Его дата рождения {currentUser.date_of_birth}</p>
      <p>Его локация: {currentUser.location}</p>
      <p>Его профессия: {currentUser.job}</p>
      <p>Его номер телефона: {currentUser.phone}</p>
      <p>Его ссылки: {currentUser.links}</p>
      <p>Его аватар: {currentUser.avatar}</p>
      <p>Его биография: {currentUser.bio}</p>
    </div>
  )
}

