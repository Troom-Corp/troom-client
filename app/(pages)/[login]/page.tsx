import { authConfig } from "@/configs/auth"
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"

async function Profile({ params }: any) {
  const session = await getServerSession(authConfig)
  const user = session?.user
  
  if (user?.login === params.login) {
    return (
      <div>
        <h1>Мой профиль</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Чужой профиль</h1>
      </div>
    )
  }
  
}

export default Profile