import express from 'express'

import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import authRoutes from "./routes/authRoutes.js"
import connectDB from './config/db.js'
import TaskRoutes from "./routes/TaskRoute.js"
dotenv.config();

const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

connectDB();

app.use("/api/auth",authRoutes)
app.use("/api/task",TaskRoutes)

app.listen(5000,()=>{
    console.log(`Server running on port ${5000}`)
})
