import User from '~/server/schemas/user'

export default defineEventHandler(async (event) => {
  const body = readBody(event)
  const user: typeof User = new User(body)
  if (!user)
    throw createError({ statusCode: 404, statusMessage: 'No user provided' })
  await user.save()
})
