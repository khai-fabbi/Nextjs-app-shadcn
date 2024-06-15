import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  className?: string
}

const Heading = ({ children, className }: Props) => {
  return (
    <h2 className={cn('text-3xl font-bold mb-4', className)}>{children}</h2>
  )
}

export default Heading
