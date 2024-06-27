import { ELessonType } from '@/constants/enums'
import { Document, Schema, Types, model, models } from 'mongoose'

export interface ILesson extends Document {
  _id: string
  title: string
  slug: string
  video_url: string
  content: string
  order: number
  type: ELessonType
  lecture: Types.ObjectId
  course: Types.ObjectId
  duration: number
  created_at: Date
  _destroy: boolean
}

const lessonSchema = new Schema<ILesson>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 0,
  },
  content: {
    type: String,
  },
  video_url: {
    type: String,
  },
  type: {
    type: String,
    enum: Object.values(ELessonType),
    default: ELessonType.VIDEO,
  },
  lecture: {
    type: Schema.Types.ObjectId,
    ref: 'Lecture',
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
})

const Lesson = models.Lesson || model<ILesson>('Lesson', lessonSchema)

export default Lesson
