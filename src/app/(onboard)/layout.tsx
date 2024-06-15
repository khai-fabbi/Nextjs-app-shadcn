import { Metadata } from 'next'
import * as React from 'react'

export const metadata: Metadata = {
  title: 'Onboard Layout',
  description: 'Onboard Layout',
}

export default function OnboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      {children}
    </div>
  )
}
