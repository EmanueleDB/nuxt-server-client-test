import { Schema, model } from 'mongoose'
import type { IUser } from '~/server/api/users/types'

const user = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    hasPets: { type: Boolean, required: true },
    date: { type: Date, default: Date.now },
  },
  { collection: 'users' },
)

export default model<IUser>('User', user)
