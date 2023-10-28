import User from '~/server/schemas/user'
import type { IUser } from '~/server/api/users/types'

export default defineEventHandler(async () => {
  const users: IUser[] = await User.find({}).select(
    'firstName lastName email age hasPets -_id',
  )
  if (!users)
    throw createError({ statusCode: 404, statusMessage: 'No users found' })
  return users
})
