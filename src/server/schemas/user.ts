import mongoose from 'mongoose'
import { IUser } from '~/server/api/usersList/types'

const user = new mongoose.Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    hasPets: { type: Boolean, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
  { collection: 'authentication' }
)

export default mongoose.model?.User || mongoose.model('authentication', user)
