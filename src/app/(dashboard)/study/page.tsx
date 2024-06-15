import { CourseItem } from '@/components/course'
import { Heading } from '@/components/typography'
import React from 'react'

const Study = () => {
  return (
    <section>
      <Heading>Khu vực học tập</Heading>
      <div className='grid grid-cols-4 gap-8'>
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </section>
  )
}

export default Study
