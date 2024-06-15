import { Layout } from '@/components/layouts'
import { Metadata } from 'next'
import * as React from 'react'

export const metadata: Metadata = {
  title: 'Fabbi JSC',
  description: 'Fabbi JSC',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
