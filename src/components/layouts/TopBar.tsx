'use client'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoonIcon, SunIcon, UserIcon } from 'lucide-react'
import { UserButton, useAuth } from '@clerk/nextjs'
import Link from 'next/link'

const TopBar = () => {
  const { setTheme } = useTheme()
  const { userId } = useAuth()
  console.log('🚀 ~ TopBar ~ userId:', userId)

  return (
    <header className='min-h-16 flex justify-between p-4 border-b border-gray-200'>
      <h3 className='font-bold text-3xl'>Header</h3>
      <div className='flex items-center gap-x-3'>
        {!userId ? (
          <Link href={'/sign-in'}>
            <Button size='icon' variant={'outline'}>
              <UserIcon />
            </Button>
          </Link>
        ) : (
          <UserButton />
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default TopBar
