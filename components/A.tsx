import { FC } from 'react';
import Link from 'next/link'

interface AProps {
  children: string
  href: string
}
const A: FC<AProps> = ({ children, href }) => {
  return (
    <Link href={href}>{children}</Link>
  )
}

export default A