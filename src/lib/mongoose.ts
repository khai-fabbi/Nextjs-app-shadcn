'use server'

import mongoose from 'mongoose'
const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@fabbi.0y522zf.mongodb.net/?retryWrites=true&w=majority`

let isConnected = false

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log('Already connected to database')
    return
  }

  try {
    await mongoose.connect(uri, {
      dbName: process.env.DATABASE_NAME,
    })
    isConnected = true
    console.log('Connected to database')
  } catch (error) {
    console.log('Error connecting to database')
  }
}
