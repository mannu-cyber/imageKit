import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import multer from 'multer'
import morgan from 'morgan'

dotenv.config()
const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import { connectDB } from './config/db'
import postImage from './controllers/upload'

const upload = multer({ dest: 'uploads/' })

app.post("/api/uploads", upload.single("image"), postImage)



app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy"
  })
})

connectDB()
app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
})