import { Loader } from 'lucide-react'

export default function Loading() {
  return (
    <div className='absolute inset-0 flex h-[100vh] items-center justify-center bg-black/[.1]'>
      <Loader className='animate-spin w-12 h-12 text-primary -mt-10' />
    </div>
  )
}
