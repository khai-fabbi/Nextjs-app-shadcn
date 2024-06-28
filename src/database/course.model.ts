import { ECourseLevel, ECourseStatus } from '@/constants/enums'
import { Document, Schema, Types, model, models } from 'mongoose'

export interface ICourse extends Document {
  _id: string
  title: string
  slug: string
  desc: string
  image: string
  intro_url: string
  price: number
  sale_price: number
  views: number
  rating: number[]
  status: ECourseStatus
  level: ECourseLevel
  author: Types.ObjectId
  tags: Types.ObjectId[]
  lectures: Types.ObjectId[]
  info: {
    requirements: string[]
    benefits: string[]
    qa: {
      question: string
      answer: string
    }[]
  }
  created_at: Date
  _destroy: boolean
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  intro_url: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  },
  sale_price: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  rating: {
    type: [Number],
    default: [4],
  },
  status: {
    type: String,
    enum: Object.values(ECourseStatus),
    default: ECourseStatus.PENDING,
  },
  level: {
    type: String,
    enum: Object.values(ECourseLevel),
    default: ECourseLevel.BEGINNER,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tags',
    },
  ],
  lectures: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Lecture',
    },
  ],
  info: {
    requirements: {
      type: [String],
    },
    benefits: {
      type: [String],
    },
    qa: [
      {
        question: {
          type: String,
        },
        answer: {
          type: String,
        },
      },
    ],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
})

const Course = models.Course || model<ICourse>('Course', courseSchema)

export default Course
