import { FC, MouseEventHandler } from 'react';
import Link from 'next/link'

interface AProps {
  href: string
  text?: string
  className?: string
  children?: React.ReactNode
}
const A: FC<AProps> = ({ href, text, children, className }) => {
  return (
    <Link href={href} className={className}>
      {text}
      {children}
    </Link>
  )
}

export default A