import User from '~/server/schemas/user'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (!body.email)
    throw createError({ statusCode: 404, statusMessage: 'No email provided' })
  const user = await User.findOneAndUpdate({ email: body.email }, body)
  return { message: 'User modified', user }
})
