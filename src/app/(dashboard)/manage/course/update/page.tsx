import { CourseUpdateForm } from '@/components/course'
import { Heading } from '@/components/typography'
import { getCourseBySlug } from '@/lib/actions/course.actions'
import * as React from 'react'

export interface ICourseUpdateProps {
  searchParams: {
    slug: string
  }
}

export default async function CourseUpdate({
  searchParams,
}: ICourseUpdateProps) {
  const slug = searchParams.slug
  if (!slug) return null
  const course = await getCourseBySlug(slug)
  if (!course) return null

  return (
    <>
      <Heading>Cập nhật khóa học</Heading>
      <CourseUpdateForm courseInfo={course} />
    </>
  )
}
