import { CourseAddForm } from '@/components/course'
import { Heading } from '@/components/typography'
import { getUser } from '@/lib/actions/user.actions'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const CourseAddNew = async () => {
  const { userId } = auth()
  if (!userId) return null
  const user = await getUser(userId)
  if (!user) return null
  return (
    <>
      <Heading>Thêm khóa học</Heading>
      <CourseAddForm userId={user.id} />
    </>
  )
}

export default CourseAddNew
