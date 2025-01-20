import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./dbConnection/dbConnection.js"
import { routes } from "./routes/index.js"




const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
app.use(routes)



















const PORT = process.env.PORT || 3000

connectDB()
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
})

