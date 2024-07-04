import { ICourse } from '@/database/course.model'

export type TCreateUser = {
  clerkId: string
  username: string
  email: string
  name?: string
  avatar?: string
}

export type TCreateCourse = {
  title: string
  slug: string
  author: string
}

export type TUpdateCourse = {
  slug: string
  info: Partial<ICourse> & {
    info?: Partial<ICourse['info']>
  }
}
