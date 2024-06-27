import { Schema, Types, model, models } from 'mongoose'

export interface ILecture {
  _id: string
  title: string
  order: number
  course: Types.ObjectId
  lessons: Types.ObjectId[]
  created_at: Date
  _destroy: boolean
}

const lectureSchema = new Schema<ILecture>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
  order: {
    type: Number,
    default: 0,
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

const Lecture = models.Lecture || model<ILecture>('Lecture', lectureSchema)

export default Lecture
