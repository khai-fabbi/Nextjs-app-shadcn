import { CourseAddCourse } from '@/components/course'
import { Heading } from '@/components/typography'
import React from 'react'

const CourseAddNew = () => {
  return (
    <>
      <Heading>Thêm khóa học</Heading>
      <CourseAddCourse />
    </>
  )
}

export default CourseAddNew
