import { FC } from 'react';
import Link from 'next/link'

interface AProps {
  text: string
  href: string
}
const A: FC<AProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <>{text}</>
    </Link>
  )
}

export default A