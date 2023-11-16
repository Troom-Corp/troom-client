'use client'

import Button from "@/components/UI/ButtonUI";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Start() {
  const session = useSession()
  console.log(session)

  return (
    <div>
      <Button>
        <Link href='/auth/login'>
          Hello
        </Link>
      </Button>
    </div>
  )
}
