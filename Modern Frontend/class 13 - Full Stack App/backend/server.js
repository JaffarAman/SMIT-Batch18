import express from 'express'
import authRoute from './routes/auth.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import todoRoute from './routes/todo.js'
dotenv.config()
const app = express()

// const PORT = process.env.PORT || 5000

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({}))

//mongoDb connect
const URI = process.env.MONGODB_URI
console.log('URI', URI)
mongoose
  .connect(URI)
  .then(res => console.log('MONGODB CONNECTED!'))
  .catch(err => console.log('MONGODB ERROR:!', err))

app.get('/health', (request, response) => {
  console.log('SERVER RUNNING....')
  response.json({
    message: 'SERVER RUNNING...',
    status: true
  })
})

// /api/auth/signup

app.use('/api/auth', authRoute)
app.use('/api/todo', todoRoute)

// For local development
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

// app.listen(PORT, () => console.log(`server runnng on http://localhost:${PORT}`))

export default app
