import { FC, MouseEventHandler } from 'react';
import Link from 'next/link'

interface AProps {
  href: string
  text?: string
  className?: string
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
}
const A: FC<AProps> = ({ children, text, href, className, onClick }) => {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={className}
    >
      {text}
      {children}
    </Link>
  )
}

export default A