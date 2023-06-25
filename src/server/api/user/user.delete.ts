import User from '~/server/schemas/user'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  if (!query.email)
    throw createError({ statusCode: 404, statusMessage: 'No email provided' })
  await User.deleteOne({ email: query.email })
  return 'User deleted'
})
