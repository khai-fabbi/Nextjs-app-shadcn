'use server'

import Course from '@/database/course.model'
import { connectToDatabase } from '../mongoose'
import { TCreateCourse } from '@/types'

export const createCourse = async (courseInfo: TCreateCourse) => {
  try {
    await connectToDatabase()
    const newCourse = await Course.create(courseInfo)
    return {
      message: 'OK',
      data: newCourse.toString(),
    }
  } catch (error) {
    throw new Error('Loi roi')
  }
}
