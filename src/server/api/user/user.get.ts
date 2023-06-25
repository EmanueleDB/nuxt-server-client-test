import User from '~/server/schemas/user'
import { IUser } from '~/server/api/user/types'

export default defineEventHandler(async (event) => {
  const users: IUser[] = await User.find({}).select(
    'firstName lastName email age hasPets -_id'
  )
  if (!users)
    throw createError({ statusCode: 404, statusMessage: 'No users found' })
  return users
})
