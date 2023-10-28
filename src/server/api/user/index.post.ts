import User from '~/server/schemas/user'
import type { IUser } from '~/server/api/users/types'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (!body.email)
    throw createError({ statusCode: 404, statusMessage: 'No e-mail provided' })
  const foundUser = await User.findOneAndUpdate({ email: body.email }, body)
  if (foundUser) return { message: 'User modified', body }

  const newUser: IUser = new User(body)
  await newUser.save()
})
