'use server'

import User, { IUser } from '@/database/user.model'
import { connectToDatabase } from '../mongoose'
import { TCreateUser } from '@/types'

export async function createUser(user: TCreateUser) {
  try {
    await connectToDatabase()
    const newUser = await User.create(user)
    return newUser
  } catch (error) {
    console.log(error)
  }
}

export async function getUser(
  clerkId: string
): Promise<IUser | null | undefined> {
  try {
    await connectToDatabase()
    const findUser = await User.findOne({ clerkId: clerkId })
    return findUser || null
  } catch (error) {
    console.log(error)
  }
}
