import { Document } from 'mongoose'

export interface IUser extends Document {
  firstName: string
  lastName: string
  email: string
  age: number
  hasPets: boolean
  date: Date
}
