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
}
