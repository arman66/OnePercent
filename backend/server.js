import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()


const app = express()


//this will let you accept json data in the body
app.use(express.json())



app.use('/api/users', userRoutes)

//Error middleware , middleware has access to the req res cycle
app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`)
)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
}




//for the build folder for production
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
// })