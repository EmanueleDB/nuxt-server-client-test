import mongoose from 'mongoose'
const config = useRuntimeConfig()

mongoose.Promise = global.Promise

export default async () => {
  try {
    await mongoose.connect(config.MONGO_URL)
  } catch (err) {
    console.log('DB connection failed', err)
  }
}

mongoose.connection
  .once('open', () => console.log('MongoDB running'))
  .on('error', (e) => {
    throw e
  })
