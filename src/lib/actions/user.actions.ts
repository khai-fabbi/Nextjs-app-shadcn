'use server'

import User, { IUser } from '@/database/user.model'
import { connectToDatabase } from '../mongoose'
import { TCreateUser } from '@/types'

export default async function createUser(user: TCreateUser) {
  try {
    await connectToDatabase()
    const newUser = await User.create(user)
    return newUser
  } catch (error) {
    console.log(error)
  }
}
