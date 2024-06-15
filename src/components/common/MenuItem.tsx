'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface MenuItemProps {
  label: string
  href: string
  icon?: ReactNode
}

const MenuItem = ({ href, label, icon }: MenuItemProps) => {
  const pathName = usePathname()
  const isActive = pathName === href
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-x-2.5 rounded-xl px-6 py-4 font-bold transition-colors duration-200',
        isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/50'
      )}
    >
      <span className={cn(isActive && 'svg-animation')}>{icon}</span>
      <span>{label}</span>
    </Link>
  )
}

export default MenuItem
