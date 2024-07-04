'use server'

import Course, { ICourse } from '@/database/course.model'
import { connectToDatabase } from '../mongoose'
import { TCreateCourse, TUpdateCourse } from '@/types'

export const getCourseList = async (): Promise<ICourse[] | undefined> => {
  try {
    await connectToDatabase()
    const courseList = await Course.find({})
    return courseList
  } catch (error) {
    console.log(error)
  }
}

export const getCourseBySlug = async (
  slug: string
): Promise<ICourse | undefined> => {
  try {
    const findCourse = await Course.findOne({ slug })
    console.log(findCourse)

    return JSON.parse(JSON.stringify(findCourse))
  } catch (error) {
    console.log(error)
  }
}

export const createCourse = async (courseInfo: TCreateCourse) => {
  try {
    await connectToDatabase()
    const findCourse = await Course.findOne({
      title: courseInfo.title,
    })
    if (findCourse) {
      return {
        message: 'Tên khóa học đã tồn tại',
        data: null,
      }
    }
    const newCourse = await Course.create(courseInfo)
    return {
      message: 'OK',
      data: JSON.parse(JSON.stringify(newCourse)),
    }
  } catch (error) {
    throw new Error('Loi roi')
  }
}

export const updateCourse = async (payload: TUpdateCourse) => {
  try {
    await connectToDatabase()
    const filter = {
      slug: payload.slug,
    }
    const findCourse = await Course.findOneAndUpdate(filter, payload.info, {
      new: true,
    })
    console.log(findCourse)

    if (!findCourse) {
      return {
        status: false,
        message: 'Không tìm thấy khóa học',
        data: null,
      }
    }

    return JSON.parse(JSON.stringify(findCourse))
  } catch (error) {
    throw new Error('Loi roi')
  }
}
