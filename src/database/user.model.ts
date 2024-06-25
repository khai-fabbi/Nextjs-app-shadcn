import { EUserRole, EUserStatus } from '@/constants/enums'
import { Document, Schema, Types, model, models } from 'mongoose'

export interface IUser extends Document {
  clerkId: string
  name: string
  username: string
  email: string
  avatar: string
  courses: Types.ObjectId
  status: EUserStatus
  role: EUserRole
  created_at: Date
}

const userSchema = new Schema<IUser>({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: {
    type: String,
  },
  courses: {
    type: Schema.Types.ObjectId,
    ref: 'courses',
  },
  role: {
    type: String,
    enum: Object.values(EUserRole),
    default: EUserRole.USER,
  },
  status: {
    type: String,
    enum: Object.values(EUserStatus),
    default: EUserStatus.ACTIVE,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
})

const User = models.User || model('User', userSchema)

export default User
