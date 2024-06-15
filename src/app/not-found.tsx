import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ArrowLeft, BellRing } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <main>
      <section className='bg-primary-foreground'>
        <div className='text-primary flex min-h-screen flex-col items-center justify-center'>
          <BellRing size={60} className='animate-flicker text-red-500' />
          <h1 className='mt-8  text-4xl md:text-6xl font-semibold'>
            Page Not Found
          </h1>
          <Link href='/'>
            <Button className='mt-4' variant='outline'>
              <ArrowLeft className='mr-1' />
              Back to home
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
