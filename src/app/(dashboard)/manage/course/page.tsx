import { Heading } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { PlusCircleIcon, PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CoursePage = () => {
  return (
    <div>
      <Heading>Danh sách khóa học</Heading>
      <Link href={'/manage/course/new'}>
        <Button size={'lg'}>
          Thêm khóa học <PlusCircleIcon className='ml-2' />
        </Button>
      </Link>
    </div>
  )
}

export default CoursePage
