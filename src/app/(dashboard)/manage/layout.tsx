import { EUserRole } from '@/constants/enums'
import { getUser } from '@/lib/actions/user.actions'
import { auth } from '@clerk/nextjs/server'
import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import * as React from 'react'

export const metadata: Metadata = {
  title: 'Quản lý thông tin',
  description: 'Quản lý thông tin',
}

export default async function ManageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()
  if (!userId) redirect('/sign-in')
  console.log(userId)
  const user = await getUser(userId)
  if (user && user.role !== EUserRole.ADMIN) return notFound()
  return <>{children}</>
}
